/** @typedef {{ stemWord(word: string): string }} Stemmer */

const _stemmers = /** @type {const} */ ([
	['ar', () => import('../languages/arabic.mjs')],
	['ca', () => import('../languages/catalan.mjs')],
	['da', () => import('../languages/danish.mjs')],
	['de', () => import('../languages/german.mjs')],
	['el', () => import('../languages/greek.mjs')],
	['en', () => import('../languages/english.mjs')],
	['es', () => import('../languages/spanish.mjs')],
	['eu', () => import('../languages/basque.mjs')],
	['fi', () => import('../languages/finnish.mjs')],
	['fr', () => import('../languages/french.mjs')],
	['ga', () => import('../languages/irish.mjs')],
	['hi', () => import('../languages/hindi.mjs')],
	['hu', () => import('../languages/hungarian.mjs')],
	['hy', () => import('../languages/armenian.mjs')],
	['id', () => import('../languages/indonesian.mjs')],
	['it', () => import('../languages/italian.mjs')],
	['lt', () => import('../languages/lithuanian.mjs')],
	['ne', () => import('../languages/nepali.mjs')],
	['nl', () => import('../languages/dutch.mjs')],
	['no', () => import('../languages/norwegian.mjs')],
	['pt', () => import('../languages/portuguese.mjs')],
	['ro', () => import('../languages/romanian.mjs')],
	['ru', () => import('../languages/russian.mjs')],
	['sr', () => import('../languages/serbian.mjs')],
	['sv', () => import('../languages/swedish.mjs')],
	['ta', () => import('../languages/tamil.mjs')],
	['tr', () => import('../languages/turkish.mjs')],
	['yi', () => import('../languages/yiddish.mjs')],
])

const _wipStemmers = /** @type {const} */ ([
	['cs', () => import('../languages/czech.mjs')],
	['pl', () => import('../languages/polish.mjs')],
	['sk', () => import('../languages/slovak.mjs')],
	['uk', () => import('../languages/ukrainian.mjs')],
])

const stemmers = new Map(_stemmers)
const wipStemmers = new Map(_wipStemmers)

/** @type {Map<string, Stemmer | null>} */
const cache = new Map()

/**
 * @template {boolean | undefined} [AllowWip=false]
 *
 * @typedef {Object} Options
 *
 * @property {AllowWip} allowWip - Whether to allow work-in-progress stemmers or not.
 * If not, `null` is returned for any work-in-progress stemmers.
 * @default false
 */

/**
 * @template {boolean | undefined} AllowWip
 * @type {Options}
 */
const defaultOptions = {
	allowWip: false,
}

/**
 * @template {string | Intl.Locale} Locale
 * @template {boolean | undefined} [AllowWip=undefined]
 *
 * @param {string extends Locale
 * 	? Locale
 * 	: Locale extends typeof _stemmers[number][0]
 * 	? Locale
 * 	: Locale extends typeof _wipStemmers[number][0]
 * 	? AllowWip extends true
 * 	? Locale
 * 	: never
 * 	? Intl.Locale extends Locale
 * 	? Locale
 * 	: never
 * } locale
 * @param {Partial<Options<AllowWip>>} [options]
 *
 * @throws {TypeError} if an invalid locale is passed
 *
 * @returns {Promise<string extends Locale
 * 	? (Stemmer | null)
 * 	: Locale extends typeof _stemmers[number][0]
 * 	? Stemmer
 * 	: Locale extends typeof _wipStemmers[number][0]
 * 	? AllowWip extends true
 * 	? Stemmer
 * 	: null
 * 	? Intl.Locale extends Locale
 * 	? (Stemmer | null)
 * 	: null
 * >} Singleton instance of `Stemmer` if exists for that locale, else `null`
 */
export async function getStemmerByLocale(locale, options) {
	const { allowWip } = { ...defaultOptions, ...options }
	const { language } = new Intl.Locale(locale)
	const cacheKey = `${language}::${allowWip}`

	if (!cache.has(cacheKey)) {
		const mod = stemmers.get(language) ?? (allowWip ? wipStemmers.get(language) : null)
		const instance = mod ? new (await mod()).default() : null

		cache.set(cacheKey, instance)
	}

	return cache.get(cacheKey) ?? null
}

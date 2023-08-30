// Generated by Snowball 2.2.0 - https://snowballstem.org/
// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'

/** @typedef {{ stemWord(word: string): string }} Stemmer */

/** @type {{ new(): Stemmer }} */
const GermanStemmer = function () {
	var base = new BaseStemmer()
	/** @const */ var a_0 = [
		['', -1, 5],
		['U', 0, 2],
		['Y', 0, 1],
		['\u00E4', 0, 3],
		['\u00F6', 0, 4],
		['\u00FC', 0, 2],
	]

	/** @const */ var a_1 = [
		['e', -1, 2],
		['em', -1, 1],
		['en', -1, 2],
		['ern', -1, 1],
		['er', -1, 1],
		['s', -1, 3],
		['es', 5, 2],
	]

	/** @const */ var a_2 = [
		['en', -1, 1],
		['er', -1, 1],
		['st', -1, 2],
		['est', 2, 1],
	]

	/** @const */ var a_3 = [
		['ig', -1, 1],
		['lich', -1, 1],
	]

	/** @const */ var a_4 = [
		['end', -1, 1],
		['ig', -1, 2],
		['ung', -1, 1],
		['lich', -1, 3],
		['isch', -1, 2],
		['ik', -1, 2],
		['heit', -1, 3],
		['keit', -1, 4],
	]

	/** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8]

	/** @const */ var /** Array<int> */ g_s_ending = [117, 30, 5]

	/** @const */ var /** Array<int> */ g_st_ending = [117, 30, 4]

	var /** number */ I_x = 0
	var /** number */ I_p2 = 0
	var /** number */ I_p1 = 0

	/** @return {boolean} */
	function r_prelude() {
		var /** number */ v_1 = base.cursor
		while (true) {
			var /** number */ v_2 = base.cursor
			lab0: {
				lab1: {
					var /** number */ v_3 = base.cursor
					lab2: {
						base.bra = base.cursor
						if (!(base.eq_s('\u00DF'))) {
							break lab2
						}
						base.ket = base.cursor
						if (!base.slice_from('ss')) {
							return false
						}
						break lab1
					}
					base.cursor = v_3
					if (base.cursor >= base.limit) {
						break lab0
					}
					base.cursor++
				}
				continue
			}
			base.cursor = v_2
			break
		}
		base.cursor = v_1
		while (true) {
			var /** number */ v_4 = base.cursor
			lab3: {
				golab4:
				while (true) {
					var /** number */ v_5 = base.cursor
					lab5: {
						if (!(base.in_grouping(g_v, 97, 252))) {
							break lab5
						}
						base.bra = base.cursor
						lab6: {
							var /** number */ v_6 = base.cursor
							lab7: {
								if (!(base.eq_s('u'))) {
									break lab7
								}
								base.ket = base.cursor
								if (!(base.in_grouping(g_v, 97, 252))) {
									break lab7
								}
								if (!base.slice_from('U')) {
									return false
								}
								break lab6
							}
							base.cursor = v_6
							if (!(base.eq_s('y'))) {
								break lab5
							}
							base.ket = base.cursor
							if (!(base.in_grouping(g_v, 97, 252))) {
								break lab5
							}
							if (!base.slice_from('Y')) {
								return false
							}
						}
						base.cursor = v_5
						break golab4
					}
					base.cursor = v_5
					if (base.cursor >= base.limit) {
						break lab3
					}
					base.cursor++
				}
				continue
			}
			base.cursor = v_4
			break
		}
		return true
	}

	/** @return {boolean} */
	function r_mark_regions() {
		I_p1 = base.limit
		I_p2 = base.limit
		var /** number */ v_1 = base.cursor
		{
			var /** number */ c1 = base.cursor + 3
			if (c1 > base.limit) {
				return false
			}
			base.cursor = c1
		}
		I_x = base.cursor
		base.cursor = v_1
		golab0:
		while (true) {
			lab1: {
				if (!(base.in_grouping(g_v, 97, 252))) {
					break lab1
				}
				break golab0
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		golab2:
		while (true) {
			lab3: {
				if (!(base.out_grouping(g_v, 97, 252))) {
					break lab3
				}
				break golab2
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		I_p1 = base.cursor
		lab4: {
			if (!(I_p1 < I_x)) {
				break lab4
			}
			I_p1 = I_x
		}
		golab5:
		while (true) {
			lab6: {
				if (!(base.in_grouping(g_v, 97, 252))) {
					break lab6
				}
				break golab5
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		golab7:
		while (true) {
			lab8: {
				if (!(base.out_grouping(g_v, 97, 252))) {
					break lab8
				}
				break golab7
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		I_p2 = base.cursor
		return true
	}

	/** @return {boolean} */
	function r_postlude() {
		var /** number */ among_var
		while (true) {
			var /** number */ v_1 = base.cursor
			lab0: {
				base.bra = base.cursor
				among_var = base.find_among(a_0)
				if (among_var == 0) {
					break lab0
				}
				base.ket = base.cursor
				switch (among_var) {
					case 1:
						if (!base.slice_from('y')) {
							return false
						}
						break
					case 2:
						if (!base.slice_from('u')) {
							return false
						}
						break
					case 3:
						if (!base.slice_from('a')) {
							return false
						}
						break
					case 4:
						if (!base.slice_from('o')) {
							return false
						}
						break
					case 5:
						if (base.cursor >= base.limit) {
							break lab0
						}
						base.cursor++
						break
				}
				continue
			}
			base.cursor = v_1
			break
		}
		return true
	}

	/** @return {boolean} */
	function r_R1() {
		if (!(I_p1 <= base.cursor)) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_R2() {
		if (!(I_p2 <= base.cursor)) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_standard_suffix() {
		var /** number */ among_var
		var /** number */ v_1 = base.limit - base.cursor
		lab0: {
			base.ket = base.cursor
			among_var = base.find_among_b(a_1)
			if (among_var == 0) {
				break lab0
			}
			base.bra = base.cursor
			if (!r_R1()) {
				break lab0
			}
			switch (among_var) {
				case 1:
					if (!base.slice_del()) {
						return false
					}
					break
				case 2:
					if (!base.slice_del()) {
						return false
					}
					var /** number */ v_2 = base.limit - base.cursor
					lab1: {
						base.ket = base.cursor
						if (!(base.eq_s_b('s'))) {
							base.cursor = base.limit - v_2
							break lab1
						}
						base.bra = base.cursor
						if (!(base.eq_s_b('nis'))) {
							base.cursor = base.limit - v_2
							break lab1
						}
						if (!base.slice_del()) {
							return false
						}
					}
					break
				case 3:
					if (!(base.in_grouping_b(g_s_ending, 98, 116))) {
						break lab0
					}
					if (!base.slice_del()) {
						return false
					}
					break
			}
		}
		base.cursor = base.limit - v_1
		var /** number */ v_3 = base.limit - base.cursor
		lab2: {
			base.ket = base.cursor
			among_var = base.find_among_b(a_2)
			if (among_var == 0) {
				break lab2
			}
			base.bra = base.cursor
			if (!r_R1()) {
				break lab2
			}
			switch (among_var) {
				case 1:
					if (!base.slice_del()) {
						return false
					}
					break
				case 2:
					if (!(base.in_grouping_b(g_st_ending, 98, 116))) {
						break lab2
					}
					{
						var /** number */ c1 = base.cursor - 3
						if (c1 < base.limit_backward) {
							break lab2
						}
						base.cursor = c1
					}
					if (!base.slice_del()) {
						return false
					}
					break
			}
		}
		base.cursor = base.limit - v_3
		var /** number */ v_4 = base.limit - base.cursor
		lab3: {
			base.ket = base.cursor
			among_var = base.find_among_b(a_4)
			if (among_var == 0) {
				break lab3
			}
			base.bra = base.cursor
			if (!r_R2()) {
				break lab3
			}
			switch (among_var) {
				case 1:
					if (!base.slice_del()) {
						return false
					}
					var /** number */ v_5 = base.limit - base.cursor
					lab4: {
						base.ket = base.cursor
						if (!(base.eq_s_b('ig'))) {
							base.cursor = base.limit - v_5
							break lab4
						}
						base.bra = base.cursor
						{
							var /** number */ v_6 = base.limit - base.cursor
							lab5: {
								if (!(base.eq_s_b('e'))) {
									break lab5
								}
								base.cursor = base.limit - v_5
								break lab4
							}
							base.cursor = base.limit - v_6
						}
						if (!r_R2()) {
							base.cursor = base.limit - v_5
							break lab4
						}
						if (!base.slice_del()) {
							return false
						}
					}
					break
				case 2:
					{
						var /** number */ v_7 = base.limit - base.cursor
						lab6: {
							if (!(base.eq_s_b('e'))) {
								break lab6
							}
							break lab3
						}
						base.cursor = base.limit - v_7
					}
					if (!base.slice_del()) {
						return false
					}
					break
				case 3:
					if (!base.slice_del()) {
						return false
					}
					var /** number */ v_8 = base.limit - base.cursor
					lab7: {
						base.ket = base.cursor
						lab8: {
							var /** number */ v_9 = base.limit - base.cursor
							lab9: {
								if (!(base.eq_s_b('er'))) {
									break lab9
								}
								break lab8
							}
							base.cursor = base.limit - v_9
							if (!(base.eq_s_b('en'))) {
								base.cursor = base.limit - v_8
								break lab7
							}
						}
						base.bra = base.cursor
						if (!r_R1()) {
							base.cursor = base.limit - v_8
							break lab7
						}
						if (!base.slice_del()) {
							return false
						}
					}
					break
				case 4:
					if (!base.slice_del()) {
						return false
					}
					var /** number */ v_10 = base.limit - base.cursor
					lab10: {
						base.ket = base.cursor
						if (base.find_among_b(a_3) == 0) {
							base.cursor = base.limit - v_10
							break lab10
						}
						base.bra = base.cursor
						if (!r_R2()) {
							base.cursor = base.limit - v_10
							break lab10
						}
						if (!base.slice_del()) {
							return false
						}
					}
					break
			}
		}
		base.cursor = base.limit - v_4
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		var /** number */ v_1 = base.cursor
		r_prelude()
		base.cursor = v_1
		var /** number */ v_2 = base.cursor
		r_mark_regions()
		base.cursor = v_2
		base.limit_backward = base.cursor
		base.cursor = base.limit
		r_standard_suffix()
		base.cursor = base.limit_backward
		var /** number */ v_4 = base.cursor
		r_postlude()
		base.cursor = v_4
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
}

export default GermanStemmer

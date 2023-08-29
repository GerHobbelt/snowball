// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'
// Generated by Snowball 2.2.0 - https://snowballstem.org/

/**@constructor*/
/** @type {StemmerConstructor} */
export default (function Kraaij_pohlmannStemmer() {
	var base = new BaseStemmer()
	/** @const */ var a_0 = [
		['nde', -1, 7],
		['en', -1, 6],
		['s', -1, 2],
		['\'s', 2, 1],
		['es', 2, 4],
		['ies', 4, 3],
		['aus', 2, 5],
	]

	/** @const */ var a_1 = [
		['de', -1, 5],
		['ge', -1, 2],
		['ische', -1, 4],
		['je', -1, 1],
		['lijke', -1, 3],
		['le', -1, 9],
		['ene', -1, 10],
		['re', -1, 8],
		['se', -1, 7],
		['te', -1, 6],
		['ieve', -1, 11],
	]

	/** @const */ var a_2 = [
		['heid', -1, 3],
		['fie', -1, 6],
		['gie', -1, 7],
		['atie', -1, 1],
		['isme', -1, 2],
		['ing', -1, 2],
		['arij', -1, 5],
		['erij', -1, 2],
		['sel', -1, 3],
		['rder', -1, 4],
		['ster', -1, 3],
		['iteit', -1, 2],
		['dst', -1, 9],
		['tst', -1, 8],
	]

	/** @const */ var a_3 = [
		['end', -1, 9],
		['atief', -1, 2],
		['erig', -1, 9],
		['achtig', -1, 3],
		['ioneel', -1, 1],
		['baar', -1, 3],
		['laar', -1, 5],
		['naar', -1, 4],
		['raar', -1, 6],
		['eriger', -1, 9],
		['achtiger', -1, 3],
		['lijker', -1, 8],
		['tant', -1, 7],
		['erigst', -1, 9],
		['achtigst', -1, 3],
		['lijkst', -1, 8],
	]

	/** @const */ var a_4 = [
		['ig', -1, 1],
		['iger', -1, 1],
		['igst', -1, 1],
	]

	/** @const */ var a_5 = [
		['ft', -1, 2],
		['kt', -1, 1],
		['pt', -1, 3],
	]

	/** @const */ var a_6 = [
		['bb', -1, 1],
		['cc', -1, 2],
		['dd', -1, 3],
		['ff', -1, 4],
		['gg', -1, 5],
		['hh', -1, 6],
		['jj', -1, 7],
		['kk', -1, 8],
		['ll', -1, 9],
		['mm', -1, 10],
		['nn', -1, 11],
		['pp', -1, 12],
		['qq', -1, 13],
		['rr', -1, 14],
		['ss', -1, 15],
		['tt', -1, 16],
		['v', -1, 4],
		['vv', 16, 17],
		['ww', -1, 18],
		['xx', -1, 19],
		['z', -1, 15],
		['zz', 20, 20],
	]

	/** @const */ var a_7 = [
		['d', -1, 1],
		['t', -1, 2],
	]

	/** @const */ var /** Array<int> */ g_v = [17, 65, 16, 1]

	/** @const */ var /** Array<int> */ g_v_WX = [17, 65, 208, 1]

	/** @const */ var /** Array<int> */ g_AOU = [1, 64, 16]

	/** @const */ var /** Array<int> */ g_AIOU = [1, 65, 16]

	var /** boolean */ B_GE_removed = false
	var /** boolean */ B_stemmed = false
	var /** boolean */ B_Y_found = false
	var /** number */ I_p2 = 0
	var /** number */ I_p1 = 0
	var /** string */ S_ch = ''

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
	function r_V() {
		var /** number */ v_1 = base.limit - base.cursor
		lab0: {
			var /** number */ v_2 = base.limit - base.cursor
			lab1: {
				if (!(base.in_grouping_b(g_v, 97, 121))) {
					break lab1
				}
				break lab0
			}
			base.cursor = base.limit - v_2
			if (!(base.eq_s_b('ij'))) {
				return false
			}
		}
		base.cursor = base.limit - v_1
		return true
	}

	/** @return {boolean} */
	function r_VX() {
		var /** number */ v_1 = base.limit - base.cursor
		if (base.cursor <= base.limit_backward) {
			return false
		}
		base.cursor--
		lab0: {
			var /** number */ v_2 = base.limit - base.cursor
			lab1: {
				if (!(base.in_grouping_b(g_v, 97, 121))) {
					break lab1
				}
				break lab0
			}
			base.cursor = base.limit - v_2
			if (!(base.eq_s_b('ij'))) {
				return false
			}
		}
		base.cursor = base.limit - v_1
		return true
	}

	/** @return {boolean} */
	function r_C() {
		var /** number */ v_1 = base.limit - base.cursor
		{
			var /** number */ v_2 = base.limit - base.cursor
			lab0: {
				if (!(base.eq_s_b('ij'))) {
					break lab0
				}
				return false
			}
			base.cursor = base.limit - v_2
		}
		if (!(base.out_grouping_b(g_v, 97, 121))) {
			return false
		}
		base.cursor = base.limit - v_1
		return true
	}

	/** @return {boolean} */
	function r_lengthen_V() {
		var /** number */ v_1 = base.limit - base.cursor
		lab0: {
			if (!(base.out_grouping_b(g_v_WX, 97, 121))) {
				break lab0
			}
			base.ket = base.cursor
			lab1: {
				var /** number */ v_2 = base.limit - base.cursor
				lab2: {
					if (!(base.in_grouping_b(g_AOU, 97, 117))) {
						break lab2
					}
					base.bra = base.cursor
					var /** number */ v_3 = base.limit - base.cursor
					lab3: {
						var /** number */ v_4 = base.limit - base.cursor
						lab4: {
							if (!(base.out_grouping_b(g_v, 97, 121))) {
								break lab4
							}
							break lab3
						}
						base.cursor = base.limit - v_4
						if (base.cursor > base.limit_backward) {
							break lab2
						}
					}
					base.cursor = base.limit - v_3
					break lab1
				}
				base.cursor = base.limit - v_2
				if (!(base.eq_s_b('e'))) {
					break lab0
				}
				base.bra = base.cursor
				var /** number */ v_5 = base.limit - base.cursor
				lab5: {
					var /** number */ v_6 = base.limit - base.cursor
					lab6: {
						if (!(base.out_grouping_b(g_v, 97, 121))) {
							break lab6
						}
						break lab5
					}
					base.cursor = base.limit - v_6
					if (base.cursor > base.limit_backward) {
						break lab0
					}
				}
				{
					var /** number */ v_7 = base.limit - base.cursor
					lab7: {
						if (!(base.in_grouping_b(g_AIOU, 97, 117))) {
							break lab7
						}
						break lab0
					}
					base.cursor = base.limit - v_7
				}
				{
					var /** number */ v_8 = base.limit - base.cursor
					lab8: {
						if (base.cursor <= base.limit_backward) {
							break lab8
						}
						base.cursor--
						if (!(base.in_grouping_b(g_AIOU, 97, 117))) {
							break lab8
						}
						if (!(base.out_grouping_b(g_v, 97, 121))) {
							break lab8
						}
						break lab0
					}
					base.cursor = base.limit - v_8
				}
				base.cursor = base.limit - v_5
			}
			S_ch = base.slice_to()
			if (S_ch == '') {
				return false
			}
			{
				var /** number */ c1 = base.cursor
				base.insert(base.cursor, base.cursor, S_ch)
				base.cursor = c1
			}
		}
		base.cursor = base.limit - v_1
		return true
	}

	/** @return {boolean} */
	function r_Step_1() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_0)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (!r_R1()) {
					return false
				}
				{
					var /** number */ v_1 = base.limit - base.cursor
					lab0: {
						if (!(base.eq_s_b('t'))) {
							break lab0
						}
						if (!r_R1()) {
							break lab0
						}
						return false
					}
					base.cursor = base.limit - v_1
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 3:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('ie')) {
					return false
				}
				break
			case 4:
				lab1: {
					var /** number */ v_2 = base.limit - base.cursor
					lab2: {
						if (!(base.eq_s_b('ar'))) {
							break lab2
						}
						if (!r_R1()) {
							break lab2
						}
						if (!r_C()) {
							break lab2
						}
						base.bra = base.cursor
						if (!base.slice_del()) {
							return false
						}
						if (!r_lengthen_V()) {
							break lab2
						}
						break lab1
					}
					base.cursor = base.limit - v_2
					lab3: {
						if (!(base.eq_s_b('er'))) {
							break lab3
						}
						if (!r_R1()) {
							break lab3
						}
						if (!r_C()) {
							break lab3
						}
						base.bra = base.cursor
						if (!base.slice_del()) {
							return false
						}
						break lab1
					}
					base.cursor = base.limit - v_2
					if (!r_R1()) {
						return false
					}
					if (!r_C()) {
						return false
					}
					if (!base.slice_from('e')) {
						return false
					}
				}
				break
			case 5:
				if (!r_R1()) {
					return false
				}
				if (!r_V()) {
					return false
				}
				if (!base.slice_from('au')) {
					return false
				}
				break
			case 6:
				lab4: {
					var /** number */ v_3 = base.limit - base.cursor
					lab5: {
						if (!(base.eq_s_b('hed'))) {
							break lab5
						}
						if (!r_R1()) {
							break lab5
						}
						base.bra = base.cursor
						if (!base.slice_from('heid')) {
							return false
						}
						break lab4
					}
					base.cursor = base.limit - v_3
					lab6: {
						if (!(base.eq_s_b('nd'))) {
							break lab6
						}
						if (!base.slice_del()) {
							return false
						}
						break lab4
					}
					base.cursor = base.limit - v_3
					lab7: {
						if (!(base.eq_s_b('d'))) {
							break lab7
						}
						if (!r_R1()) {
							break lab7
						}
						if (!r_C()) {
							break lab7
						}
						base.bra = base.cursor
						if (!base.slice_del()) {
							return false
						}
						break lab4
					}
					base.cursor = base.limit - v_3
					lab8: {
						lab9: {
							var /** number */ v_4 = base.limit - base.cursor
							lab10: {
								if (!(base.eq_s_b('i'))) {
									break lab10
								}
								break lab9
							}
							base.cursor = base.limit - v_4
							if (!(base.eq_s_b('j'))) {
								break lab8
							}
						}
						if (!r_V()) {
							break lab8
						}
						if (!base.slice_del()) {
							return false
						}
						break lab4
					}
					base.cursor = base.limit - v_3
					if (!r_R1()) {
						return false
					}
					if (!r_C()) {
						return false
					}
					if (!base.slice_del()) {
						return false
					}
					if (!r_lengthen_V()) {
						return false
					}
				}
				break
			case 7:
				if (!base.slice_from('nd')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Step_2() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_1)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				lab0: {
					var /** number */ v_1 = base.limit - base.cursor
					lab1: {
						if (!(base.eq_s_b('\'t'))) {
							break lab1
						}
						base.bra = base.cursor
						if (!base.slice_del()) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					lab2: {
						if (!(base.eq_s_b('et'))) {
							break lab2
						}
						base.bra = base.cursor
						if (!r_R1()) {
							break lab2
						}
						if (!r_C()) {
							break lab2
						}
						if (!base.slice_del()) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					lab3: {
						if (!(base.eq_s_b('rnt'))) {
							break lab3
						}
						base.bra = base.cursor
						if (!base.slice_from('rn')) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					lab4: {
						if (!(base.eq_s_b('t'))) {
							break lab4
						}
						base.bra = base.cursor
						if (!r_R1()) {
							break lab4
						}
						if (!r_VX()) {
							break lab4
						}
						if (!base.slice_del()) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					lab5: {
						if (!(base.eq_s_b('ink'))) {
							break lab5
						}
						base.bra = base.cursor
						if (!base.slice_from('ing')) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					lab6: {
						if (!(base.eq_s_b('mp'))) {
							break lab6
						}
						base.bra = base.cursor
						if (!base.slice_from('m')) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					lab7: {
						if (!(base.eq_s_b('\''))) {
							break lab7
						}
						base.bra = base.cursor
						if (!r_R1()) {
							break lab7
						}
						if (!base.slice_del()) {
							return false
						}
						break lab0
					}
					base.cursor = base.limit - v_1
					base.bra = base.cursor
					if (!r_R1()) {
						return false
					}
					if (!r_C()) {
						return false
					}
					if (!base.slice_del()) {
						return false
					}
				}
				break
			case 2:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('g')) {
					return false
				}
				break
			case 3:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('lijk')) {
					return false
				}
				break
			case 4:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('isch')) {
					return false
				}
				break
			case 5:
				if (!r_R1()) {
					return false
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 6:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('t')) {
					return false
				}
				break
			case 7:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('s')) {
					return false
				}
				break
			case 8:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('r')) {
					return false
				}
				break
			case 9:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				base.insert(base.cursor, base.cursor, 'l')
				if (!r_lengthen_V()) {
					return false
				}
				break
			case 10:
				if (!r_R1()) {
					return false
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				base.insert(base.cursor, base.cursor, 'en')
				if (!r_lengthen_V()) {
					return false
				}
				break
			case 11:
				if (!r_R1()) {
					return false
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_from('ief')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Step_3() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_2)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_from('eer')) {
					return false
				}
				break
			case 2:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				if (!r_lengthen_V()) {
					return false
				}
				break
			case 3:
				if (!r_R1()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 4:
				if (!base.slice_from('r')) {
					return false
				}
				break
			case 5:
				if (!r_R1()) {
					return false
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_from('aar')) {
					return false
				}
				break
			case 6:
				if (!r_R2()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				base.insert(base.cursor, base.cursor, 'f')
				if (!r_lengthen_V()) {
					return false
				}
				break
			case 7:
				if (!r_R2()) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				base.insert(base.cursor, base.cursor, 'g')
				if (!r_lengthen_V()) {
					return false
				}
				break
			case 8:
				if (!r_R1()) {
					return false
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_from('t')) {
					return false
				}
				break
			case 9:
				if (!r_R1()) {
					return false
				}
				if (!r_C()) {
					return false
				}
				if (!base.slice_from('d')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Step_4() {
		var /** number */ among_var
		lab0: {
			var /** number */ v_1 = base.limit - base.cursor
			lab1: {
				base.ket = base.cursor
				among_var = base.find_among_b(a_3)
				if (among_var == 0) {
					break lab1
				}
				base.bra = base.cursor
				switch (among_var) {
					case 1:
						if (!r_R1()) {
							break lab1
						}
						if (!base.slice_from('ie')) {
							return false
						}
						break
					case 2:
						if (!r_R1()) {
							break lab1
						}
						if (!base.slice_from('eer')) {
							return false
						}
						break
					case 3:
						if (!r_R1()) {
							break lab1
						}
						if (!base.slice_del()) {
							return false
						}
						break
					case 4:
						if (!r_R1()) {
							break lab1
						}
						if (!r_V()) {
							break lab1
						}
						if (!base.slice_from('n')) {
							return false
						}
						break
					case 5:
						if (!r_R1()) {
							break lab1
						}
						if (!r_V()) {
							break lab1
						}
						if (!base.slice_from('l')) {
							return false
						}
						break
					case 6:
						if (!r_R1()) {
							break lab1
						}
						if (!r_V()) {
							break lab1
						}
						if (!base.slice_from('r')) {
							return false
						}
						break
					case 7:
						if (!r_R1()) {
							break lab1
						}
						if (!base.slice_from('teer')) {
							return false
						}
						break
					case 8:
						if (!r_R1()) {
							break lab1
						}
						if (!base.slice_from('lijk')) {
							return false
						}
						break
					case 9:
						if (!r_R1()) {
							break lab1
						}
						if (!r_C()) {
							break lab1
						}
						if (!base.slice_del()) {
							return false
						}
						if (!r_lengthen_V()) {
							break lab1
						}
						break
				}
				break lab0
			}
			base.cursor = base.limit - v_1
			base.ket = base.cursor
			if (base.find_among_b(a_4) == 0) {
				return false
			}
			base.bra = base.cursor
			if (!r_R1()) {
				return false
			}
			if (!r_C()) {
				return false
			}
			if (!base.slice_del()) {
				return false
			}
			if (!r_lengthen_V()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_Step_7() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_5)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (!base.slice_from('k')) {
					return false
				}
				break
			case 2:
				if (!base.slice_from('f')) {
					return false
				}
				break
			case 3:
				if (!base.slice_from('p')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Step_6() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_6)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (!base.slice_from('b')) {
					return false
				}
				break
			case 2:
				if (!base.slice_from('c')) {
					return false
				}
				break
			case 3:
				if (!base.slice_from('d')) {
					return false
				}
				break
			case 4:
				if (!base.slice_from('f')) {
					return false
				}
				break
			case 5:
				if (!base.slice_from('g')) {
					return false
				}
				break
			case 6:
				if (!base.slice_from('h')) {
					return false
				}
				break
			case 7:
				if (!base.slice_from('j')) {
					return false
				}
				break
			case 8:
				if (!base.slice_from('k')) {
					return false
				}
				break
			case 9:
				if (!base.slice_from('l')) {
					return false
				}
				break
			case 10:
				if (!base.slice_from('m')) {
					return false
				}
				break
			case 11:
				if (!base.slice_from('n')) {
					return false
				}
				break
			case 12:
				if (!base.slice_from('p')) {
					return false
				}
				break
			case 13:
				if (!base.slice_from('q')) {
					return false
				}
				break
			case 14:
				if (!base.slice_from('r')) {
					return false
				}
				break
			case 15:
				if (!base.slice_from('s')) {
					return false
				}
				break
			case 16:
				if (!base.slice_from('t')) {
					return false
				}
				break
			case 17:
				if (!base.slice_from('v')) {
					return false
				}
				break
			case 18:
				if (!base.slice_from('w')) {
					return false
				}
				break
			case 19:
				if (!base.slice_from('x')) {
					return false
				}
				break
			case 20:
				if (!base.slice_from('z')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Step_1c() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_7)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		if (!r_R1()) {
			return false
		}
		if (!r_C()) {
			return false
		}
		switch (among_var) {
			case 1:
				{
					var /** number */ v_1 = base.limit - base.cursor
					lab0: {
						if (!(base.eq_s_b('n'))) {
							break lab0
						}
						if (!r_R1()) {
							break lab0
						}
						return false
					}
					base.cursor = base.limit - v_1
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				{
					var /** number */ v_2 = base.limit - base.cursor
					lab1: {
						if (!(base.eq_s_b('h'))) {
							break lab1
						}
						if (!r_R1()) {
							break lab1
						}
						return false
					}
					base.cursor = base.limit - v_2
				}
				if (!base.slice_del()) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Lose_prefix() {
		base.bra = base.cursor
		if (!(base.eq_s('ge'))) {
			return false
		}
		base.ket = base.cursor
		var /** number */ v_1 = base.cursor
		{
			var /** number */ c1 = base.cursor + 3
			if (c1 > base.limit) {
				return false
			}
			base.cursor = c1
		}
		base.cursor = v_1
		golab0:
		while (true) {
			var /** number */ v_2 = base.cursor
			lab1: {
				if (!(base.in_grouping(g_v, 97, 121))) {
					break lab1
				}
				base.cursor = v_2
				break golab0
			}
			base.cursor = v_2
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		golab2:
		while (true) {
			var /** number */ v_3 = base.cursor
			lab3: {
				if (!(base.out_grouping(g_v, 97, 121))) {
					break lab3
				}
				base.cursor = v_3
				break golab2
			}
			base.cursor = v_3
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		B_GE_removed = true
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Lose_infix() {
		if (base.cursor >= base.limit) {
			return false
		}
		base.cursor++
		golab0:
		while (true) {
			lab1: {
				base.bra = base.cursor
				if (!(base.eq_s('ge'))) {
					break lab1
				}
				base.ket = base.cursor
				break golab0
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		var /** number */ v_2 = base.cursor
		{
			var /** number */ c1 = base.cursor + 3
			if (c1 > base.limit) {
				return false
			}
			base.cursor = c1
		}
		base.cursor = v_2
		golab2:
		while (true) {
			var /** number */ v_3 = base.cursor
			lab3: {
				if (!(base.in_grouping(g_v, 97, 121))) {
					break lab3
				}
				base.cursor = v_3
				break golab2
			}
			base.cursor = v_3
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		golab4:
		while (true) {
			var /** number */ v_4 = base.cursor
			lab5: {
				if (!(base.out_grouping(g_v, 97, 121))) {
					break lab5
				}
				base.cursor = v_4
				break golab4
			}
			base.cursor = v_4
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		B_GE_removed = true
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_measure() {
		I_p1 = base.limit
		I_p2 = base.limit
		var /** number */ v_1 = base.cursor
		lab0: {
			while (true) {
				lab1: {
					if (!(base.out_grouping(g_v, 97, 121))) {
						break lab1
					}
					continue
				}
				break
			}
			{
				var v_3 = 1
				while (true) {
					var /** number */ v_4 = base.cursor
					lab2: {
						lab3: {
							var /** number */ v_5 = base.cursor
							lab4: {
								if (!(base.eq_s('ij'))) {
									break lab4
								}
								break lab3
							}
							base.cursor = v_5
							if (!(base.in_grouping(g_v, 97, 121))) {
								break lab2
							}
						}
						v_3--
						continue
					}
					base.cursor = v_4
					break
				}
				if (v_3 > 0) {
					break lab0
				}
			}
			if (!(base.out_grouping(g_v, 97, 121))) {
				break lab0
			}
			I_p1 = base.cursor
			while (true) {
				lab5: {
					if (!(base.out_grouping(g_v, 97, 121))) {
						break lab5
					}
					continue
				}
				break
			}
			{
				var v_7 = 1
				while (true) {
					var /** number */ v_8 = base.cursor
					lab6: {
						lab7: {
							var /** number */ v_9 = base.cursor
							lab8: {
								if (!(base.eq_s('ij'))) {
									break lab8
								}
								break lab7
							}
							base.cursor = v_9
							if (!(base.in_grouping(g_v, 97, 121))) {
								break lab6
							}
						}
						v_7--
						continue
					}
					base.cursor = v_8
					break
				}
				if (v_7 > 0) {
					break lab0
				}
			}
			if (!(base.out_grouping(g_v, 97, 121))) {
				break lab0
			}
			I_p2 = base.cursor
		}
		base.cursor = v_1
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		B_Y_found = false
		B_stemmed = false
		var /** number */ v_1 = base.cursor
		lab0: {
			base.bra = base.cursor
			if (!(base.eq_s('y'))) {
				break lab0
			}
			base.ket = base.cursor
			if (!base.slice_from('Y')) {
				return false
			}
			B_Y_found = true
		}
		base.cursor = v_1
		var /** number */ v_2 = base.cursor
		lab1: {
			while (true) {
				var /** number */ v_3 = base.cursor
				lab2: {
					golab3:
					while (true) {
						var /** number */ v_4 = base.cursor
						lab4: {
							if (!(base.in_grouping(g_v, 97, 121))) {
								break lab4
							}
							base.bra = base.cursor
							if (!(base.eq_s('y'))) {
								break lab4
							}
							base.ket = base.cursor
							base.cursor = v_4
							break golab3
						}
						base.cursor = v_4
						if (base.cursor >= base.limit) {
							break lab2
						}
						base.cursor++
					}
					if (!base.slice_from('Y')) {
						return false
					}
					B_Y_found = true
					continue
				}
				base.cursor = v_3
				break
			}
		}
		base.cursor = v_2
		if (!r_measure()) {
			return false
		}
		base.limit_backward = base.cursor
		base.cursor = base.limit
		var /** number */ v_5 = base.limit - base.cursor
		lab5: {
			if (!r_Step_1()) {
				break lab5
			}
			B_stemmed = true
		}
		base.cursor = base.limit - v_5
		var /** number */ v_6 = base.limit - base.cursor
		lab6: {
			if (!r_Step_2()) {
				break lab6
			}
			B_stemmed = true
		}
		base.cursor = base.limit - v_6
		var /** number */ v_7 = base.limit - base.cursor
		lab7: {
			if (!r_Step_3()) {
				break lab7
			}
			B_stemmed = true
		}
		base.cursor = base.limit - v_7
		var /** number */ v_8 = base.limit - base.cursor
		lab8: {
			if (!r_Step_4()) {
				break lab8
			}
			B_stemmed = true
		}
		base.cursor = base.limit - v_8
		base.cursor = base.limit_backward
		B_GE_removed = false
		var /** number */ v_9 = base.cursor
		lab9: {
			var /** number */ v_10 = base.cursor
			if (!r_Lose_prefix()) {
				break lab9
			}
			base.cursor = v_10
			if (!r_measure()) {
				break lab9
			}
		}
		base.cursor = v_9
		base.limit_backward = base.cursor
		base.cursor = base.limit
		var /** number */ v_11 = base.limit - base.cursor
		lab10: {
			if (!B_GE_removed) {
				break lab10
			}
			if (!r_Step_1c()) {
				break lab10
			}
		}
		base.cursor = base.limit - v_11
		base.cursor = base.limit_backward
		B_GE_removed = false
		var /** number */ v_12 = base.cursor
		lab11: {
			var /** number */ v_13 = base.cursor
			if (!r_Lose_infix()) {
				break lab11
			}
			base.cursor = v_13
			if (!r_measure()) {
				break lab11
			}
		}
		base.cursor = v_12
		base.limit_backward = base.cursor
		base.cursor = base.limit
		var /** number */ v_14 = base.limit - base.cursor
		lab12: {
			if (!B_GE_removed) {
				break lab12
			}
			if (!r_Step_1c()) {
				break lab12
			}
		}
		base.cursor = base.limit - v_14
		base.cursor = base.limit_backward
		base.limit_backward = base.cursor
		base.cursor = base.limit
		var /** number */ v_15 = base.limit - base.cursor
		lab13: {
			if (!r_Step_7()) {
				break lab13
			}
			B_stemmed = true
		}
		base.cursor = base.limit - v_15
		var /** number */ v_16 = base.limit - base.cursor
		lab14: {
			lab15: {
				lab16: {
					if (!B_stemmed) {
						break lab16
					}
					break lab15
				}
				if (!B_GE_removed) {
					break lab14
				}
			}
			if (!r_Step_6()) {
				break lab14
			}
		}
		base.cursor = base.limit - v_16
		base.cursor = base.limit_backward
		var /** number */ v_18 = base.cursor
		lab17: {
			if (!B_Y_found) {
				break lab17
			}
			while (true) {
				var /** number */ v_19 = base.cursor
				lab18: {
					golab19:
					while (true) {
						var /** number */ v_20 = base.cursor
						lab20: {
							base.bra = base.cursor
							if (!(base.eq_s('Y'))) {
								break lab20
							}
							base.ket = base.cursor
							base.cursor = v_20
							break golab19
						}
						base.cursor = v_20
						if (base.cursor >= base.limit) {
							break lab18
						}
						base.cursor++
					}
					if (!base.slice_from('y')) {
						return false
					}
					continue
				}
				base.cursor = v_19
				break
			}
		}
		base.cursor = v_18
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
})

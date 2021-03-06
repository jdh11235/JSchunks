/* Copyright (c) 2014 Jonathan Herman - MIT License */
/* https://github.com/jdh11235/JSchunks */

function factorial(n) {

	/* begin Number.isInteger() polyfill
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
	*/
	if (!Number.isInteger) {
		Number.isInteger = function isInteger(nVal) {
			return typeof nVal === 'number'
			&& isFinite(nVal)
			&& nVal > -9007199254740992
			&& nVal < 9007199254740992
			&& Math.floor(nVal) === nVal;
		};
	}
	/* end Number.isInteger() polyfill */

	if (n === 0) return 1;

	if (Number.isInteger(n) && n > 0) {
		for (var i = 1, p = 1; i <= n; i++) {
			p *= i;
		}
		return p;
	}
}

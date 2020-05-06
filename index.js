'use strict';

module.exports = function isSinhalese(str) {
	return typeof str === 'string' && str !== null && str.match(/^[\u{0D80}-\u{0DFF}]+$/gmu) !== null;
};
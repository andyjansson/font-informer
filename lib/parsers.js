var opentype = require('./opentype.js');
var woff = require('./woff.js');
var woff2 = require('./woff2.js');
var eot = require('./eot.js');
var svg = require('./svg.js');

module.exports = function (stream) {
	return [
		opentype(stream),
		woff(stream),
		woff2(stream),
		eot(stream),
		svg(stream)
	];
};
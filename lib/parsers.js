module.exports = function (stream) {
	return [
		require('./opentype.js')(stream),
		require('./woff.js')(stream),
		require('./woff2.js')(stream),
		require('./eot.js')(stream),
		require('./svg.js')(stream)
	];
};
var fs = require('fs');
var Promise = global.Promise || require('es6-promise').Promise;
Promise.any = require('promise-any-ext');
var parsers = require('./lib/parsers.js');

module.exports = function (file) {
	return new Promise(function (resolve, reject) {
		// If we're passed a buffer, parse it.
		if(Buffer.isBuffer(file)) {
			resolve(file);
		} else {
			// Otherwise read the file.
			fs.readFile(file, function(err, contents) {
				if(err) return reject();

				resolve(contents);
			});
		}
	}).then(function(contents) {
		return Promise.any(parsers(contents));
	});
};
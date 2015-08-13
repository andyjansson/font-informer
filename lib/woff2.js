var parser = require('woff2-parser');
var Promise = global.Promise || require('es6-promise').Promise;
var name = require('./name.js');
var fontStyle = require('./font-style.js');

module.exports = function (stream) {
	return new Promise(function(resolve, reject) {
		parser(stream).then(function(results) {
			resolve({
				type: "woff2",
				name: name(results.name.nameRecords.English.fontFamily, results.name.nameRecords.English.fontSubFamily),
				weight: results["OS/2"].weight.value,
				style: fontStyle(results["OS/2"].selection)
			});
		}, reject);
	});
};
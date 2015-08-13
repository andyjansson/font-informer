var parser = require('woff-parser');
var Promise = global.Promise || require('es6-promise').Promise;
var fontStyle = require('./font-style.js');

module.exports = function (stream) {
	return new Promise(function(resolve, reject) {
		parser(stream).then(function(results) {
			var name = results.name.nameRecords.English.fontFamily;
			if (name.indexOf(results.name.nameRecords.English.fontSubFamily) == -1) {
				name += " - " + results.name.nameRecords.English.fontSubFamily;
			}
			
			resolve({
				type: "woff",
				name: name,
				weight: results["OS/2"].weight.value,
				style: fontStyle(results["OS/2"].selection)
			});
		}, reject);
	});
};
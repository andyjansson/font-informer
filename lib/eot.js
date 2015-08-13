var parser = require('eot-parser');
var Promise = global.Promise || require('es6-promise').Promise;
var name = require('./name.js');

module.exports = function (stream) {
	return new Promise(function(resolve, reject) {
		parser(stream).then(function(results) {
			resolve({
				type: "eot",
				name: name(results.familyName, results.styleName),
				weight: results.weight.value,
				style: results.italic ? "italic" : "normal"
			});
		}, reject);
	});
};
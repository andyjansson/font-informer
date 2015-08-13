var parser = require('eot-parser');
var Promise = global.Promise || require('es6-promise').Promise;

module.exports = function (stream) {
	return new Promise(function(resolve, reject) {
		parser(stream).then(function(results) {
			var name = results.familyName;
			if (name.indexOf(results.styleName) == -1) {
				name += " - " + results.styleName;
			}
		
			resolve({
				type: "eot",
				name: name,
				weight: results.weight.value,
				style: results.italic ? "italic" : "normal"
			});
		}, reject);
	});
};
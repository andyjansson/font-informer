var parser = require('svg-font-parser');
var Promise = global.Promise || require('es6-promise').Promise;

module.exports = function (stream) {
	return new Promise(function(resolve, reject) {
		if (stream.slice(0, 5).toString() != '<?xml') return reject();
		
		parser(stream).then(function(results) {
			var result = results[0];
			resolve({
				type: "svg",
				name: result.family,
				weight: result.weight[0],
				style: result.style ? result.style[0] : 'normal'
			});
		}, reject);
	});
};
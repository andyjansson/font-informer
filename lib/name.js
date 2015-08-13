module.exports = function (name) {
	if (arguments.length > 1 && name.indexOf(arguments[1]) == -1) 
		name += " - " + arguments[1];
	
	return name
			.replace(/([A-z0-9])([A-Z][a-z])/g, '$1 $2')
			.replace(/([a-z0-9])([A-Z])$/g, '$1 $2')
			.replace(/^[^A-z0-9]+|[^A-z0-9]+$/g, '')
			.replace(/([A-z0-9])\-([A-z0-9])/g, '$1 - $2');
};
module.exports = function (selection) {
	if (selection.italic) return "italic";
	if (selection.oblique) return "oblique";
	return "normal";
};
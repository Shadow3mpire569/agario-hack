var Config = {
	"text" : {
		"loading" : "Loading . . .",
		"noskins" : "No skins",
		"nonames" : "No names",
		"darktheme" : "Dark Theme",
		"nocolors" : "No colors",
		"showmass" : "Show mass",
		"acid" : "Acid (Blur)"
	}
};

(function() {
	
	function init() {
		$("html").prepend("<div id=\"agario-hack-overlay\" style=\"position:absolute;z-index:1000;\"><div class=\"panel panel-default\"><div id=\"agario-hack-content\" class=\"panel-body\"><h2>" + Config.text.loading + "</h2></div><div></div>");
		addOptions($("#agario-hack-content"));
	}
	
	function addOptions(element) {
		element.html("");
		element.append("<p><label><input type=\"checkbox\" onchange=\"setSkins(!$(this).is(':checked'));\"> " + Config.text.noskins + "</label></p>");
		element.append("<p><label><input type=\"checkbox\" onchange=\"setNames(!$(this).is(':checked'));\"> " + Config.text.nonames + "</label></p>");
		element.append("<p><label><input type=\"checkbox\" onchange=\"setDarkTheme($(this).is(':checked'));\"> " + Config.text.darktheme + "</label></p>");
		element.append("<p><label><input type=\"checkbox\" onchange=\"setColors($(this).is(':checked'));\"> " + Config.text.nocolors + "</label></p>");
		element.append("<p><label><input type=\"checkbox\" onchange=\"setShowMass($(this).is(':checked'));\"> " + Config.text.showmass + "</label></p>");
		element.append("<p><label><input type=\"checkbox\" onchange=\"setAcid($(this).is(':checked'));\"> " + Config.text.acid + "</label></p>");
	}
	
	init();
})()

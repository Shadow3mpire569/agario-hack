var Config = {
	"text" : {
		"loading" : "Loading . . .",
		"noskins" : "No skins",
		"nonames" : "No names",
		"darktheme" : "Dark Theme",
		"nocolors" : "No colors",
		"showmass" : "Show mass"
	}
};

(function() {
	
	function init() {
		$("html").prepend("<div id=\"agario-hack-overlay\" style=\"position:absolute;z-index:1000;\"><div class=\"panel panel-default\"><div id=\"agario-hack-content\" class=\"panel-body\"><h2>" + Config.text.loading + "</h2></div><div></div>");
		addOptions($("#agario-hack-content"));
	}
	
	function addOptions(element) {
		element.append("<label><input type=\"checkbox\" onchange=\"setSkins(!$(this).is(':checked'));\"> " + Config.text.noskins + "</label>");
		element.append("<label><input type=\"checkbox\" onchange=\"setNames(!$(this).is(':checked'));\"> " + Config.text.nonames + "</label>");
		element.append("<label><input type=\"checkbox\" onchange=\"setDarkTheme($(this).is(':checked'));\"> " + Config.text.darktheme + "</label>");
		element.append("<label><input type=\"checkbox\" onchange=\"setColors($(this).is(':checked'));\"> " + Config.text.nocolors + "</label>");
		element.append("<label><input type=\"checkbox\" onchange=\"setShowMass($(this).is(':checked'));\"> " + Config.text.showmass + "</label>");
	}
	
	init();
})()

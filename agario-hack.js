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
		$("body").prepend("<div id=\"agario-hack-overlay\" style=\"position:absolute;top:10px;left:10px;z-index:1000;\"><div class=\"panel panel-default\"><div id=\"agario-hack-content\" class=\"panel-body\"><h2>" + Config.text.loading + "</h2></div><div></div>");
		addOptions($("#agario-hack-content"));
	}
	
	function addOptions(element) {
		element.html("<h3>OrbitronDev Titanium</h3><hr />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setSkins(!$(this).is(':checked'));\" /> " + Config.text.noskins + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setNames(!$(this).is(':checked'));\" /> " + Config.text.nonames + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setDarkTheme($(this).is(':checked'));\" /> " + Config.text.darktheme + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setColors($(this).is(':checked'));\" /> " + Config.text.nocolors + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setShowMass($(this).is(':checked'));\" /> " + Config.text.showmass + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setAcid($(this).is(':checked'));\" /> " + Config.text.acid + "</p></label>");
	}
	
	init();
})()

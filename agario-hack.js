var Config = {
	"product" : {
		"name" : "Titanium",
		"vendor" : "OrbitronDev"
	},
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
		$("body").prepend("<div id=\"agario-hack-overlay\" class=\"panel panel-default\" style=\"position:absolute;top:10px;left:10px;z-index:1000;\"></div>");
		$("#agario-hack-overlay").append("<div class=\"panel-heading\"><h4><b>" + Config.product.name + " by " + Config.product.vendor + "</b></h4></div>");
		$("#agario-hack-overlay").append("<div id=\"agario-hack-content\" class=\"panel-body\"><h2>" + Config.text.loading + "</h2></div>");
		addOptions($("#agario-hack-content"));
	}
	
	function addOptions(element) {
		element.html("");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setSkins(!$(this).is(':checked'));\" /> " + Config.text.noskins + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setNames(!$(this).is(':checked'));\" /> " + Config.text.nonames + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setDarkTheme($(this).is(':checked'));\" /> " + Config.text.darktheme + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setColors($(this).is(':checked'));\" /> " + Config.text.nocolors + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setShowMass($(this).is(':checked'));\" /> " + Config.text.showmass + "</p></label><br />");
		element.append("<label><p><input type=\"checkbox\" onchange=\"setAcid($(this).is(':checked'));\" /> " + Config.text.acid + "</p></label>");
	}
	
	init();
})()

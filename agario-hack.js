/*
$.get("https://d3strukt0rlp.github.io/agario-hack/agario-hack.js", function(data) {
	var latestVersion = data.replace(/(\r\n|\n|\r)/gm,"");
	latestVersion = latestVersion.substring(latestVersion.indexOf("// @version") + 11, latestVersion.indexOf("// @grant"));

	latestVersion = parseFloat(latestVersion + 0.0000);
    var myVersion = parseFloat(GM_info.script.version + 0.0000); 
	
	if(latestVersion > myVersion) {
		alert("Update Available for Titanium4Agar.user.js: v" + latestVersion + "\nGet the latest version from the GitHub page.");
        window.open('https://d3strukt0rlp.github.io/agario-hack/agario-hack.js','_blank');
	}
	console.log('Current Titanium4Agar.user.js Version: ' + myVersion + " on Github: " + latestVersion);
});
*/
console.log("Running Titanium4Agar!");

var Config = {
	"product" : {
		"name" : "Titanium",
		"version" : "1.0.0",
		"vendor" : "OrbitronDev",
		"url" : "organisation.orbitrondev.com"
	},
	"text" : {
		"loading" : "Loading . . .",
		"noskins" : "No skins",
		"nonames" : "No names",
		"darktheme" : "Dark Theme",
		"nocolors" : "No colors",
		"showmass" : "Show mass",
		"acid" : "Acid (Blur)",
		"removeadd" : "Remove Advertisement"
	}
};

(function() {
	
	function init() {
		$("body").prepend("<div id=\"agario-hack-overlay\" class=\"panel panel-default\" style=\"position:absolute;top:10px;left:10px;z-index:1000;\"></div>");
		$("#agario-hack-overlay").append("<div class=\"panel-heading\"><h4><b>" + Config.product.name + " v" + Config.product.version + " by " + Config.product.vendor + "</b></h4></div>");
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
		element.append("<label><p><input type=\"checkbox\" onchange=\"setAcid($(this).is(':checked'));\" /> " + Config.text.acid + "</p></label><br />");
		element.append("<label><p><button class=\"btn btn-danger\" onclick=\"removeAdvertisement();\"> " + Config.text.removeadd + "</button></p></label>");
	}
	
	window.removeAdvertisement = function() {
		$("#helloDialog > center").remove();
		$("#helloDialog").children().filter(function() {
			return $(this).css('margin-bottom') == '7px';
		}).remove();
		$("#adsBottom").remove();
	};
	
	window.onkeydown = function(event) {
		if(49 == event.keyCode) { // 1 = No Skins
			console.log("[Titanium] Toggle No Skins");
			window.setSkins(!Ra);
		}
		if (50 == event.keyCode) { // 2 = No Names
			console.log("[Titanium] Toggle No Names");
			window.setNames(!na);
		}
		if (51 == event.keyCode) { // 3 = Dark Theme
			window.setDarkTheme(!ka);
		}
		if (52 == event.keyCode) { // 4 = No Colors
			window.setColors(!za);
		}
		if (53 == event.keyCode) { // 5 = No Colors
			window.setShowMass(!Sa);
		}
		if (54 == event.keyCode) { // 6 = Acid
			window.setAcid(!xa);
		}
	}
	
	init();
})()

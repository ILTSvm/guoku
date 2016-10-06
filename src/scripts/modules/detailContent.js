
var iScroll = require("../libs/iscroll-probe.js");
var footer = require("../tpls/footer.html"); 

var detailContent = {
	addFooter: (function(){
		$("#detailIscroll").append(footer);
	})(),
	init: (function(){
		var timer = setTimeout(function(){
			var myScroll = new iScroll("#detail", { mouseWheel: true });
		}, 300);
	})()
}

module.exports = detailContent;

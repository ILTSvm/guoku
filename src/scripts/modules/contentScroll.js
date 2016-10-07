
var iScroll = require("../libs/iscroll-probe.js");
var footer = require("../tpls/footer.html"); 

var contentScroll = {
	addFooter: function($id){
		$("#"+$id).append(footer);
	},
	init: function($id){
		var timer = setTimeout(function(){
			var myScroll = new iScroll("#"+$id, { mouseWheel: true });
		}, 1000);
	}
}

module.exports = contentScroll;


var $$ = require("../libs/jquery.js");

var headerJs = {
	init: (function(){
		$('header ul').hide();
	})(),
	showListBar: (function(){
		$('#header-listbar').click(function(){
			$$("header ul").slideToggle();
		});
	})(),
	starSearch: (function(){
		$('#searchBtn').click(function(){
			var keyword = $('#searchTxt').val();
			console.log(keyword);
			window.location.href = "/build/categorygroup.html?value="+keyword; 
		});
	})()
};


module.exports = headerJs;
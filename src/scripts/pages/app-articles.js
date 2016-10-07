

var header = require("../tpls/header.html");

var articlesContent = require("../tpls/articles.html")

$('body').prepend(articlesContent);
$('body').prepend(header);

var headerAnimate = require("../modules/header.js")
var articleScroll = require("../modules/contentScroll.js");

articleScroll.addFooter("img-container");
articleScroll.init("article");

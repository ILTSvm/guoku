
var header = require("../tpls/header.html");

var detailContent = require("../tpls/detail.html")

$('body').prepend(detailContent);
$('body').prepend(header);

var detailScroll = require("../modules/detailContent.js");
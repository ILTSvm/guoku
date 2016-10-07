

var imageText = require("../tpls/image_text.html");
var indexImageText = require("../tpls/index_image_text.html");
var header = require("../tpls/header.html");
var footer = require("../tpls/footer.html");
var banner = require("../modules/banner-index.js");

$('body').prepend(footer);
// $('body').prepend(banner.banner3);


$('body').prepend(indexImageText);

// $('body').prepend(banner.banner2);

// $('body').prepend(imageText);

// $('body').prepend(banner.banner1);
$('body').prepend(header);

var headerAnimate = require("../modules/header.js")






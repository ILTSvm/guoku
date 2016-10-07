

var indexImageText = require("../tpls/index_image_text.html");
var header = require("../tpls/header.html");
var iconsnav = require("../tpls/iconsnav.html");
var footer = require("../tpls/footer.html");
var banner = require("../modules/banner-index.js");
var sectionheader = require("../modules/sectionheader.js")
 
$('body').prepend(footer);
$('body').prepend(sectionheader.remenshangpin);
$('body').prepend(banner.banner3);
 

$('body').prepend(indexImageText);
$('body').prepend(sectionheader.zuixintuwen);
$('body').prepend(banner.banner2);
$('body').prepend(sectionheader.jingxuanshangpin);

$('body').prepend(iconsnav);
$('body').prepend(banner.banner1);
$('body').prepend(header);
  
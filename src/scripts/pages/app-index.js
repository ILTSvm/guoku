
// test header and footer statr

var header = require("../tpls/header.html");
var footer = require("../tpls/footer.html");
var banner = require("../modules/banner.js")

$('body').prepend(footer);
$('body').prepend(banner.banner3);
$('body').prepend(banner.banner2)
$('body').prepend(banner.banner1);
$('body').prepend(header);

// test header and footer end


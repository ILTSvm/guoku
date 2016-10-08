
var common = require('../utils/common.util.js');
var indexImageText = require("../tpls/index_image_text.html");
var header = require("../tpls/header.html");
var iconsnav = require("../tpls/iconsnav.html");
var footer = require("../tpls/footer.html");
var banner = require("../modules/banner-index.js");

var sectionheader = require("../modules/sectionheader.js")

$('#container').append(header);
$('#container').append(banner.banner1);
$('#container').append(iconsnav);
$('#container').append(sectionheader.jingxuanshangpin);
$('#container').append(banner.banner2);
$('#container').append(sectionheader.zuixintuwen);
$('#container').append(indexImageText);
$('#container').append(banner.banner3);
$('#container').append(sectionheader.remenshangpin);
$('#container').append(footer);

common.final([{
    url: 'http://wlwywlqk.cn/goods/getdata?pageindex=' + Math.floor(Math.random() * 100) + '&pagesize=12',
    success: banner.initbanner2,
},],function(){
    new IScroll('body', { mouseWheel: true, click: true });
})

var headerAnimate = require("../modules/header.js")






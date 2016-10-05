
// test header and footer statr
var common = require('../utils/common.util.js');
var header = require("../tpls/header.html");
var bannertpl = require("../tpls/banner.html"); $('body').prepend(bannertpl);
var footer = require("../tpls/footer.html");


var banner1 = common.tpl("bannertpl", {
    id: "banner1",
    list: [
        '<img width="100%" src="/build/images/banner01 (1).jpeg" />',
        '<img width="100%" src="/build/images/banner01 (2).jpeg" />',
        '<img width="100%" src="/build/images/banner01 (3).jpeg" />',
        '<img width="100%" src="/build/images/banner01 (4).jpeg" />',
    ],
    swiper: { speed: 500, autoplay: 3000, loop: true, }
});

var banner2 = common.tpl("bannertpl", {
    id: "banner2",
    list: [
        '<a class="bannerarticle" href="#"><img width="100%" src="/build/images/banner02 (2).jpeg" /><div class="bannershadow"><p class="articletitle">聊聊天：局气，手机壳汪洋里的文艺小浪花儿</p><p class="articledesc">「以前是女同学们隔着操场远远地爱我，现在是我隔着自己爱这个社会。」</p></div></a>',
        '<a class="bannerarticle" href="#"><img width="100%" src="/build/images/banner02 (3).jpeg" /><div class="bannershadow"><p class="articletitle">摄影 | Maarit Hohteri，我们之间</p><p class="articledesc">在 Maarit 这里，摄影也似乎剥离了那种侵略性，转而成为了一个温柔的媒介。</p></div></a>',
        '<a class="bannerarticle" href="#"><img width="100%" src="/build/images/banner02 (1).jpeg" /><div class="bannershadow"><p class="articletitle">故事 | 看，我的妈妈在飞！</p><p class="articledesc">一个可爱又帅气的故事，画面和音乐都美极了。</p></div></a>',
    ],
    swiper: { 
        speed: 500, 
        autoplay: 3000, 
        loop: true, 
        onTransitionEnd: function(swiper){
            $('.bannershadow').animate({bottom: '-50%'}).eq(swiper.activeIndex).animate({bottom: 0});
        },
    }
});

$('body').prepend(footer);
$('body').prepend(banner2);
$('body').prepend('<div id="goodsbanner"></div>')
$('body').prepend(banner1);
$('body').prepend(header);
var goods = $.ajax({
    url: 'http://wlwywlqk.cn/goods/getdata?pageindex=' + Math.floor(Math.random() * 100) + '&pagesize=12',
    success: function(data){
        var goods = JSON.parse(data);
        var len = goods.length;
        tpldata = {
            id: "bannergoods",
            list:[],
            scrollbar: true,
            swiper: {
                scrollbar: '.swiper-scrollbar',
                scrollbarHide: true,
                slidesPerView: 'auto',
                spaceBetween: 30,
                grabCursor: true
            } 
        };
        for(var i = 0; i < len; i++){
            tpldata.list[i] = '<a class="banneritem" href="/detail?id='+goods[i]._id+'"><img src="http://wlwywlqk.cn/img/'+goods[i].piclists[0]+'"><span class="banneritemname">'+goods[i].name+'</span><span class="banneritemprice">￥'+goods[i].price+'</span></a>';
        }
        $('#goodsbanner').html(common.tpl('bannertpl',tpldata));
    }
});
// test header and footer end


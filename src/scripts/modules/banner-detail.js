

var bannertpl = require("../tpls/banner.html");
var common = require('../utils/common.util.js');
$('body').prepend(bannertpl);
var banner = {
    banner2: (function () {
        $.ajax({
            url: 'http://wlwywlqk.cn/goods/getdata?pageindex=' + Math.floor(Math.random() * 100) + '&pagesize=12',
            success: function (data) {
                var goods = JSON.parse(data);
                var len = goods.length;
                tpldata = {
                    id: "banner2",
                    list: [],
                    pagination: true,
                    swiper: {
                        pagination: '.swiper-pagination',
                    }
                };
                for (var i = 0; i < len; i++) {
                    tpldata.list[i] = '<a class="banneritem" href="/detail?id=' + goods[i]._id + '"><img src="http://wlwywlqk.cn/img/' + goods[i].piclists[0] + '"><span class="banneritemname">' + goods[i].name + '</span><span class="banneritemprice">￥' + goods[i].price + '</span></a>';
                }
                $('#goodsbanner').html(common.tpl('bannertpl', tpldata));
            }
        });
        return '<div id="goodsbanner"></div>';
    })(),
}

module.exports = banner;
var header = require("../tpls/header.html");
var list = require("../tpls/categorygroup.html");
var footer = require("../tpls/footer.html");
var common = require('../utils/common.util.js');
$('#container').append(header);
$('#container').append(list);
$('#container').append(footer);

if(common.GetRequest("categorygroup")){
	var _url = 'https://wlwywlqk.cn/goods/getData?categorygroup='+common.GetRequest("categorygroup")+'&pageindex=1&pagesize=40';
}else if(common.GetRequest("value")){
	var _url = 'https://wlwywlqk.cn/goods/search?search='+common.GetRequest("value")+'&pageindex=1&pagesize=40';
}
else{
	var _url = 'https://wlwywlqk.cn/goods/getData?pageindex=1&pagesize=50';
}
 
common.final(
[
	{
		url: _url,
		success:function(data){
			if(data){
				var datajson=JSON.parse(data);
				var html = template('w_index_list', {product:datajson});
				document.getElementById('list-box').innerHTML = html;
			}else{
				var html = '<li><p style = "width:100%;text-align:center;font-size:16px;height:100%">未查询到结果</p></li>';
				document.getElementById('list-box').innerHTML = html;
			}

		}
	}
],function(){
    new IScroll('body', { mouseWheel: true, click: true });
})

 
 

var headerAnimate = require("../modules/header.js");

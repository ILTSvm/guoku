var header = require("../tpls/header.html");
var list = require("../tpls/categorygroup.html");
var footer = require("../tpls/footer.html");
var common = require('../utils/common.util.js');
$('#container').append(header);
$('#container').append(list);
$('#container').append(footer);

if(common.GetRequest("categorygroup")){
	var _url = 'http://wlwywlqk.cn/goods/getData?categorygroup='+common.GetRequest("categorygroup")+"&pageindex=1&pagesize=100";
}else{
	var _url = 'http://wlwywlqk.cn/goods/getData?pageindex=1&pagesize=100';
}
 
common.final(
[
	{
		url: _url,
		success:function(data){
			var datajson=JSON.parse(data);
			var html = template('w_index_list', {product:datajson});
			document.getElementById('list-box').innerHTML = html;
		}
	}
],function(){
    new IScroll('body', { mouseWheel: true, click: true });
})

 
 


var headerAnimate = require("../modules/header.js");

var template = require('../libs/template.js');

var common = require('../utils/common.util.js');

var str = require('../tpls/index.html');

var header = require('../tpls/header.html');
common.render(str);
common.render(header);
window.onload = function(){
	var data = {
	"pageindex":1;
	"pagesize":10;
	}
	common.useAjax("http://wlwywlqk.cn/goods/getData",atemp,data);
	
	function atemp(data){
		var html = template('w_index_list', data);
		document.getElementById('list-box').innerHTML = html;
	}

}

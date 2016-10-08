
//获取地址栏的数据
//function UrlSearch()
//{
//  var name,value;
//  var str=location.href; //取得整个地址栏
//  var num=str.indexOf("?")
//  str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
//
//  var arr=str.split("&"); //各个参数放到数组里
//  for(var i=0;i < arr.length;i++){
//      num=arr[i].indexOf("=");
//      if(num>0){
//          name=arr[i].substring(0,num);
//          value=arr[i].substr(num+1);
//          this[name]=value;
//      }
//  }
//}
//var Request = new UrlSearch(); //实例化
var common = require("../utils/common.util.js");
var Request = new Object();
Request.id = common.GetRequest("_id"); 
if(!Request.id){
	Request.id = "57ed08be22673b1d8c950e07";
}
var header = require("../tpls/header.html");
var footer = require("../tpls/footer.html");
var detailContent = require("../tpls/detail.html");
var bannertpl = require("../tpls/banner.html");
$('body').append(bannertpl);
var detailGroupData = require("../tpls/detail_groupPro.html")
$('body').prepend(detailContent);
$('body').prepend(detailGroupData);

var url = "http://wlwywlqk.cn/goods/getData?_id="+Request.id;

// 请求商品数据
function getAjax(url, fn){
	$.ajax({
		url: url,
		success: function(req){
			
			fn(JSON.parse(req));
		},
		error: function(){
			console.log("ajax error");
		}
	});
}
getAjax(url, showData);

// 处理商品数据
function showData(data){
	console.log(data[0]);
	getGroupPro(data[0].categorygroup);
	findNameEn(data);
	var html = template('test', data[0]);
	$('body').prepend(html);
	$('#detailIscroll').append(footer);
	$('body').prepend(header);
	var headerAnimate = require("../modules/header.js");
	new Swiper('.swiper-container',{
		pagination:'.swiper-pagination',
	});
}


// 处理商品名称
function findNameEn(data){
	if((data[0].name[0]>'A'&&data[0].name[0]<'Z')||(data[0].name[0]>'a'&&data[0].name[0]<'z')){
		data[0].nameEn = data[0].name.match(/[a-zA-Z]/g).join("");
	}else{
		data[0].nameEn = "Hot";
	}

	data[0].name = data[0].name.match(/[\u4e00-\u9fa5]/g).join("");
}
// 请求相关商品信息
function getGroupPro(gropPro){
	var pageIndex = Math.ceil(Math.random()*2);
	var pageIndex = 1;
	var url = "http://wlwywlqk.cn/goods/search?search="+gropPro+"&pageindex="+pageIndex+"&pagesize=9";
	getAjax(url, showGroupData);
}

// 处理相关商品信息
function showGroupData(data){
	var obj = {};
	obj.arr1 = [];
	obj.arr2 = [];
	obj.arr3 = [];
	var str = "http://wlwywlqk.cn/img/";
	var arr = obj.arr1;
	var j = 0;
	for(var i=0; i<9; i++){
		if(i == 3){
			arr = obj.arr2;
			j = 0;
		}else if(i == 6){
			arr = obj.arr3;
			j = 0;
		}
		arr[j] = str+data[i].piclists[0];
		j++;
	}
	var html = template('showGroupData', obj);
	$('.recommendPro').eq(0).append(html);
	
}
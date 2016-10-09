var common = {
  render: function (str) {
    $('body').prepend(str);
  },
  tpl: function (id, data) {
    if (data.swiper) {
      var swiperjs = '<script> new Swiper("#' + data.id + '", {'
      for (var key in data.swiper) {
        if (typeof data.swiper[key] === 'string') {
          swiperjs += key + ':"' + data.swiper[key].toString() + '",';
        } else {
          swiperjs += key + ':' + data.swiper[key].toString() + ',';
        }
      }
      swiperjs += '})</script> ';
      data.swiper = swiperjs;
    }
    return template(id, data);
  },
  final: function (arr, final) {
    var len = arr.length;
    var count = len + 1;
    window.onload = function () {
      if (--count == 0) {
        final.apply(this, Array.prototype.slice.call(arguments, 2));
      }
    }
    for (var i = 0; i < len; i++) {
      (function (ii) {
        var success = arr[ii].success;
        arr[ii].success = function (data) {
          success(data);
          if (--count == 0) {
            final.apply(this, Array.prototype.slice.call(arguments, 2));
          }
        }
      })(i);
      $.ajax(arr[i]);
    }
  },
  useAjax:function(url,callback,dataJson){
        $.ajax({
            url:url,
            data:dataJson,
            success:function(data) {
                console.log(data);
                callback(data);
            },
            error:function(){
                alert("ajax error");
            },
            //data  array,
            dataType:"json",
            type:"post"
        })
   },
  GetRequest:function(_str) {
        var url = location.search;//获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {//判断是否有参数
            var str = url.substr(1);// 从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
            strs = str.split("=");// 用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
            if(strs[0]==_str){
                return strs[1];
            }else{
            	  console.log(_str);
            	  console.log(strs[1]);
                return false;
            }
            // 直接弹出第一个参数 （如果有多个参数 还要进行循环的;
        }
    }
};

module.exports = common;


//函数库，后续会补公共类库
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
  }
};

module.exports = common;

//函数库，后续会补公共类库
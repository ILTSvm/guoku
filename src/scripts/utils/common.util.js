var common = {
  render: function (str) {
    $('body').prepend(str);
  },
  tpl: function(id, data) {
    if(data.swiper){
      var swiperjs = '<script> new Swiper("#'+data.id+'", {'
      for (var key in data.swiper) {
        if(typeof data.swiper[key] === 'string'){
          swiperjs+=key+':"'+data.swiper[key].toString()+'",';
        }else{
          swiperjs+=key+':'+data.swiper[key].toString()+',';
        }
      }
      swiperjs += '})</script> ';
      data.swiper = swiperjs;
    }
    return template(id,data);
  }
};

module.exports = common;



//函数库，后续会补公共类库
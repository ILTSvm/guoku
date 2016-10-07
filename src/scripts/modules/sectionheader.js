var sectionheadertpl = require("../tpls/sectionheader.html");
$('body').append(sectionheadertpl);
var sectionheader = {
  jingxuanshangpin:template("sectionheadertpl",{
    title:'精选商品',
    href:'/pages/selected.html'
  }),
  zuixintuwen:template("sectionheadertpl",{
    title:'最新图文',
    href:'/pages/articles.html'
  }),
  remenshangpin:template("sectionheadertpl",{
    title:'热门商品',
  }),
};



module.exports = sectionheader;

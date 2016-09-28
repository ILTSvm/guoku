var template = require('../libs/template.js');

var common = require('../utils/common.util.js');

var str = require('../tpls/index.html');

var header = require('../tpls/header.html');

common.render(str);
common.render(header);

// $.ajax({
//   url: '/api/list.php',
//   success: function (res) {
//     var html = template('test', res.data);
//     common.render(html);
//   }
// });

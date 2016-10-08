var header = require("../tpls/header.html");
var footer = require("../tpls/footer.html");
var login = require("../tpls/login.html");
var headerAnimate = require("../modules/header.js");

$('body').prepend(footer);
$('body').prepend(login);
$('body').prepend(header);
$('.loginform').submit(function () {

    var email = $('#email').val();
    var password = $('#password').val();

    $.ajax({
        url: 'http://wlwywlqk.cn/users/login',
        type: 'post',
        data: {
            email: email,
            password: password
        },
        success: function (res) {
            if (res === "1") {
                location.href = '/pages/index.html';
            } else {
                $('#tip').text(res);
                setTimeout(function () {
                    $('#tip').text('  ');
                }, 5000)
            }
        }
    });
    return false;

});




var header = require("../tpls/header.html");
var footer = require("../tpls/footer.html");
var register = require("../tpls/register.html");
var headerAnimate = require("../modules/header.js");

$('body').prepend(footer);
$('body').prepend(register);
$('body').prepend(header);
$('.registerform').submit(function () {

    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var rpassword = $('#rpassword').val();
    if (password === rpassword) {
        $.ajax({
            url: 'http://wlwywlqk.cn/users/register',
            type: 'post',
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function (res) {
                if (res === "1") {
                    location.href = '/pages/login.html';
                } else {
                    $('#tip').text(res);
                    setTimeout(function () {
                        $('#tip').text('  ');
                    }, 5000)
                }
            }
        });
        return false;
    } else {
        $('#tip').text("两次密码输入不一致");
        setTimeout(function () {
            $('#tip').text('  ');
        }, 5000);
        return false;
    };
    
});

var headerAnimate = require("../modules/header.js");
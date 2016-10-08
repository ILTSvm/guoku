/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = "<header>	<div class=\"basicHeader\">		<div><img src=\"/images/top_search_logo.png\" alt=\"\"></div>		<form>			<!-- <input id=\"searchTxt\" type=\"text\" /> -->			<a id=\"searchBtn\" href=\"#\"><i class=\"icon iconfont\">&#xe606;</i></a>			<a id=\"header-listbar\" href=\"#\"><i class=\"icon iconfont\">&#x3557;</i></a>		</form>	</div>	<ul>		<li><a href=\"./index.html\">首页</a></li>		<li><a href=\"./articles.html\">图文</a></li>		<li><a href=\"./categorygroup.html\">专题</a></li>	</ul>	<ul>		<li><a href=\"./categorygroup.html\">好店</a></li>		<li><a href=\"./login.html\">登录</a></li>		<li><a href=\"./register.html\">注册</a></li>	</ul></header>"

/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = "<footer>	<div class=\"icon-list\">		<a href=\"#\"><i class=\"icon iconfont\">&#x3488;</i></a>		<a href=\"#\"><i class=\"icon iconfont\">&#xe60a;</i></a>		<a href=\"#\"><i class=\"icon iconfont\">&#xf0082;</i></a>		<a href=\"#\"><i class=\"icon iconfont\">&#xe634;</i></a>		<a href=\"#\"><i class=\"icon iconfont\">&#xe616;</i></a>		<a href=\"#\"><i class=\"icon iconfont\">&#xe659;</i></a>	</div>	<div class=\"about-list\">		<a href=\"#\">关于果库</a>		<a href=\"#\">应用下载</a>		<a href=\"#\">协议</a>		<a href=\"#\">工作机会</a>		<a href=\"#\">常见问题</a>		<a href=\"#\">应用反馈</a>		<a href=\"#\">友情链接</a>		<a href=\"#\">果库合作</a>	</div>	<div class=\"footer-bottom\">		<p>&copy;2016果库<a href=\"#\">京ICP备14054029号</a></p>		<p>京公网安备11010502019958</p>	</div></footer>"

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var header = __webpack_require__(2);
	var footer = __webpack_require__(8);
	var register = __webpack_require__(29);


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


/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <div class=\"tips\">        <span>注册&nbsp;&nbsp;|&nbsp;&nbsp;已有帐号？</span>        <a href=\"/pages/login.html\">去登录&gt;&gt;</a>    </div>    <form class=\"registerform\">        <input id=\"username\" type=\"text\" pattern=\"[\\u4e00-\\u9fa5\\w]{2,10}\" oninvalid=\"setCustomValidity(\'2-10位合法字符\');\" oninput=\"setCustomValidity(\'\');\" required placeholder=\"用户名\">        <input id=\"email\" type=\"email\" required placeholder=\"邮箱\">        <input id=\"password\" type=\"password\" pattern=\"[\\w]{4,20}\" oninvalid=\"setCustomValidity(\'4-20位合法字符\');\" oninput=\"setCustomValidity(\'\');\" required placeholder=\"密码\">        <input id=\"rpassword\" type=\"password\" pattern=\"[\\w]{4,20}\" placeholder=\"重复密码\">        <div class=\"row\"><label ><input type=\"checkbox\" value=\"remember\" required> 我已同意使用协议</label></div>        <input type=\"submit\" id=\"register\" value=\"注册\" >        <p id=\"tip\"></p>    </form></div>  "

/***/ }

/******/ });
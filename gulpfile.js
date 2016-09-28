//引入gulp工具

var gulp = require('gulp');

var webserver = require('gulp-webserver');
//引入CSS预处理模块

var scss = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

//引入JS 模块化开发工具 gulp-webpack, 获得JS文件名模块 vinyl-named, js压缩模块
var named = require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
//引入 fs url模块
var fs = require('fs');
var url = require('url');
var sequence = require('gulp-sequence');
//引入 rev revCollevtor 模块
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
//启动webserver
gulp.task('webserver',function(){
	gulp.src('./')
		.pipe(webserver({
			host:'localhost',
			port:80,
			directoryListing:{
				enable:true,
				path:'./'
			},
			livereload:true,
			
			middleware:function(req,res,next){
				var urlObj = url.parse(req.url,true);
				switch(urlObj.pathname){
					case '/api/orders':
						res.setHeader('Content-Type','application/json');
						rs.readFile('./mock/list.json',function (err,data){
							res.end(data);
						});
						break;
					case '/api/users':
						break;
					default:
				}
				
			}
		}))
		
});
//合并JS文件
var concat = require('gulp-concat');
 
gulp.task('testConcat', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});
//浏览器兼容
var autoprefixer = require('gulp-autoprefixer');

gulp.task('testAutoFx',function(){
	gulp.src('src/css/index.css')
		.pipe(autoprefixer({
			browsers:['last 2 version','android >=4.0'],
			cascade:true,
			remove:true
		}))
		.pipe(gulp.dest('dist/css'))
})
//CSS预处理
var cssFiles = [
'./src/styles/app.scss'
];
	

gulp.task('scss',function(){
	gulp.src(cssFiles)
		.pipe(scss().on('error',scss.logError))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./build/prd/styles/'))
})

//JS 模块化合并压缩
var jsFiles = [
	'./src/scripts/app.js'
];
gulp.task('packjs',function(){
	gulp.src(jsFiles)
		.pipe(named())
		.pipe(webpack({
			output:{
				filename:'[name].js'
			},
			module:{
				loaders:[
					{
						test:/\.js$/,
						loader:'imports?defined=>false'
					}
				]
			}
		}))
		.pipe(uglify().on('error',function(err){
			console.log('\x07',err.lineNumber,err.message);
			return this.end();
		}))
		.pipe(gulp.dest('./build/prd/scripts/'));
});
//版本号控制
var cssDistFiles = [
	'./build/prd/styles/app.css'
];
var jsDistFiles = [
	'./build/prd/scripts/app.js'
];
gulp.task('ver',function(){
	gulp.src(cssDistFiles)
		.pipe(rev())
		.pipe(gulp.dest('./bulid/prd/styles/'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./build/ver/styles/'));
	gulp.src(jsDistFiles)
		.pipe(rev())
		.pipe(gulp.dest('./bulid/prd/scripts/'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./build/ver/scripts/'));
		
});
gulp.task('html',function(){
	gulp.src(['./build/ver/**/*','./build/*.*'])
		.pipe(revCollector())
		.pipe(gulp.dest('./build/'));
})
gulp.task('min',sequence('copy-index','ver','html'));
//拷贝index.html 到build 文件夹

gulp.task('copy-index',function(){
	gulp.src('./index.html')
		.pipe(gulp.dest('./build'));
})


//拷贝images 到build 文件夹
gulp.task('copy-images',function(){
	//全部拷贝**/*
	gulp.src('./images/**/*')
		.pipe(gulp.dest('./build/images/'));
})
//侦测文件变化  执行相应任务
gulp.task('watch',function(){
	gulp.watch('./index.html',['copy-index']);
	gulp.watch('./images/**/*',['copy-images']);
	gulp.watch('./src/styles/*.{scss,css}',['scss','min']);
	gulp.watch('./src/scripts/*.js',['packjs']);
})
//配置  default 任务，执行任务队列

gulp.task('default',['watch','webserver'],function(){
	console.log("任务队列执行完毕");
})

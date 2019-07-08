const gulp = require("gulp");
/*
	拷贝静态文件
	html
	.scss
	图片
	数据
	.js
 */
gulp.task("copy-index", function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copy-html", function(){
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})

const sass = require("gulp-sass");
/*const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");*/
gulp.task("sass", function(){
	return gulp.src("css/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	/*.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))*/
	.pipe(connect.reload());
})

gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "images/*.{jpg,png}"])
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

gulp.task("data", function(){
	return gulp.src(["data/*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

gulp.task("scripts", function(){
	return gulp.src(["js/*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})


/*
	先去执行一次上面所有的任务，然后再去启动监听

 */
gulp.task("build", ["copy-index","copy-html", "sass", "images", "data", "scripts"], function(){
	console.log("项目建立成功");
})

/*
	启动监听
 */
gulp.task("watch", function(){
	gulp.watch(["js/*.js", "!gulpfile.js"], ["scripts"]);
	gulp.watch(["data/*.json", "!package.json"], ['data']);
	gulp.watch(["*.{jpg,png}", "images/*.{jpg,png}"], ["images"]);
	gulp.watch("css/index.scss", ['sass']);
	gulp.watch("index.html", ['copy-index']);
	gulp.watch("html/*.html", ['copy-html']);
	gulp.watch("css/login.scss", ['sass']);
})


const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 9999,
		livereload: true
	})
})
/*var open = require('open');
open('http://192.168.153.118:9999','chrome');*/


//同时启动监听和服务
gulp.task("default", ["watch", "server"]);


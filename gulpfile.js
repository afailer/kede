var gulp = require("gulp");
var sass = require("gulp-sass");
var rename=require("gulp-rename");
var concat=require("gulp-concat");
var cssmin=require("gulp-cssmin");
var imgmin=require("gulp-imagemin");
var uglify=require("gulp-uglify");

gulp.task("uglify2",function(){
	return gulp.src("js/*.js").pipe(concat("all.js")).pipe(uglify()).pipe(rename("all.js")).pipe(gulp.dest("js"));
})
gulp.task("sassAll",function(){
	return gulp.src("css/*.scss").pipe(concat("all.scss")).pipe(sass()).pipe(rename("all.css")).pipe(gulp.dest("css"));//.pipe(cssmin())
})
gulp.task("concat",function(){
	return gulp.src("css/*.css").pipe(concat("all.css")).pipe(gulp.dest("css"));
})
gulp.task("regist",function(){
	return gulp.src("css/regist.scss").pipe(sass()).pipe(rename("regist.css")).pipe(gulp.dest("css"));
});
gulp.task("shopcart",function(){
	return gulp.src("css/shopCart.scss").pipe(sass()).pipe(rename("shopCart.css")).pipe(gulp.dest("css"));
});
gulp.task("index",function(){
	return gulp.src(["css/index.scss","css/wide_flore.scss"]).pipe(concat("index1.cass")).pipe(sass()).pipe(rename("index.css")).pipe(gulp.dest("css"));
});

gulp.task("common",function(){
	return gulp.src("css/common.scss").pipe(sass()).pipe(rename("common.css")).pipe(gulp.dest("css"));
});

gulp.task("watch",function(){
	//return gulp.watch("css/*.scss",["sassAll"]);
	//return gulp.watch("css/common.scss",["common"]);
	return gulp.watch("css/regist.scss",["regist"]);
})
gulp.task("watchIndex",function(){
	return gulp.watch("css/wide_flore.scss",["index"]);
})
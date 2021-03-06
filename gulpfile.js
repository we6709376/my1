var gulp = require("gulp");

gulp.task("copysub",function(){
	gulp.src("sub1page/*.html")
	.pipe(gulp.dest("E:/php/WWW/leshi/sub1page"));
	
});
gulp.task("copycs",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("E:/php/WWW/leshi/css"));
});
gulp.task("copyic",function(){
	gulp.src("iconfont/**")
	.pipe(gulp.dest("E:/php/WWW/leshi/iconfont"));
});
gulp.task("copyjs",function(){
	gulp.src("js/**")
	.pipe(gulp.dest("E:/php/WWW/leshi/js"));
});
gulp.task("copyimg",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("E:/php/WWW/leshi/img"));
});
gulp.task("copyphp",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("E:/php/WWW/leshi"));
});
gulp.task("copyhtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("E:/php/WWW/leshi"));
});
gulp.task("copygoodsphp",function(){
	gulp.src("goodsphp/**/*")
	.pipe(gulp.dest("E:/php/WWW/leshi/goodsphp"));
});
gulp.task("watchsub",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("img/**",["copyimg"]);
	gulp.watch("sub1page/*.html",["copysub"]);
	gulp.watch("css/*.css",["copycs"]);
	gulp.watch("iconfont/**",["copyic"]);
	gulp.watch("js/**",["copyjs"]);
	gulp.watch("*.php",["copyphp"]);
	gulp.watch("goodsphp/**/*",["copygoodsphp"]);
});

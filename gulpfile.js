"use strict";


var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require("gulp-postcss");
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var minifyjs = require('gulp-js-minify');


var posthtml = require('gulp-posthtml');
var del = require('del');



gulp.task('style', function() {
    return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});










gulp.task("posthtml", function() {
    return gulp.src("source/*.html")
      .pipe(posthtml())
      .pipe(gulp.dest("build"));
})




gulp.task('clean', function() {
    return del("build");
});




gulp.task('copy', function() {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/js/**",
        
        
    ], {
        base: "source"
    })
    .pipe(gulp.dest("build"));
});


gulp.task('minify-js', function(){
    return gulp.src('source/js/**/*.js')
      .pipe(gulp.dest('build/js'))
      .pipe(minifyjs())
      .pipe(rename(function(path) {
          
          path.basename += "-min";
          path.extname = ".js";
      }))
      .pipe(gulp.dest('build/js'))
  });






gulp.task("serve", function() {
     server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/less/**/*.less", gulp.series("style"));
    gulp.watch("source/*.html", gulp.series("posthtml")).on("change", server.reload);
});

gulp.task("build", gulp.series(
    ["clean", "copy", "style", "posthtml"]))
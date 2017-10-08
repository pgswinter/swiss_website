var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jsmin = require('gulp-jsmin'),
	cssminbundle = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	concat = require('gulp-concat'),
	pug = require('gulp-pug'),
	browersync = require('browser-sync').create(),
	reload = browersync.reload;

// minify javascript
gulp.task('compress', function (cb) {
	pump([
		gulp.src(['./builds/app/js/*.js','!./builds/app/js/**/*.min.js']),
		uglify(),
		rename({suffix:'.min'}),
		gulp.dest('./builds/app/js')
	],
    cb
  );
});
// merge javascript
gulp.task('scripts', function() {
  return gulp.src(['./src/js/amc_ui_kit/**/*.js','./src/js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./builds/app/js'));
});
// minify css
gulp.task('cssminbundle',function(){
	gulp.src(['./builds/app/css/bundle.css','!./builds/app/css/**/*.min.css'])
		.pipe(cssminbundle())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./builds/app/css'));
});
// process sass too css
gulp.task('sass',function(){
	return gulp.src('./src/sass/**/*.sass')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./builds/app/css'))
		.pipe(browersync.stream());

});
// tracking process sass too css
gulp.task('sass:watch',function(){
	gulp.watch('./src/sass/**/*.sass',['sass']);
});

gulp.task('pug',function(){
	return gulp.src('./pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./builds/app/'));
});

gulp.task('pugserve',function(){
	return gulp.src('./pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./'));
});

// server
gulp.task('serve',['sass','pug','cssminbundle','scripts','compress'],function(){
	browersync.init({
		server:{
			baseDir:"./"
		}
	});
	gulp.watch("./src/sass/*.sass",['sass']);
	gulp.watch("./pug/**/*.pug",['pug']);
	gulp.watch("./builds/app/css/bundle.min.css",['cssminbundle']);
	gulp.watch("./builds/app/js/bundle.js",['scripts']);
	gulp.watch("./builds/app/js/bundle.min.js",['compress']);
});

gulp.task('dev',['sass','sass:watch','scripts','pug']);
gulp.task('product',['cssminbundle','compress']);

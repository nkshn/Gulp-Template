'use strict';

// Initialization
var gulp        = require('gulp'),
	gp          = require('gulp-load-plugins')(), // Підключення всіх плагинів
	browserSync = require('browser-sync').create(); // Сервер

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: './build'
    });
    //browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

// Gulp Pug
gulp.task('pug', function() {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(gp.pug({
			pretty:true
		}))
		.pipe(gulp.dest('build'))
		.on('end', browserSync.reload);
});

// Gulp Sass
gulp.task('sass', function() {
	return gulp.src('src/static/sass/*.sass')
		.pipe(gp.sourcemaps.init())
		.pipe(gp.sass({}))
		.pipe(gp.csso())
		.pipe(gp.autoprefixer({
			overrideBrowserslist: ['last 3 versions']
		}))
		.on("error", gp.notify.onError({
			message: "Error: <%= error.message %>",
			title: "Error running something"
		}))
		.pipe(gp.sourcemaps.write())
		.pipe(gulp.dest('build/static/css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Gulp Watch
gulp.task('watch', function() {
	gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
	gulp.watch('src/static/sass/**/*.sass', gulp.series('sass'))
});

// Gulp Default
gulp.task('default', gulp.series(
	gulp.parallel('pug', 'sass'),
	gulp.parallel('watch', 'server')
));
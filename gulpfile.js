'use strict';

// Initialization
global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

// Визиваєм всі такски
$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

// Gulp Default
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'image'),
	$.gulp.parallel('watch', 'server')
));
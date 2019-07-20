module.exports = function() {
	$.gulp.task('dev', $.gulp.series(
		$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts'),
		$.gulp.parallel('watch', 'server')
	));
}
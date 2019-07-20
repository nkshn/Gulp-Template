module.exports = function() {
	$.gulp.task('build', $.gulp.series(
		$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'image')
	));
}
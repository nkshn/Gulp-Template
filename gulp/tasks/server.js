module.exports = function() {
	$.gulp.task('server', function() {
		$.browserSync.init({
			server: './build'
		});
		//browserSync.watch('build/**/*.*').on('change', browserSync.reload);
	});
}
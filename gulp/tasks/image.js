module.exports = function() {
	$.gulp.task('image', function() {
		return $.gulp.src('src/static/images/**/*')
			.pipe($.gp.imagemin([
				$.gp.imagemin.gifsicle({interlaced: true}),
				$.gp.imagemin.jpegtran({progressive: true}),
				$.gp.imagemin.optipng({optimizationLevel: 1}),
				$.gp.imagemin.svgo({
					plugins: [
						{ removeViewBox: true },
						{ cleanupIDs: false }
					]
				})
			], {
				verbose: true
			}))
			.pipe($.gulp.dest('build/static/images'))
	});
}
module.exports = function() {
	$.gulp.task('sass', function() {
		return $.gulp.src('src/static/sass/*.sass')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({}))
			.pipe($.gp.csso())
			.pipe($.gp.plumber())
			.pipe($.gp.autoprefixer({
				overrideBrowserslist: ['last 3 versions']
			}))
			.on("error", $.gp.notify.onError({
				message: "Error: <%= error.message %>",
				title: "Error running something"
			}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css/'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
}
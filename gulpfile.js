//Include gulp
var gulp = require('gulp');
//var shell = require('gulp-shell');
//gulp.task('scripts', shell.task(['echo ITWORKS']) );

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);


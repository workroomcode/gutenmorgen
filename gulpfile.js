var gulp       = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('reload', function(){
    gulp.src('src/**/*.+(html|css|js)')
        .pipe(livereload());
});

gulp.task('default', function(){
    livereload.listen();
    gulp.watch('src/**/*.+(html|css|js)', ['reload']);
});
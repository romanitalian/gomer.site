var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('minify-css', function() {
    return gulp.src('./app/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./build'));
});

// gulp.task('watch', function () {});

gulp.task('watch', function () {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css',
    ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);

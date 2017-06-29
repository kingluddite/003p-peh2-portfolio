const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./src/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src',
    },
  });

  watch('./src/index.html', () => {
    browserSync.reload();
  });

  watch('./src/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import gulp from 'gulp';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';

gulp.task('cssInject', ['styles'], () => gulp.src('./src/temp/styles/styles.css')
    .pipe(browserSync.stream()));

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

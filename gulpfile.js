const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
  return gulp.src('./src/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./src/temp/styles'));
});

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src'
    }
  });

  watch('./src/index.html', () => {
    browserSync.reload();
  });

  watch('./src/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./src/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

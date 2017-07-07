/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import del from 'del';

const config = {
  shape: {
    spacing: {
      padding: 1,
    },
  },
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css',
        },
      },
    },
  },
};

// delete the temporary sprites and generated sprites
gulp.task('beginClean', () =>
  del(['./src/temp/sprite', './src/assets/images/sprites']));

gulp.task('createSprite', ['beginClean'], () =>
  gulp.src('./src/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/temp/sprite')));

// move our generated sprite into our main `images` folder
gulp.task('copySpriteGraphic', ['createSprite'], () =>
  gulp.src('./src/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./src/assets/images/sprites')));

// move our generated `sprite.css` file into the `modules` folder
gulp.task('copySpriteCSS', ['createSprite'], () =>
  gulp.src('./src/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./src/assets/styles/modules')));

gulp.task('endClean', ['createSprite', 'copySpriteGraphic'], () =>
  del('./src/temp/sprite'));

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);

let gulp = require('gulp');
let critical = require('critical');
let tar = require('gulp-tar');
let gzip = require('gulp-gzip');
let cachebust = require('gulp-cache-bust');

process.setMaxListeners(Infinity);

gulp.task('inline-critical-css', () => {
  try {
    let pages = [ 'index.html' ];
    pages.map(page => {
      return critical.generate({
        base: 'dist/',
        src: page,
        dest: page,
        minify: true,
        inline: true,
        timeout: 90000,
        dimensions: [{
          height: 640,
          width: 360
        }, {
          height: 1024,
          width: 768
        }, {
          height: 720,
          width: 1280
        }, {
          height: 1080,
          width: 1920
        }],
        penthouse: {
          blockJSRequest: false
        }
      }).then(output => {
        console.log(`Successfully generate critical inline style on page ${page}`);
        console.log(output);
      }).catch(err => {
        console.error(err);
      });
    })
  } catch (e) {
    console.log(e)
  }
});

gulp.task('build', () => {
  let stream = gulp.src('./temp/*.*')
    .pipe(tar('archive.tar'))
    .pipe(cachebust({ type: 'timestamp' }))
    .pipe(gzip())
    .pipe(gulp.dest('dist'))
  return stream
})

gulp.task('default', ['inline-critical-css'])
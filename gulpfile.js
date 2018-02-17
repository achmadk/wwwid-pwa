let gulp = require('gulp');
let critical = require('critical');

process.setMaxListeners(Infinity);

gulp.task('default', () => {
  try {
    let pages = [ 'index.html', 'article-details.html' ];
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
      }).error(err => {
        console.error(err);
      });
    })
  } catch (e) {
    console.log(e)
  }
});

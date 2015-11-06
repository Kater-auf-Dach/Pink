module.exports = {
  dev: {
    bsFiles: {
      src: [
        'src/css/style.css',
        'src/js/*.js',
        'src/img/*.{png,jpg,gif,svg}',
        'src/*.html'
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: 'src/'
      },
      startPath: '/index.html',
    }
  }
};
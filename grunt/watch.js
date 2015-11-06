module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  livereload: {
    options: { livereload: true },
    files: ['src/*.html']
  },

  scripts: {
    files: ['src/js/*.js'],
    tasks: ['jshint']
  },

  styles: {
    files: ['src/scss/**/*.scss'],
    tasks: ['sass:dev']
  }
};
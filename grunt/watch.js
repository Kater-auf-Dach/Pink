module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  livereload: {
    options: { livereload: true },
    files: ['source/*.html']
  },

  scripts: {
    files: ['source/js/*.js'],
    tasks: ['jshint']
  },

  styles: {
    files: ['source/scss/**/*.scss'],
    tasks: ['sass:dev']
  },

  imagemin: {
    files: ['source/img/**/*.{png,jpg,gif}'],
    tasks: ['imagemin']
  }
};
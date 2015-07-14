module.exports = {
  script: {
    files: [{
      expand: true,
      cwd: 'source/js',
      src: '**/*.js',
      dest: 'build/js',
      ext: '.min.js'
    }]
  }
};

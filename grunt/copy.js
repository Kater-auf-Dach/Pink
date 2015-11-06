module.exports = {
    build: {
      files: [{
        expand: true,
        cwd: 'src',
        src: [
          'img/**',
          'fonts/**'
        ],
        dest: 'build'
      }]
    }
};

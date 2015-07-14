module.exports = {
    build: {
      files: [{
        expand: true,
        cwd: "source",
        src: [
          "*.html",
          "scss/**",
          "js/**",
          "img/**",
          "fonts/**"
        ],
        dest: "build"
      }]
    }
};

module.exports = {
  dev: {
    files:{
      'src/css/style.css': ['src/scss/style.scss']
    }
  },

  dist: {
    files:{
      'build/css/style.css': ['src/scss/style.scss']
    }
  }
};

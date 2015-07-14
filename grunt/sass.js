module.exports = {
  // Настройки для разработки
  dev: {
    options: {
      sourcemap: true
    },
    files:{
      'source/css/style.css': ['source/scss/style.scss']
    }
  },
  // Настройки для продакшна
  prod: {
    options: {
      sourceMap: false
    },
    files:{
      'build/css/style.css': ['source/scss/style.scss']
    }
  }
};

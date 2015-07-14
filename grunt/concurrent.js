module.exports = {

  options: {
    limit: 3
  },

/*
  // Задачи для разработки
  devFirst: [

  ],
  devSecond: [

  ],
 */

  // Задачи для продакшна
  prodFirst: [
    'clean',
    'jshint'
  ],
  prodSecond: [
    'sass:prod',
    'uglify',
    'htmlmin'
  ],

  // Задачи по изображениям
  imgFirst: [
    'imagemin:prod'
  ],
  imgSecond: [
    'imagemin:dev'
  ]
};

module.exports = {

  options: {
    limit: 3
  },

  // Задачи для продакшна
  prodFirst: [
    'clean',
    'jshint'
  ],
  prodSecond: [
    'sass:prod',
    'uglify',
    'htmlmin:prod'
  ],

  // Задачи по изображениям
  imgFirst: [
    'imagemin:prod'
  ],
  imgSecond: [
    'imagemin:dev'
  ]
};

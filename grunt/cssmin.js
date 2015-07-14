module.exports = {
    style: {
      options: {
        keepSpecialComments: 0,
        report: 'gzip'
      },
      files: {
        'build/css/style.min.css': ['build/css/style.css']
      }
    }
};

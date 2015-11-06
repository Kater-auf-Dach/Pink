module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({

    // компиляция sass
    sass: {
      style: {
        files:{
          'build/css/style.css': ['src/scss/style.scss']
        }
      }
    },

    // jade compille
    jade: {
      style: {
        options: {
          data: {
            debug: false
          }
        },
        pretty: true,
        files: {
          "build/index.html": "src/jade/pages/index.jade"
        }
      }
    },

    // автопрефиксер
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9'],
        map: true
      },
      style: {
        src: 'build/css/style.css'
      }
    },

    // сжатие css
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    //сжатие js
    uglify: {
      start: {
        files: {
          'build/js/script.min.js': ['build/js/script.min.js']
        }
      }
    },

    // оптимизация графики
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['build/img/*.{png,jpg,gif,svg}']
        }]
      }
    },

    // очистка дирректории
    clean: {
      build: [
        'build/css',
        'build/img',
        'build/js',
        'build/*.html'
      ]
    },

    // копирование
    copy: {
      js: {
        expand: true,
        cwd: 'src/js/',
        src: ['**'],
        dest: 'build/js/'
      },
      img: {
        expand: true,
        cwd: 'src/img/',
        src: ['*.{png,jpg,gif,svg}'],
        dest: 'build/img/'
      },
      html: {
        expand: true,
        cwd: 'src/',
        src: ['*.html'],
        dest: 'build/'
      },
      css_min: {
        src: ['build/css/style.css'],
        dest: 'build/css/style.min.css'
      },
      css_add: {
        expand: true,
        cwd: 'src/sass/css/',
        src: ['*.css'],
        dest: 'build/css/'
      },
      fonts: {
        expand: true,
        cwd: 'src/font/',
        src: ['*.{eot,svg,woff,ttf}'],
        dest: 'build/font/'
      }
    },

    // отслеживаем изменений
    watch: {
      jade: {
        files: ['src/jade/pages/*.jade'],
        tasks: ['jade'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      style: {
        files: ['src/scss/**/*.scss'],
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      scripts: {
        files: ['src/js/script.js'],
        tasks: ['js'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      images: {
        files: ['src/img/**/*.{png,jpg,gif,svg}'],
        tasks: ['img'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: ['src/*.html'],
        tasks: ['copy:html'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    // автоперезагрузка
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'src/jade/*.jade',
            'build/css/*.css',
            'build/js/*.js',
            'build/img/*.{png,jpg,gif,svg}',
            'build/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "build/"
          },
          startPath: "/index.html",
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
          }
        }
      }
    }

  });

  // базовый таск
  grunt.registerTask('default', [
    'jade',
    'sass',
    'autoprefixer',
    'copy:css_min',
    'cssmin',
    'copy:js',
    'uglify',
    'copy:html',
    'copy:img',
    'copy:fonts',
    'imagemin',
    'browserSync',
    'watch'
  ]);

  // билдовый таск
  grunt.registerTask('build', [
    'clean:build',
    'sass',
    'autoprefixer',
    'copy:css_min',
    'cssmin',
    'copy:js',
    'uglify',
    'copy:html',
    'copy:img',
    'copy:fonts',
    'imagemin'
  ]);

  // только js
  grunt.registerTask('js', [
    'uglify',
    'copy:js_vendors',
    'copy:js'
  ]);

  // только стили
  grunt.registerTask('style', [
    'sass',
    'autoprefixer',
    'cssmin'
  ]);

  // только картики и стили
  grunt.registerTask('img', [
    'copy:img',
    'imagemin',
    'sass',
    'autoprefixer',
    'cssmin'
  ]);
};
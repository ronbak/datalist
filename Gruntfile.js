module.exports = function(grunt) {

  grunt.initConfig({
    // CSS TASKS ===============================================================
    less: {
      build: {
        files: {
          'css/style.css': 'less/style.less'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'css/style.min.css': 'css/style.css'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        plugins:[
          'karma-jasmine',
          'karma-coverage',
          'karma-phantomjs-launcher'
        ],
      }
    },

    // COOL TASKS ==============================================================
    watch: {
      css: {
        files: ['less/*.less'],
        tasks: ['less', 'cssmin']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default',
    ['less', 'cssmin', 'concurrent']);
};

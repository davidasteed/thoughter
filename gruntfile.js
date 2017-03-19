module.exports = function configureGrunt(gruntConfig) {
  gruntConfig.initConfig({
    // first task: delete any earlier build
    clean: ['build/'],

    //
    // now starting new build content
    //

    // this task will copy files to the build
    copy: {
      // first target
      copyHtml: {
        files: [
          {
            cwd: 'src/',
            src: ['*.html'],
            dest: 'build/',
            expand: true
          }
        ]
      },
      copyJs: {
        files: [
          {
            cwd: 'src/js',
            src: ['**/*.js'],
            dest: 'build/js/',
            expand: true
          }
        ]
      },
      copyJquery: {
        files: [
          {
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.js'],
            dest: 'build/js/vendor/',
            expand: true
          }
        ]
      }
    },
    sass: {
      runSass: {
        files: {
          //  DESTINATION       : SOURCE
          'build/css/style.css' : 'src/sass/main.scss'
        }
      }
    },
    jshint: {
      appjs: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: ['src/**/*.js']
        }
      }
    },
    karma: {
      copyKarma: {
        options: {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
              'src/**/*.js',
              'node_modules/sinon/pkg/sinon-2.0.0.js',
              'test/**/*.js'
          ]
        }
      }
    },
    //
    // grunt watch plugin configuration
    //
    watch: {
      // watch for changes to grunt's config file
      watchGrunt: {
        files: ['gruntfile.js'],
        options: {
          spawn: false,   // speed up grunt reload!
          reload: true,
        }
      },
      watchHtml: {
        files: 'src/index.html',
        tasks: ['copy:copyHtml'],
        options: {
          spawn: false,
          event: ['all']
        }
      },
      watchSass: {
        files: 'src/sass/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false,
          event: ['all']
        }
      },
      watchJs: {
        files: 'src/js/*.js',
        tasks: ['copy:copyJs'],
        options: {
          spawn: false,
          event: ['all']
        }
      },
      watchJquery: {
        files: 'node_modules/jquery/dist/jquery.js',
        tasks: ['copy:copyJquery'],
        options: {
          spawn: false,
          event: ['all']
        }
      },
      watchJshint: {
        files: '.jshintrc',
        tasks: ['jshint'],
        options: {
          spawn: false,
          event: ['all']
        }
      },
      watchKarma: {
        files: [
            'src/**/*.js',
            'node_modules/sinon/pkg/sinon-2.0.0.js',
            'test/**/*.js'
        ],
        tasks: ['karma'],
        options: {
          spawn: false,
          event: ['all']
        }
      }


    }
  });

  // automatically load all grunt tasks
  require('load-grunt-tasks')(gruntConfig);

  // enable grunt watch tasks
  gruntConfig.loadNpmTasks('grunt-contrib-watch');
  gruntConfig.loadNpmTasks('grunt-contrib-compass');

  // task alias for build tasks
  gruntConfig.registerTask('build', [ 'clean', 'jshint', 'karma', 'sass', 'copy', ]);

  // NOTE:  use 'grunt watch' to run all watch tasks,
  // or use the below task aliases to watch individual components
  gruntConfig.registerTask('gruntwatch', ['watch:watchGrunt']);
  gruntConfig.registerTask('htmlwatch', ['watch:watchHtml']);
  gruntConfig.registerTask('sasswatch', ['watch:watchSass']);
  gruntConfig.registerTask('jswatch', ['watch:watchJs']);
  gruntConfig.registerTask('jquerywatch', ['watch:watchJquery']);
  gruntConfig.registerTask('jshintwatch', ['watch:watchJshint']);
  gruntConfig.registerTask('karmawatch', ['watch:watchKarma']);
};

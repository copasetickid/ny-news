module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015', 'react'] }]]
        },
        src: ['src/scripts/app.js'],
        dest: 'public/ny-news.js',
      }
    },

     sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'public/main.css': 'src/stylesheets/main.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {
      browserify: {
        files: ['src/scripts/**/*.js'],
        tasks: [ 'browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hapi');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['sass', 'browserify']);

};

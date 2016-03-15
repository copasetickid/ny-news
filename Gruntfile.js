module.exports = function(grunt) {

  grunt.initConfig({
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
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'hapi'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hapi');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};

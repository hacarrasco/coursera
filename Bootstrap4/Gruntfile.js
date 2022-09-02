"use strict";

module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);

  // Automatically load required Grunt tasks
  require("jit-grunt")(grunt);

  // Define the configuration for all the tasks
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
 
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    }
  });
 
  grunt.registerTask('default', ['sass']);
}

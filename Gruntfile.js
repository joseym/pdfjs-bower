// Generated on 2013-10-21 using generator-angular 0.5.0
'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  
  var self = {
    execute: {
      generic: {
        options: {
          cwd: 'pdf.js',
          args: ['generic']
        },
        src: ['pdf.js/make.js']
      }
    },
    copy: {
      pdfjs: {
        files: [
          // includes files within path
          { expand: true, flatten: true, src: ['pdf.js/build/pdf.js', 'pdf.js/build/pdf.worker.js', 'pdf.js/build/generic/web/compatibility.js'], dest: 'dist/', filter: 'isFile'},
        ]
      }
    }
  };

  grunt.initConfig(self)

  grunt.registerTask('build', [
    'execute', 'copy'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};

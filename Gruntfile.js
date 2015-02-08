"use strict";

module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  var paths = {
    app: "app",
    dist: "dist",
    ejs: "<%= paths.app %>/ejs",
    compiledTpl: "<%= paths.app %>/js/templates"
  };

  grunt.initConfig({
    paths: paths,

    watch: {
      options: {
        nospawn: true
      },
      jst: {
        files: [
          "<%= paths.ejs %>/**/*.ejs"
        ],
        tasks: ["jst:compile"]
      }
    },

    jst: {
      options: {
        amd: true
      },
      compile: {
        files: {
          "<%= paths.compiledTpl %>/ejsTemplates.js": ["<%= paths.ejs %>/**/*.ejs"]
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "app/js",
          mainConfigFile: "app/js/main.js",
          preserveLicenseComments: false,
          useStrict: true,
          include: ["../lib/almond/almond", "main"],
          out: "dist/main.min.js"
        }
      }
    }

  });

  grunt.registerTask("build", ["jst:compile", "requirejs:compile"]);

};

module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["development/**/*.ts", "!node_modules/**"]
      }
    },
    
    combine_js: {
    files: [{
      src: 'build.json',
      combine_folder: '',
      additional_files: [],
      base_files: []
    }]
  },
    
    clean: {
      js: ['development/**/*.js', '!development/**/*.ts'],
      map: ['development/**/*.map']
    },
    watch: {
      scripts: {
        files: ['development/**/*.ts'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-combine-js");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask("default", ["ts", "combine_js", "clean"]);
};
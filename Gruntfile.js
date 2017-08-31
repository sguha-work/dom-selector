module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["development/**/*.ts", "!node_modules/**"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
module.exports = function(grunt) {

grunt.initConfig({
  watch: {
    css: {
      files: ['public/scss/*.scss'],
      tasks: ['compass'],
      options: {
        // Start a live reload server on the default port 35729
        livereload: true,
      },
    },
  },
});
}
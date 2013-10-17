module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                  'Gruntfile.js',
                  'js/**/*.js'
            ]
        },
        sass: {
            dev: {
                files: {
                    'styles/styles.css': 'styles/styles.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['jshint', 'sass']);
};

var fs    = require('fs'),
    path  = require('path');

//var config = require('./config/config.js');

var buildLocation = path.resolve(process.cwd(), '.build');

module.exports = function(grunt) {

    // include some stuff
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            build: buildLocation//,
            //dist: distLocation
        },
        clean: {
            build: ['<%= paths.build %>']
        },
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: [
                            'bin/**',
                            'config/**',
                            'contrib/**',
                            'plugins/**',
                            'queue/**',
                            '*.js',
                            'package.json'
                        ],
                        dest: '<%= paths.build %>'
                    }
                ]
            }
        }
    });


    // Production build / release
    grunt.registerTask('build', ['clean:build', 'copy:build']);

};

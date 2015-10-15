module.exports  = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    console: true
                }
            },
            files: {
                src: ['js/*.js']
            }
        },

        concat: {
            blocks: {
                src: ['js/**/*.js'],
                dest: 'desktop.bundles/index/production.js'
            }
        },

        //min js
        uglify: {
            options: {
                mangle: true
            },
            my_min: {
                files: {
                    'production/production.min.js': ['production/production.js']
                }
            }
        },

        //min css
        cssmin: {
            target: {
                files: {

                }
            }
        },

        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat:blocks']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);


    grunt.registerTask('productionMinJs', ['uglify:my_min']);
    grunt.registerTask('productionJs', ['concat:blocks']);
    grunt.registerTask('productionMinCss', ['cssmin']);
};

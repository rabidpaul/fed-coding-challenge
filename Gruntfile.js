module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Minifies the dist css file.
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['index.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
            }
        },
        // Uglifies and minifies the dist js
        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: [{
                    'dist/js/index.min.js': ['dist/js/index.js']
                }]
            }
        },
        // Concats all js files prior to uglification
        concat: {
            options: {
                separator: "\n",
                stripBanners: true,
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %>"+" <%= grunt.template.today('yyyy-mm--dd')  %> */\n"
            },
            dist: {
                src: ['js/*.js'],
                dest: 'dist/js/index.js'
            }
        },
        // Compiles css to the non-dist css folder prior to minification
        sass: {
            dist: {
                files: {
                    'css/index.css': 'sass/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            scripts:{
                files: ['js/**/*.js'],
                tasks: ['concat']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'cssmin', 'concat', 'uglify']);


}

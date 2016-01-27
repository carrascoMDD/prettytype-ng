/* Gruntfile for prettytype-ng

 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {

                files: [
                    /* Order of files is mandatory as stated to the dependency injection in angular module definitions */

                    'bower_components/angular/angular.js',

                    'bower_components/prettytype/src/**/*.js',


                    'src/utils/exceptiondetails_svce.js',
                    'src/utils/decoratesystemprototypes_svce.js',

                    'src/typesregistry_svce.js',


                    'src/roots/roots_types.js',
                    'src/roots/overrider_type.js',
                    'src/roots/overrider_svce.js',


                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_type.js',
                    'src/identifying/identifier_svce.js',

                    'src/identifying/record_type.js',
                    'src/identifying/recorder_type.js',
                    'src/identifying/recorder_svce.js',


                    'src/common/common_types.js',
                    'src/common/prominstrexception.js',
                    'src/common/common_type.js',
                    'src/common/prominstr_type.js',
                    'src/common/prominstr_svce.js',
                    'src/common/withprominstr_type.js',
                    'src/common/common_svce_type.js',
                    'src/common/common_svce.js',
                    'src/common/common_ctrl_type.js',
                    'src/common/common_ctrl.js'

                ],

                tasks: ['concat', 'uglify'],

                options: {

                    spawn:false,
                    event:['all']
                },
            },
            karma: {
                files: [
                    'src/**/*.js',
                    'test/**/*.js'
                ],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            }
        },
        concat : {
            options : {
                separator: ';',
                sourceMap :true
            },
            dist : {
                src  : [ '<%= watch.scripts.files %>' ],
                dest : 'build/prettytype-ng.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap : true,
                sourceMapIncludeSources : true
            },
            build: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/prettytype-ng.min.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
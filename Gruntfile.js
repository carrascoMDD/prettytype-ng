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

                    'src/baseurls/baseurl_types.js',
                    'src/baseurls/appbaseurl_type.js',
                    'src/baseurls/appbaseurl_svce.js',
                    'src/baseurls/apibaseurl_type.js',
                    'src/baseurls/apibaseurl_svce.js',

                    'src/roots/roots_types.js',
                    'src/roots/overrider_ng_type.js',
                    'src/roots/overrider_svce.js',

                    'src/utils/console_ng_svce.js',

                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_ng_type.js',
                    'src/identifying/identifier_svce.js',

                    'src/identifying/record_ng_type.js',

                    'src/identifying/recordingpolicy_ng_type.js',
                    'src/identifying/recordingpolicy_keepall_ng_type.js',
                    'src/identifying/recordingpolicy_keepsome_ng_type.js',
                    'src/identifying/recordingpolicy_keeprecent_ng_type.js',
                    'src/identifying/dumpingpolicy_ng_type.js',
                    'src/identifying/dumpingpolicy_filterkinds_ng_type.js',

                    'src/identifying/recorder_ng_type.js',
                    'src/identifying/recorder_svce.js',


                    'src/common/common_types.js',
                    'src/commoneventkinds_ng.js',
                    'src/common/prominstrexception_ng.js',
                    'src/common/common_ng_type.js',
                    'src/common/prominstr_ng_type.js',
                    'src/common/prominstr_svce.js',
                    'src/common/withprominstr_ng_type.js',
                    'src/common/common_svce_ng_type.js',
                    'src/common/common_svce.js',
                    'src/common/common_ctrl_ng_type.js',
                    'src/common/common_ctrl.js'
                ],

                tasks: ['concat', 'uglify'],

                options: {

                    spawn:false,
                    event:['all']
                },
            }
        },


        clean: [ "build/**/*", "dist/**/*"],


        concat : {
            options : {
                separator: ';',
                sourceMap :true
            },
            dist : {
                src  : [ 
                    /* Order of files explicitely stated and mandatory for the sucessful resolution of dependencies injection in angular module definitions */

                    'src/utils/exceptiondetails_svce.js',
                    'src/utils/decoratesystemprototypes_svce.js',

                    'src/typesregistry_svce.js',

                    'src/baseurls/baseurl_types.js',
                    'src/baseurls/appbaseurl_type.js',
                    'src/baseurls/appbaseurl_svce.js',
                    'src/baseurls/apibaseurl_type.js',
                    'src/baseurls/apibaseurl_svce.js',

                    'src/roots/roots_types.js',
                    'src/roots/overrider_ng_type.js',
                    'src/roots/overrider_svce.js',

                    'src/utils/console_ng_svce.js',

                    'src/identifying/identifying_types.js',
                    'src/identifying/identifier_ng_type.js',
                    'src/identifying/identifier_svce.js',

                    'src/identifying/record_ng_type.js',

                    'src/identifying/recordingpolicy_ng_type.js',
                    'src/identifying/recordingpolicy_keepall_ng_type.js',
                    'src/identifying/recordingpolicy_keepsome_ng_type.js',
                    'src/identifying/recordingpolicy_keeprecent_ng_type.js',
                    'src/identifying/dumpingpolicy_ng_type.js',
                    'src/identifying/dumpingpolicy_filterkinds_ng_type.js',

                    'src/identifying/recorder_ng_type.js',
                    'src/identifying/recorder_svce.js',


                    'src/common/common_types.js',
                    'src/commoneventkinds_ng.js',
                    'src/common/prominstrexception_ng.js',
                    'src/common/common_ng_type.js',
                    'src/common/prominstr_ng_type.js',
                    'src/common/prominstr_svce.js',
                    'src/common/withprominstr_ng_type.js',
                    'src/common/common_svce_ng_type.js',
                    'src/common/common_svce.js',
                    'src/common/common_ctrl_ng_type.js',
                    'src/common/common_ctrl.js' 
                ],
                dest : 'build/prettytype-ng.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - */\n',
                sourceMap : true,
                sourceMapIncludeSources : true,
                sourceMapIn: 'build/prettytype-ng.js.map'
            },
            build: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/prettytype-ng.min.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};

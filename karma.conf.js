module.exports = function(config){
    config.set({

        basePath : './',


        files: [

            /* Order of files is mandatory as stated to the dependency injection in angular module definitions */

            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',


            'bower_components/prettytype/src/**/*.js',


            'bower_components/prettytype/test/typesregistry-test.js',
            'bower_components/prettytype/test/roots-test/overrider_type-test.js',
            'bower_components/prettytype/test/identifying-test/identifier_type-test.js',
            'bower_components/prettytype/test/identifying-test/record_type-test.js',
            'bower_components/prettytype/test/identifying-test/recorder_type-test.js',
            'bower_components/prettytype/test/common-test/common_type-test.js',
            'bower_components/prettytype/test/common-test/common_type-record-test.js',
            'bower_components/prettytype/test/common-test/common_type-misc-test.js',
            'bower_components/prettytype/test/common-test/qngmock.js',
            'bower_components/prettytype/test/common-test/prominstr_type-test.js',
            'bower_components/prettytype/test/common-test/withprominstr_type-test.js',
            'bower_components/prettytype/test/common-test/appbaseurlmock.js',
            'bower_components/prettytype/test/common-test/apibaseurlmock.js',
            'bower_components/prettytype/test/common-test/locationngmock.js',
            'bower_components/prettytype/test/common-test/common_ctrl_type-test.js',
            'bower_components/prettytype/test/common-test/common_svce_type-test.js',
            'bower_components/prettytype/test/common-test/prominstrexception-test.js',


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


            'src/baseurls/baseurl_types.js',
            'src/baseurls/appbaseurl_type.js',
            'src/baseurls/appbaseurl_svce.js',
            'src/baseurls/apibaseurl_type.js',
            'src/baseurls/apibaseurl_svce.js',


            'src/common/common_types.js',
            'src/common/prominstrexception.js',
            'src/common/common_type.js',
            'src/common/prominstr_type.js',
            'src/common/prominstr_svce.js',
            'src/common/withprominstr_type.js',
            'src/common/common_svce_type.js',
            'src/common/common_svce.js',
            'src/common/common_ctrl_type.js',
            'src/common/common_ctrl.js',






            'test/typesregistry-test.js',

            'test/roots-test/overrider_type-test.js',
            'test/roots-test/overrider_svce-test.js',

            'test/identifying-test/identifier_type-test.js',
            'test/identifying-test/record_type-test.js',
            'test/identifying-test/recorder_type-test.js',
            'test/identifying-test/recorder_svce-test.js',

            'test/common-test/common_type-test.js',
            'test/common-test/common_type-record-test.js',
            'test/common-test/common_type-misc-test.js',
            'test/common-test/prominstr_type-test.js',
            'test/common-test/prominstr_svce-test.js',
            'test/common-test/withprominstr_type-test.js',

            'test/common-test/common_ctrl_type-test.js',
            /* ACV OJO 201601270211 TODO  DOES NOT WORK
             'test/common-test/common_ctrl-test.js',
             */

            'test/common-test/common_svce_type-test.js',
            'test/common-test/common_svce-test.js',





            'test/reuse_commons/reuse_ctrl/reuse_ctrl_types.js',
            'test/reuse_commons/reuse_ctrl/reuse_ctrl_type.js',
            'test/reuse_commons/reuse_ctrl/reuse_ctrl.js',


            'test/reuse_commons/reuse_svce/reuse_svce_types.js',
            'test/reuse_commons/reuse_svce/reuse_svce_type.js',
            'test/reuse_commons/reuse_svce/reuse_svce.js',

            'test/reuse_commons-test/reuse_ctrl_type-test.js',
            /* ACV OJO 201601270211 TODO  DOES NOT WORK
            'test/reuse_commons-test/reuse_ctrl-test.js',
             */
            'test/reuse_commons-test/reuse_svce_type-test.js',
            'test/reuse_commons-test/reuse_svce-test.js'

        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        port:  9877,
        colors:  true ,

        logLevel: config.LOG_INFO,

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });
};
module.exports = function(config){
    config.set({

        basePath : './',


        files: [

            /* Order of files is mandatory as stated to the dependency injection in angular module definitions */

            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',


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
            'src/common/common_ctrl.js',




            'test/typesregistry-test.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        port:  9876,
        colors:  true ,

        logLevel: config.LOG_INFO,

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });
};
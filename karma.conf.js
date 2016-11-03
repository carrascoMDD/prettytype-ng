module.exports = function(config){
    config.set({

        basePath : './',


        files: [

            /* Order of files is mandatory as stated to the dependency injection in angular module definitions */

            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',

            /*
            'bower_components/prettytype/dist/prettytype.min.js',

             */


             'bower_components/prettytype/src/roots/logmoduleloads.js',

             'bower_components/prettytype/src/typesregistry.js',

             'bower_components/prettytype/src/utils/decoratesystemprototypes_svce.js',
             'bower_components/prettytype/src/utils/stacktrace.js',
             'bower_components/prettytype/src/utils/exceptiondetails_svce.js',
             'bower_components/prettytype/src/utils/console_svce.js',

             'bower_components/prettytype/src/roots/overrider_type.js',

             'bower_components/prettytype/src/commoneventkinds.js',
             'bower_components/prettytype/src/common/common_type.js',
             'bower_components/prettytype/src/common/prominstrexception.js',
             'bower_components/prettytype/src/common/prominstr_type.js',
             'bower_components/prettytype/src/common/withprominstr_type.js',
             'bower_components/prettytype/src/common/common_ctrl_type.js',
             'bower_components/prettytype/src/common/common_svce_type.js',

             'bower_components/prettytype/src/identifying/identifier_type.js',
             'bower_components/prettytype/src/identifying/record_type.js',
             'bower_components/prettytype/src/identifying/recordingpolicy_type.js',
             'bower_components/prettytype/src/identifying/recordingpolicy_keepall_type.js',
             'bower_components/prettytype/src/identifying/recordingpolicy_keepsome_type.js',
             'bower_components/prettytype/src/identifying/recordingpolicy_keeprecent_type.js',
             'bower_components/prettytype/src/identifying/dumpingpolicy_type.js',
             'bower_components/prettytype/src/identifying/dumpingpolicy_filterkinds_type.js',
             'bower_components/prettytype/src/identifying/dumpingpolicy_triggerkinds_type.js',
             'bower_components/prettytype/src/identifying/record_type.js',
             'bower_components/prettytype/src/identifying/recorder_type.js',





            'src/utils/exceptiondetails_ng_svce.js',
            'src/utils/decoratesystemprototypes_ng_svce.js',

            'src/typesregistry_svce.js',


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
            'src/identifying/dumpingpolicy_triggerkinds_ng_type.js',

            'src/identifying/recorder_ng_type.js',
            'src/identifying/recorder_svce.js',


            'src/baseurls/baseurl_types.js',
            'src/baseurls/appbaseurl_type.js',
            'src/baseurls/appbaseurl_svce.js',
            'src/baseurls/apibaseurl_type.js',
            'src/baseurls/apibaseurl_svce.js',


            'src/common/common_types.js',
            'src/commoneventkinds_ng.js',
            'src/common/prominstrexception.js',
            'src/common/common_ng_type.js',
            'src/common/prominstr_ng_type.js',
            'src/common/prominstr_svce.js',
            'src/common/withprominstr_ng_type.js',
            'src/common/common_svce_ng_type.js',
            'src/common/common_svce.js',
            'src/common/common_ctrl_ng_type.js',
            'src/common/common_ctrl.js',






            'test/typesregistry-test.js',


            'test/structural-test/utils-structural-test/console_svce-test.js',

            'test/structural-test/roots-structural-test/overrider_type-structural-test.js',
            'test/structural-test/roots-structural-test/overrider_svce-structural-test.js',

            'test/structural-test/identifying-structural-test/identifier_type-structural-test.js',
            'test/structural-test/identifying-structural-test/identifier_svce-structural-test.js',

            'test/structural-test/identifying-structural-test/record_type-structural-test.js',

            'test/structural-test/identifying-structural-test/recordingpolicy_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recordingpolicy_keepall_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recordingpolicy_keepsome_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recordingpolicy_keeprecent_type-structural-test.js',

            'test/structural-test/identifying-structural-test/dumpingpolicy_type-structural-test.js',
            'test/structural-test/identifying-structural-test/dumpingpolicy_filterkinds_type-structural-test.js',
            'test/structural-test/identifying-structural-test/dumpingpolicy_triggerkinds_type-structural-test.js',

            'test/structural-test/identifying-structural-test/recorder_type-structural-test.js',
            'test/structural-test/identifying-structural-test/recorder_svce-structural-test.js',


            'test/structural-test/common-structural-test/common_type-structural-test.js',
            'test/structural-test/common-structural-test/common_type-commoneventkinds-structural-test.js',

            'test/structural-test/common-structural-test/prominstr_type-structural-test.js',
            'test/structural-test/common-structural-test/prominstr_svce-structural-test.js',
            'test/structural-test/common-structural-test/withprominstr_type-structural-test.js',


            'test/structural-test/common-structural-test/common_ctrl_type-structural-test.js',
            /* ACV OJO 201601270211 TODO  DOES NOT WORK
             'test/structural-test/common-test/common_ctrl-structural-test.js'
             */


            'test/structural-test/common-structural-test/common_svce_type-structural-test.js',
            'test/structural-test/common-structural-test/common_svce-structural-test.js',





            'test/reuse_commons/reuse_ctrl/reuse_ctrl_types.js',
            'test/reuse_commons/reuse_ctrl/reuse_ctrl_type.js',
            'test/reuse_commons/reuse_ctrl/reuse_ctrl.js',


            'test/reuse_commons/reuse_svce/reuse_svce_types.js',
            'test/reuse_commons/reuse_svce/reuse_svce_type.js',
            'test/reuse_commons/reuse_svce/reuse_svce.js',




            'test/structural-test/reuse_commons-structural-test/reuse_ctrl_type-structural-test.js',
            /* ACV OJO 201601270211 TODO  DOES NOT WORK
            'test/structural-test/reuse_commons-test/reuse_ctrl-structural-test.js'
             */


            'test/structural-test/reuse_commons-structural-test/reuse_svce_type-structural-test.js',
            'test/structural-test/reuse_commons-structural-test/reuse_svce-structural-test.js',



            'test/behavioral-test/utils-behavioral-test/console_svce-behavioral-test.js',

            'test/behavioral-test/common-behavioral-test/common_svce-record-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-recordingpolicy_keepall-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-recordingpolicy_keepall_donotkeep-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-recordingpolicy_keepsome-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-recordingpolicy_keeprecent-behavioral-test.js',


            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_filterkinds_all-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_filterkinds_maynotdump-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_filterkinds_some-behavioral-test.js',

            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_triggerkinds_all-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_triggerkinds_none-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_triggerkinds_some-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_triggerkinds_some-recordingpolicy_keepsome-behavioral-test.js',
            'test/behavioral-test/common-behavioral-test/common_svce-dumpingpolicy_triggerkinds_some-recordingpolicy_keeprecent-behavioral-test.js'

        ],

        autoWatch : false,

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

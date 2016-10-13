/*
 * common_svce-dumpingpolicy_filterkinds_some-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610132031
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Jasmine tests in Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */







/// <reference path="src/common/common_svce.js"/>
"use strict";




describe("prettytypes-ng CommonSvce dumping policy filterkinds some behavioral tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs", "consoleSvce"));


    var aBeforeRecordMillis = new Date().getMilliseconds();


    var aMethodName = "common_svce_test_recordingpolicykeepall__theMethodName";
    var anEventKind = "common_svce_test_recordingpolicykeepall__theEventKind";
    var aData       = "common_svce_test_recordingpolicykeepall__theData";
    var aReason     = "common_svce_test_recordingpolicykeepall__theReason";
    var aDetail     = "common_svce_test_recordingpolicykeepall__theDetail";

    var aMethodName2 = "common_svce_test_recordingpolicykeepall__theMethodName2";
    var anEventKind2 = "common_svce_test_recordingpolicykeepall__theEventKind2";
    var aData2       = "common_svce_test_recordingpolicykeepall__theData2";
    var aReason2     = "common_svce_test_recordingpolicykeepall__theReason2";
    var aDetail2     = "common_svce_test_recordingpolicykeepall__theDetail2";


    var aCommonSvce             = null;
    var aCommon_Recorder        = null;
    var aCommon_Identifier      = null;
    var aDumpingPolicyFilterKinds = null;
    var aRecord = null;
    var otherRecord = null;

    var someCollectedLogsBefore = null;
    var aNumCollectedLogsBefore = null;
    var someCollectedLogsAfter1 = null;
    var aNumCollectedLogsAfter1 = null;
    var someCollectedLogsAfter2 = null;
    var aNumCollectedLogsAfter2 = null;

    var aCommon_Recorder_SetDumpingPolicy                =  null;
    var aCommon_Recorder_SetDumpingPolicy_MayDumpRecords =  null;


    beforeEach( inject(function( _CommonSvce_, _ConsoleSvce_, _DumpingPolicyFilterKindsType_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = _CommonSvce_;
        // console.log( "typeof aCommonSvce= " + typeof aCommonSvce);
        // console.log( "aCommonSvce keys = " + Object.keys( aCommonSvce));


        aCommon_Recorder   = aCommonSvce._v_Recorder;
        aCommon_Identifier = aCommonSvce._v_Identifier;




        aDumpingPolicyFilterKinds = new _DumpingPolicyFilterKindsType_.DumpingPolicyFilterKinds_Constructor( "DumpingPolicy-for-common_svce-dumpingpolicy_filterkinds_all-behavioral-test.js", aCommon_Identifier, aCommon_Recorder)

        aDumpingPolicyFilterKinds.pSetMayDumpRecords( true);
        aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole( [ anEventKind2]);


        aCommon_Recorder.pSetDumpingPolicy( aDumpingPolicyFilterKinds);

        aCommon_Recorder_SetDumpingPolicy                = aCommon_Recorder.fDumpingPolicy();
        aCommon_Recorder_SetDumpingPolicy_MayDumpRecords = aCommon_Recorder_SetDumpingPolicy.fMayDumpRecords();


        _ConsoleSvce_.pSetWriteToConsole(          true);
        _ConsoleSvce_.pSetCollectLogs(             true);
        _ConsoleSvce_.pSetMaxCollectedLogsLength(  1000000);


        _ConsoleSvce_.clear();

        someCollectedLogsBefore = _ConsoleSvce_.fCollectedLogs();
        aNumCollectedLogsBefore = someCollectedLogsBefore.length;



        aBeforeRecordMillis = new Date().getMilliseconds();

  

        aRecord = aCommonSvce.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);



        someCollectedLogsAfter1 = _ConsoleSvce_.fCollectedLogs();
        aNumCollectedLogsAfter1 = someCollectedLogsAfter1.length;


        otherRecord = aCommonSvce.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);

        someCollectedLogsAfter2 = _ConsoleSvce_.fCollectedLogs();
        aNumCollectedLogsAfter2 = someCollectedLogsAfter2.length;


        _ConsoleSvce_.pSetCollectLogs(    false);

        _ConsoleSvce_.clear();

    }));







    it("Dumps two recorded Records", function () {

        expect( aCommonSvce.fRecord).not.toBeUndefined();
        expect( typeof aCommonSvce.fRecord).toBe( "function");

        expect( aRecord).not.toBeUndefined();
        expect( typeof aRecord).toBe( "object");
        expect( aRecord).not.toBeNull();
        expect( typeof aRecord._v_Timestamp).toBe( "number");
        expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
        expect( aRecord._v_RecordId).not.toBeNull();
        expect( aRecord._v_Instance).toBe( aCommonSvce);
        expect( aRecord._v_Step).toBe( aMethodName);
        expect( aRecord._v_EventKind).toBe( anEventKind);
        expect( aRecord._v_Data).toBe( aData);
        expect( aRecord._v_Reason).toBe( aReason);
        expect( aRecord._v_Detail).toBe( aDetail);

        expect( otherRecord).not.toBeUndefined();
        expect( typeof otherRecord).toBe( "object");
        expect( typeof otherRecord._v_Timestamp).toBe( "number");
        expect( otherRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
        expect( otherRecord._v_Timestamp >= aRecord._v_Timestamp).toBe( true);
        expect( otherRecord).not.toBeNull();
        expect( otherRecord._v_RecordId).not.toBeNull();
        expect( otherRecord._v_RecordId > aRecord._v_RecordId).toBe( true);
        expect( otherRecord._v_Instance).toBe( aCommonSvce);
        expect( otherRecord._v_Step).toBe( aMethodName2);
        expect( otherRecord._v_EventKind).toBe( anEventKind2);
        expect( otherRecord._v_Data).toBe( aData2);
        expect( otherRecord._v_Reason).toBe( aReason2);
        expect( otherRecord._v_Detail).toBe( aDetail2);



        expect( aCommon_Recorder_SetDumpingPolicy).not.toBeUndefined();
        expect( typeof aCommon_Recorder_SetDumpingPolicy).toBe( "object");
        expect( aCommon_Recorder_SetDumpingPolicy).not.toBeNull();
        expect( aCommon_Recorder_SetDumpingPolicy).toBe( aDumpingPolicyFilterKinds);
        expect( aCommon_Recorder_SetDumpingPolicy_MayDumpRecords).toBe( true);





        expect( aNumCollectedLogsBefore).toBe( 0);
        expect( aNumCollectedLogsAfter1).toBe( 1);

        var aLastCollectedLogAfter1 = someCollectedLogsAfter1[ 0];

        expect( aLastCollectedLogAfter1).toBeTruthy();

        var aLastCollectedLogAfter1_kind    = aLastCollectedLogAfter1[ 0];
        var aLastCollectedLogAfter1_message = aLastCollectedLogAfter1[ 1];

        expect( aLastCollectedLogAfter1_kind).toBe( "log");
        expect( aLastCollectedLogAfter1_message).toBe( "," + aRecord.fLogString());


        expect( aNumCollectedLogsAfter2).toBe( 1);

    });



});



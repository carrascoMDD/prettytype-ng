/*
 * common_svce-recordingpolicy_keeprecent-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610181807
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




describe("prettytypes-ng CommonSvce recording policy keep recent behavioral tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs"));




    var aNumRecordsToSubmit = 10;

    var aMustKeepRecordsMaxNumber = ( aNumRecordsToSubmit * 2) + 1;

    var aMustKeepRecordsRecentMillis = 100;

    var aDelayBeforeSecondSubmissionMillis = aMustKeepRecordsRecentMillis * 10;

    var anExtraDelayForTestsMillis = 100; /* Avoid timing too tight to event expiration deadline. There is no need for fine precission on the test, and garbage collection or asynchronous testing machinery could sometimes introduce some extra milliseconds delay */







    var aCommon_title = "Common-Title-test"

    var aMethodName = "common_type_record_test_recordingpolicykeepall__theMethodName";
    var anEventKind = "common_type_record_test_recordingpolicykeepall__theEventKind";
    var aData       = "common_type_record_test_recordingpolicykeepall__theData";
    var aReason     = "common_type_record_test_recordingpolicykeepall__theReason";
    var aDetail     = "common_type_record_test_recordingpolicykeepall__theDetail";



    var aCommonSvce = null;

    var aCommon_Recorder   = null;
    var aCommon_Identifier = null;

    var aRecordingPolicyKeepRecent = null;

    var aCommon_Recorder_SetRecordingPolicy = null;
    var aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = null;

    var someKeptRecordsBefore = null;
    var someKeptRecordsAfterFirstSubmission = null;
    var someKeptRecordsBeforeSecondSubmission = null;
    var someKeptRecordsAfterSecondSubmission = null;
    var someKeptRecordsAfterFinalClear = null;










    beforeEach( inject(function( _CommonSvce_, _RecordingPolicyKeepRecentType_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = _CommonSvce_;
        // console.log( "typeof aCommonSvce= " + typeof aCommonSvce);
        // console.log( "aCommonSvce keys = " + Object.keys( aCommonSvce));


        aCommon_Recorder   = aCommonSvce._v_Recorder;
        aCommon_Identifier = aCommonSvce._v_Identifier;


        aRecordingPolicyKeepRecent = new _RecordingPolicyKeepRecentType_.RecordingPolicyKeepRecent_Constructor( "RecordingPolicy-for-common_type-recordingpolicy_keeprecent-behavioral-test.js", aCommon_Identifier, aCommon_Recorder)

        aRecordingPolicyKeepRecent.pSetMustKeepRecords(             true);
        aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber(    aMustKeepRecordsMaxNumber);
        aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis( aMustKeepRecordsRecentMillis);

        aCommon_Recorder.pSetRecordingPolicy( aRecordingPolicyKeepRecent);


        aCommon_Recorder_SetRecordingPolicy = aCommon_Recorder.fRecordingPolicy();

        aCommon_Recorder_SetRecordingPolicy_MustKeepRecords = aCommon_Recorder_SetRecordingPolicy.fMustKeepRecords();

    }));









    beforeEach( function( done) {

        aCommon_Recorder.pClearKeptRecords();

        someKeptRecordsBefore = aCommon_Recorder.fKeptRecords();



        for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {

            var aPrefix = "0000" + aSubmittedRecordIdx;
            aPrefix = aPrefix.substr( aPrefix.length - 4);
            var aSubmittedRecord = aCommonSvce.fRecord( aMethodName + aPrefix, anEventKind + aPrefix, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
        }


        someKeptRecordsAfterFirstSubmission = aCommon_Recorder.fKeptRecords();



        var aDelayMillis = aDelayBeforeSecondSubmissionMillis + anExtraDelayForTestsMillis;

        setTimeout(
            function() {

                someKeptRecordsBeforeSecondSubmission = aCommon_Recorder.fKeptRecords();

                for( var aSubmittedRecordIdx=0; aSubmittedRecordIdx < aNumRecordsToSubmit; aSubmittedRecordIdx++) {

                    var aPrefix = "0000" + aSubmittedRecordIdx + "-2";
                    aPrefix = aPrefix.substr( aPrefix.length - 6);
                    var aSubmittedRecord = aCommonSvce.fRecord( aMethodName + aPrefix, anEventKind + aPrefix, aData + aPrefix, aReason + aPrefix, aDetail + aPrefix);
                }

                someKeptRecordsAfterSecondSubmission = aCommon_Recorder.fKeptRecords();



                aCommon_Recorder.pClearKeptRecords();

                someKeptRecordsAfterFinalClear = aCommon_Recorder.fKeptRecords();


                done();
            },
            aDelayMillis
        );


    });










    it("Has main structural features defined, and kept only most recently submitted records", function () {
        expect( aCommon_Identifier).not.toBeUndefined();
        expect( typeof aCommon_Identifier).toBe( "object");
        expect( aCommon_Identifier).not.toBeNull();
        expect( aCommon_Recorder).not.toBeUndefined();
        expect( typeof aCommon_Recorder).toBe( "object");
        expect( aCommon_Recorder).not.toBeNull();
        expect( aCommon_Recorder_SetRecordingPolicy).not.toBeUndefined();
        expect( typeof aCommon_Recorder_SetRecordingPolicy).toBe( "object");
        expect( aCommon_Recorder_SetRecordingPolicy).not.toBeNull();
        expect( aCommon_Recorder_SetRecordingPolicy).toBe( aRecordingPolicyKeepRecent);
        expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
        expect( aCommon_Recorder_SetRecordingPolicy_MustKeepRecords).toBe( true);
        expect( aCommonSvce.fRecord).not.toBeUndefined();
        expect( typeof aCommonSvce.fRecord).toBe( "function");
        expect( typeof aCommonSvce.fRecord).toBe( "function");

        expect( someKeptRecordsBefore).not.toBeUndefined();
        expect( typeof someKeptRecordsBefore).toBe( "object");
        expect( someKeptRecordsBefore).not.toBeNull();
        expect( someKeptRecordsBefore.length).toBe( 0);


        expect( someKeptRecordsAfterFirstSubmission).not.toBeUndefined();
        expect( typeof someKeptRecordsAfterFirstSubmission).toBe( "object");
        expect( someKeptRecordsAfterFirstSubmission).not.toBeNull();
        expect( someKeptRecordsAfterFirstSubmission.length).toBe( aNumRecordsToSubmit);


        expect( someKeptRecordsBeforeSecondSubmission).not.toBeUndefined();
        expect( typeof someKeptRecordsBeforeSecondSubmission).toBe( "object");
        expect( someKeptRecordsBeforeSecondSubmission).not.toBeNull();
        expect( someKeptRecordsBeforeSecondSubmission.length).toBe( aNumRecordsToSubmit);



        expect( someKeptRecordsAfterSecondSubmission).not.toBeUndefined();
        expect( typeof someKeptRecordsAfterSecondSubmission).toBe( "object");
        expect( someKeptRecordsAfterSecondSubmission).not.toBeNull();
        expect( someKeptRecordsAfterSecondSubmission.length).toBe( aNumRecordsToSubmit);



        expect( someKeptRecordsAfterFinalClear).not.toBeUndefined();
        expect( typeof someKeptRecordsAfterFinalClear).toBe( "object");
        expect( someKeptRecordsAfterFinalClear).not.toBeNull();
        expect( someKeptRecordsAfterFinalClear.length).toBe( 0);
    });





});



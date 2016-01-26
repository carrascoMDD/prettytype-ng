/*
 * common_type-record-test.js
 *
 * Created @author Antonio Carrasco Valero 201601262215
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





/// <reference path="src/common/common_type.js"/>
"use strict";




describe("prettytypes-ng CommonType record tests", function () {



    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes"));


    var aModule_CommonType  = null;
    var aCommon             = null;
    var aRecord             = null;
    var otherRecord         = null;

    var aCommon_title = "Common-Title-test";

    var aBeforeRecordMillis = new Date().getMilliseconds();

    var aMethodName = "common_type_record_test__theMethodName";
    var anEventKind = "common_type_record_test__theEventKind";
    var aData       = "common_type_record_test__theData";
    var aReason     = "common_type_record_test__theReason";
    var aDetail     = "common_type_record_test__theDetail";



    beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_) {

        aModule_CommonType = _CommonType_;

        // console.log( "typeof aModule_CommonType= " + typeof aModule_CommonType);
        // console.log( "anIdentifier aModule_CommonType = " + Object.keys( aModule_CommonType));

        aCommon = new aModule_CommonType.Common_Constructor( aCommon_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

        aCommon.LOGRECORDS = false;

        aRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);

        otherRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);


    }));





    it("Has fRecord() defined", function () {
        expect( aRecord).not.toBeUndefined();
    });

    it("Has fRecord() not null", function () {
        expect( aRecord).not.toBeNull();
    });

    it("Has fRecord() object", function () {
        expect( typeof aRecord).toBe( "object");
    });

    it("Has fRecord() _v_Timestamp number", function () {
        expect( typeof aRecord._v_Timestamp).toBe( "number");
    });

    it("Has fRecord() _v_Timestamp after", function () {
        expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
    });

    it("Has fRecord() _v_RecordId not null", function () {
        expect( aRecord._v_RecordId).not.toBeNull();
    });

    it("Has fRecord() _v_Instance self", function () {
        expect( aRecord._v_Instance).toBe( aCommon);
    });

    it("Has fRecord() _v_Step supplied", function () {
        expect( aRecord._v_Step).toBe( aMethodName);
    });

    it("Has fRecord() _v_EventKind supplied", function () {
        expect( aRecord._v_EventKind).toBe( anEventKind);
    });

    it("Has fRecord() _v_Data supplied", function () {
        expect( aRecord._v_Data).toBe( aData);
    });

    it("Has fRecord() _v_Reason supplied", function () {
        expect( aRecord._v_Reason).toBe( aReason);
    });

    it("Has fRecord() _v_Detail supplied", function () {
        expect( aRecord._v_Detail).toBe( aDetail);
    });




    it("Has other fRecord() defined", function () {
        expect( otherRecord).not.toBeUndefined();
    });

    it("Has other fRecord() not null", function () {
        expect( otherRecord).not.toBeNull();
    });

    it("Has other fRecord() _v_RecordId not null", function () {
        expect( otherRecord._v_RecordId).not.toBeNull();
    });

    it("Has other fRecord() _v_RecordId > first fRecord() _v_RecordId not null", function () {
        expect( otherRecord._v_RecordId > aRecord._v_RecordId).not.toBeNull();
    });



    it("Has pLogRecord defined", function () {
        expect( aCommon.pLogRecord).not.toBeUndefined();
    });

    it("Has pLogRecord typeof function", function () {
        expect( typeof aCommon.pLogRecord).toBe( "function");
    });




});




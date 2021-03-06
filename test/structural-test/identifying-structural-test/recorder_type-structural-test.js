/*
 * recorder_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241640
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






/// <reference path="src/identifying/recorder_ng_type.js"/>
"use strict";




describe("prettytypes-ng RecorderType structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce", "commonEventKinds", "identifyingTypes"));


    var aRecorder              = null;

    var aRecorder_title   = "Recorder-Title-test";


    beforeEach( inject(function( _RecorderType_, _IdentifierSvce_){

        // console.log( "typeof aModule_RecorderType= " + typeof _RecorderType_);


        aRecorder = new _RecorderType_.Recorder_Constructor( aRecorder_title, _IdentifierSvce_);
        // console.log( "typeof aRecorder= " + typeof aRecorder);
        // console.log( "aRecorder keys = " + Object.keys( aRecorder));

    }));





    it("Has module defined", function () {
        expect( aRecorder._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aRecorder._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName recorder_type", function () {
        expect( aRecorder._v_Module.ModuleName).toBe( "recorder_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aRecorder._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.recorder_type", function () {
        expect( aRecorder._v_Module.ModuleFullName).toBe( "identifying/recorder_type");
    });

    it("Has module Recorder_Prototype defined", function () {
        expect( aRecorder._v_Module.Recorder_Prototype).not.toBeUndefined();
    });

    it("Has module Recorder_Prototype not null", function () {
        expect( aRecorder._v_Module.Recorder_Prototype).not.toBeNull( null);
    });

    it("Has module Recorder_Constructor defined", function () {
        expect( aRecorder._v_Module.Recorder_Constructor).not.toBeUndefined();
    });

    it("Has module Recorder_Constructor not null", function () {
        expect( aRecorder._v_Module.Recorder_Constructor).not.toBeNull( null);
    });

    it("Has module Recorder_SuperPrototypeConstructor defined", function () {
        expect( aRecorder._v_Module.Recorder_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Recorder_SuperPrototypeConstructor not null", function () {
        expect( aRecorder._v_Module.Recorder_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aRecorder._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Recorder_Prototype", function () {
        expect( aRecorder._v_Prototype).toBe( aRecorder._v_Module.Recorder_Prototype);
    });

    it("Has _v_Prototype_Recorder defined", function () {
        expect( aRecorder._v_Prototype_Recorder).not.toBeUndefined();
    });

    it("Has _v_Prototype_Recorder module Recorder_Prototype", function () {
        expect( aRecorder._v_Prototype).toBe( aRecorder._v_Module.Recorder_Prototype);
    });



    it("Has _v_Type Recorder", function () {
        expect( aRecorder._v_Type).toBe( "Recorder");
    });

    it("Has title Recorder_DefaultName", function () {
        expect( aRecorder._v_Title).toBe( aRecorder_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aRecorder.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aRecorder.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aRecorder.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aRecorder.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aRecorder.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aRecorder.fIdentifyingJSON().type).toBe( aRecorder._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aRecorder.fIdentifyingJSON().id).toBe( aRecorder._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aRecorder.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aRecorder.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aRecorder.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecorder.fIdentifyingString()).toBe( JSON.stringify( aRecorder.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aRecorder.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON().type).toBe( aRecorder._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON().id).toBe( aRecorder._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aRecorder.fIdentifyingWithTitleJSON().title).toBe( aRecorder._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aRecorder.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aRecorder.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aRecorder.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecorder.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecorder.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aRecorder.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aRecorder.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aRecorder.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aRecorder.fToResultJSON().type).toBe( aRecorder._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aRecorder.fToResultJSON().id).toBe( aRecorder._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aRecorder.fToResultJSON().title).toBe( aRecorder._v_Title);
    });







    it("Has fCreateAndRegisterRecord defined", function () {
        expect( aRecorder.fCreateAndRegisterRecord).not.toBeUndefined();
    });

    it("Has fCreateAndRegisterRecord typeof function", function () {
        expect( typeof aRecorder.fCreateAndRegisterRecord).toBe( "function");
    });






    it("Has fEventsToResultJSON defined", function () {
        expect( aRecorder.fEventsToResultJSON).not.toBeUndefined();
    });

    it("Has fEventsToResultJSON typeof function", function () {
        expect( typeof aRecorder.fEventsToResultJSON).toBe( "function");
    });





    it("Has pLogRecord defined", function () {
        expect( aRecorder.pLogRecord).not.toBeUndefined();
    });

    it("Has pLogRecord typeof function", function () {
        expect( typeof aRecorder.pLogRecord).toBe( "function");
    });


    it("Has pKeepRecord defined", function () {
        expect( aRecorder.pKeepRecord).not.toBeUndefined();
    });

    it("Has pKeepRecord typeof function", function () {
        expect( typeof aRecorder.pKeepRecord).toBe( "function");
    });





    it("Has fKeptRecords defined", function () {
        expect( aRecorder.fKeptRecords).not.toBeUndefined();
    });

    it("Has fKeptRecords typeof function", function () {
        expect( typeof aRecorder.fKeptRecords).toBe( "function");
    });





    it("Has pClearKeptRecords defined", function () {
        expect( aRecorder.pClearKeptRecords).not.toBeUndefined();
    });

    it("Has pClearKeptRecords typeof function", function () {
        expect( typeof aRecorder.pClearKeptRecords).toBe( "function");
    });




    it("Has pDiscardRecordsToMaxNumber defined", function () {
        expect( aRecorder.pDiscardRecordsToMaxNumber).not.toBeUndefined();
    });

    it("Has pDiscardRecordsToMaxNumber typeof function", function () {
        expect( typeof aRecorder.pDiscardRecordsToMaxNumber).toBe( "function");
    });



    it("Has pDiscardRecordsOlderThan defined", function () {
        expect( aRecorder.pDiscardRecordsOlderThan).not.toBeUndefined();
    });

    it("Has pDiscardRecordsOlderThan typeof function", function () {
        expect( typeof aRecorder.pDiscardRecordsOlderThan).toBe( "function");
    });







    it("Has pSetRecordPointer defined", function () {
        expect( aRecorder.pSetRecordPointer).not.toBeUndefined();
    });

    it("Has pSetRecordPointer typeof function", function () {
        expect( typeof aRecorder.pSetRecordPointer).toBe( "function");
    });




    it("Has pClearRecordPointer defined", function () {
        expect( aRecorder.pClearRecordPointer).not.toBeUndefined();
    });

    it("Has pClearRecordPointer typeof function", function () {
        expect( typeof aRecorder.pClearRecordPointer).toBe( "function");
    });








});

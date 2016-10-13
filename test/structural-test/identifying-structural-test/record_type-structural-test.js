/*
 * record_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241630
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






/// <reference path="src/identifying/record_type.js"/>
"use strict";




describe("prettytypes-ng Record structural tests", function () {



    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes"));

    var aRecord               = null;

    var aRecord_title = "Record-Title-test";

    var aRecorder_Dummy   = {};
    var aRecordId_Dummy   = "Record-test-id";
    var anInstance_Dummy  = {};
    var aStep_Dummy       = "Record-test-step";
    var anEventKind_Dummy = "Record-test-step";
    var aData_Dummy       = {};
    var aReason_Dummy     = {};
    var aDetail_Dummy     = {};




    beforeEach( inject(function( _RecordType_){

        // console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);

        aRecord = new _RecordType_.Record_Constructor(
            aRecorder_Dummy,
            aRecordId_Dummy,
            anInstance_Dummy,
            aStep_Dummy,
            anEventKind_Dummy,
            aData_Dummy,
            aReason_Dummy,
            aDetail_Dummy
        );
        // console.log( "typeof aRecord= " + typeof aRecord);
        // console.log( "aRecord keys = " + Object.keys( aRecord));

    }));






    it("Record structure", function () {
        expect( aRecord._v_Module).not.toBeUndefined();
        expect( aRecord._v_Module).not.toBeNull( null);
        expect( aRecord._v_Module.ModuleName).toBe( "record_type");
        expect( aRecord._v_Module.ModulePackages).toBe( "identifying");
        expect( aRecord._v_Module.ModuleFullName).toBe( "identifying/record_type");
        expect( aRecord._v_Module.Record_Prototype).not.toBeUndefined();
        expect( aRecord._v_Module.Record_Prototype).not.toBeNull( null);
        expect( aRecord._v_Module.Record_Constructor).not.toBeUndefined();
        expect( aRecord._v_Module.Record_Constructor).not.toBeNull( null);
        expect( aRecord._v_Module.Record_SuperPrototypeConstructor).not.toBeUndefined();
        expect( aRecord._v_Module.Record_SuperPrototypeConstructor).not.toBeNull( null);
        expect( aRecord._v_Prototype).not.toBeUndefined();
        expect( aRecord._v_Prototype).toBe( aRecord._v_Module.Record_Prototype);
        expect( aRecord._v_Prototype_Record).not.toBeUndefined();
        expect( aRecord._v_Prototype).toBe( aRecord._v_Module.Record_Prototype);
        expect( aRecord._v_Type).toBe( "Record");
        expect( aRecord._v_Recorder).toBe( aRecorder_Dummy);
        expect( aRecord._v_RecordId).toBe( aRecordId_Dummy);
        expect( aRecord._v_Instance).toBe( anInstance_Dummy);
        expect( aRecord._v_Step).toBe( aStep_Dummy);
        expect( aRecord._v_EventKind).toBe( anEventKind_Dummy);
        expect( aRecord._v_Data).toBe( aData_Dummy);
        expect( aRecord._v_Reason).toBe( aReason_Dummy);
        expect( aRecord._v_Detail).toBe( aDetail_Dummy);
        expect( aRecord.fFullTypeNameString).not.toBeUndefined();
        expect( typeof aRecord.fFullTypeNameString).toBe( "function");
        expect( aRecord.fIdentifyingJSON).not.toBeUndefined();
        expect( typeof aRecord.fIdentifyingJSON).toBe( "function");
        expect( aRecord.fIdentifyingJSON()).not.toBeNull();
        expect( aRecord.fIdentifyingJSON().id).toBe( aRecord._v_Id);
        expect( aRecord.fIdentifyingString).not.toBeUndefined();
        expect( typeof aRecord.fIdentifyingString).toBe( "function");
        expect( aRecord.fIdentifyingString()).not.toBeNull();
        expect( aRecord.fIdentifyingString()).toBe( JSON.stringify( aRecord.fIdentifyingJSON()));
        expect( aRecord.fIdentifyingWithTitleJSON).not.toBeUndefined();
        expect( typeof aRecord.fIdentifyingWithTitleJSON).toBe( "function");
        expect( aRecord.fIdentifyingWithTitleJSON()).not.toBeNull();
        expect( aRecord.fIdentifyingWithTitleJSON().id).toBe( aRecord._v_Id);
        expect( aRecord.fIdentifyingWithTitleString).not.toBeUndefined();
        expect( typeof aRecord.fIdentifyingWithTitleString).toBe( "function");
        expect( aRecord.fIdentifyingWithTitleString()).not.toBeNull();
        expect( aRecord.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecord.fIdentifyingWithTitleJSON()));
        expect( aRecord.fToResultJSON).not.toBeUndefined();
        expect( typeof aRecord.fToResultJSON).toBe( "function");
        expect( aRecord.fToResultJSON()).not.toBeNull();
        expect( aRecord.fToResultJSON().id).toBe( aRecord._v_Id);
        expect( aRecord.fConvertReasonToJSON).not.toBeUndefined();
        expect( typeof aRecord.fConvertReasonToJSON).toBe( "function");
        expect( aRecord.fAsReasonChain).not.toBeUndefined();
        expect( typeof aRecord.fAsReasonChain).toBe( "function");
        expect( aRecord.fAsJSONable).not.toBeUndefined();
        expect( typeof aRecord.fAsJSONable).toBe( "function");
    });



});





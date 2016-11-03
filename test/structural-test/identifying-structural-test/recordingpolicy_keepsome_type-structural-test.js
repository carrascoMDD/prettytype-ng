/*
 * recordingpolicy_keepsome_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610181748
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






/// <reference path="src/identifying/recordingpolicy_keepsome_ng_type.js"/>
"use strict";




describe("prettytypes-ng RecordingPolicyKeepSome structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce", "commonEventKinds", "identifyingTypes"));


    var aRecordingPolicyKeepSome              = null;

    var aRecordingPolicyKeepSome_title   = "RecordingPolicy-Title-test";


    beforeEach( inject(function( _RecordingPolicyKeepSomeType_, _IdentifierSvce_, _RecorderSvce_){

        // console.log( "typeof aModule_RecorderType= " + typeof _RecorderType_);


        aRecordingPolicyKeepSome = new _RecordingPolicyKeepSomeType_.RecordingPolicyKeepSome_Constructor( aRecordingPolicyKeepSome_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aRecordingPolicyKeepSome= " + typeof aRecordingPolicyKeepSome);
        // console.log( "aRecordingPolicyKeepSome keys = " + Object.keys( aRecordingPolicyKeepSome));

    }));





    it("Has module defined", function () {
        expect( aRecordingPolicyKeepSome._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aRecordingPolicyKeepSome._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName recordingpolicy_keepsome_type", function () {
        expect( aRecordingPolicyKeepSome._v_Module.ModuleName).toBe( "recordingpolicy_keepsome_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aRecordingPolicyKeepSome._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.recordingpolicy_keepsome_type", function () {
        expect( aRecordingPolicyKeepSome._v_Module.ModuleFullName).toBe( "identifying/recordingpolicy_keepsome_type");
    });

    it("Has module RecordingPolicyKeepSome_Prototype defined", function () {
        expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepSome_Prototype not null", function () {
        expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype).not.toBeNull( null);
    });

    it("Has module RecordingPolicyKeepSome_Constructor defined", function () {
        expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Constructor).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepSome_Constructor not null", function () {
        expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Constructor).not.toBeNull( null);
    });

    it("Has module RecordingPolicyKeepSome_SuperPrototypeConstructor defined", function () {
        expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepSome_SuperPrototypeConstructor not null", function () {
        expect( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aRecordingPolicyKeepSome._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module RecordingPolicyKeepSome_Prototype", function () {
        expect( aRecordingPolicyKeepSome._v_Prototype).toBe( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype);
    });

    it("Has _v_Prototype_RecordingPolicy defined", function () {
        expect( aRecordingPolicyKeepSome._v_Prototype_RecordingPolicy).not.toBeUndefined();
    });

    it("Has _v_Prototype_RecordingPolicy module RecordingPolicyKeepSome_Prototype", function () {
        expect( aRecordingPolicyKeepSome._v_Prototype).toBe( aRecordingPolicyKeepSome._v_Module.RecordingPolicyKeepSome_Prototype);
    });



    it("Has _v_Type RecordingPolicy", function () {
        expect( aRecordingPolicyKeepSome._v_Type).toBe( "RecordingPolicyKeepSome");
    });

    it("Has title RecordingPolicyKeepSome_DefaultName", function () {
        expect( aRecordingPolicyKeepSome._v_Title).toBe( aRecordingPolicyKeepSome_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aRecordingPolicyKeepSome.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingJSON().type).toBe( aRecordingPolicyKeepSome._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingJSON().id).toBe( aRecordingPolicyKeepSome._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingString()).toBe( JSON.stringify( aRecordingPolicyKeepSome.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON().type).toBe( aRecordingPolicyKeepSome._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON().id).toBe( aRecordingPolicyKeepSome._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON().title).toBe( aRecordingPolicyKeepSome._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecordingPolicyKeepSome.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecordingPolicyKeepSome.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aRecordingPolicyKeepSome.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aRecordingPolicyKeepSome.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepSome.fToResultJSON().type).toBe( aRecordingPolicyKeepSome._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepSome.fToResultJSON().id).toBe( aRecordingPolicyKeepSome._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aRecordingPolicyKeepSome.fToResultJSON().title).toBe( aRecordingPolicyKeepSome._v_Title);
    });








    it("Has pPruneRecords defined", function () {
        expect( aRecordingPolicyKeepSome.pPruneRecords).not.toBeUndefined();
    });

    it("Has pPruneRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.pPruneRecords).toBe( "function");
    });




    it("Has pRelease defined", function () {
        expect( aRecordingPolicyKeepSome.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.pRelease).toBe( "function");
    });





    it("Has fRecorder defined", function () {
        expect( aRecordingPolicyKeepSome.fRecorder).not.toBeUndefined();
    });

    it("Has fRecorder typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fRecorder).toBe( "function");
    });


    it("Has pSetRecorder defined", function () {
        expect( aRecordingPolicyKeepSome.pSetRecorder).not.toBeUndefined();
    });

    it("Has pSetRecorder typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.pSetRecorder).toBe( "function");
    });





    it("Has pSetMustKeepRecords defined", function () {
        expect( aRecordingPolicyKeepSome.pSetMustKeepRecords).not.toBeUndefined();
    });

    it("Has pSetMustKeepRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.pSetMustKeepRecords).toBe( "function");
    });



    it("Has fMustKeepRecords defined", function () {
        expect( aRecordingPolicyKeepSome.fMustKeepRecords).not.toBeUndefined();
    });

    it("Has fMustKeepRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fMustKeepRecords).toBe( "function");
    });





    it("Has pSetMustKeepRecordsMaxNumber defined", function () {
        expect( aRecordingPolicyKeepSome.pSetMustKeepRecordsMaxNumber).not.toBeUndefined();
    });

    it("Has pSetMustKeepRecordsMaxNumber typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.pSetMustKeepRecordsMaxNumber).toBe( "function");
    });




    it("Has fMustKeepRecordsMaxNumber defined", function () {
        expect( aRecordingPolicyKeepSome.fMustKeepRecordsMaxNumber).not.toBeUndefined();
    });

    it("Has fMustKeepRecordsMaxNumber typeof function", function () {
        expect( typeof aRecordingPolicyKeepSome.fMustKeepRecordsMaxNumber).toBe( "function");
    });





});

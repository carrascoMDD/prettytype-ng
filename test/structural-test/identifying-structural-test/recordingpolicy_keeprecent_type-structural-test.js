/*
 * recordingpolicy_keeprecent_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610181752
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






/// <reference path="src/identifying/recordingpolicy_keeprecent_ng_type.js"/>
"use strict";




describe("prettytypes-ng RecordingPolicyKeepRecent structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce", "commonEventKinds", "identifyingTypes"));


    var aRecordingPolicyKeepRecent              = null;

    var aRecordingPolicyKeepRecent_title   = "RecordingPolicy-Title-test";


    beforeEach( inject(function( _RecordingPolicyKeepRecentType_, _IdentifierSvce_, _RecorderSvce_){

        // console.log( "typeof aModule_RecorderType= " + typeof _RecorderType_);


        aRecordingPolicyKeepRecent = new _RecordingPolicyKeepRecentType_.RecordingPolicyKeepRecent_Constructor( aRecordingPolicyKeepRecent_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aRecordingPolicyKeepRecent= " + typeof aRecordingPolicyKeepRecent);
        // console.log( "aRecordingPolicyKeepRecent keys = " + Object.keys( aRecordingPolicyKeepRecent));

    }));





    it("Has module defined", function () {
        expect( aRecordingPolicyKeepRecent._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aRecordingPolicyKeepRecent._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName recordingpolicy_keeprecent_type", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.ModuleName).toBe( "recordingpolicy_keeprecent_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.recordingpolicy_keeprecent_type", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.ModuleFullName).toBe( "identifying/recordingpolicy_keeprecent_type");
    });

    it("Has module RecordingPolicyKeepRecent_Prototype defined", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_Prototype).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepRecent_Prototype not null", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_Prototype).not.toBeNull( null);
    });

    it("Has module RecordingPolicyKeepRecent_Constructor defined", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_Constructor).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepRecent_Constructor not null", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_Constructor).not.toBeNull( null);
    });

    it("Has module RecordingPolicyKeepRecent_SuperPrototypeConstructor defined", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module RecordingPolicyKeepRecent_SuperPrototypeConstructor not null", function () {
        expect( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aRecordingPolicyKeepRecent._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module RecordingPolicyKeepRecent_Prototype", function () {
        expect( aRecordingPolicyKeepRecent._v_Prototype).toBe( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_Prototype);
    });

    it("Has _v_Prototype_RecordingPolicy defined", function () {
        expect( aRecordingPolicyKeepRecent._v_Prototype_RecordingPolicy).not.toBeUndefined();
    });

    it("Has _v_Prototype_RecordingPolicy module RecordingPolicyKeepRecent_Prototype", function () {
        expect( aRecordingPolicyKeepRecent._v_Prototype).toBe( aRecordingPolicyKeepRecent._v_Module.RecordingPolicyKeepRecent_Prototype);
    });



    it("Has _v_Type RecordingPolicy", function () {
        expect( aRecordingPolicyKeepRecent._v_Type).toBe( "RecordingPolicyKeepRecent");
    });

    it("Has title RecordingPolicyKeepRecent_DefaultName", function () {
        expect( aRecordingPolicyKeepRecent._v_Title).toBe( aRecordingPolicyKeepRecent_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aRecordingPolicyKeepRecent.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingJSON().type).toBe( aRecordingPolicyKeepRecent._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingJSON().id).toBe( aRecordingPolicyKeepRecent._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingString()).toBe( JSON.stringify( aRecordingPolicyKeepRecent.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON().type).toBe( aRecordingPolicyKeepRecent._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON().id).toBe( aRecordingPolicyKeepRecent._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON().title).toBe( aRecordingPolicyKeepRecent._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aRecordingPolicyKeepRecent.fIdentifyingWithTitleString()).toBe( JSON.stringify( aRecordingPolicyKeepRecent.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aRecordingPolicyKeepRecent.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aRecordingPolicyKeepRecent.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aRecordingPolicyKeepRecent.fToResultJSON().type).toBe( aRecordingPolicyKeepRecent._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aRecordingPolicyKeepRecent.fToResultJSON().id).toBe( aRecordingPolicyKeepRecent._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aRecordingPolicyKeepRecent.fToResultJSON().title).toBe( aRecordingPolicyKeepRecent._v_Title);
    });









    it("Has pPruneRecords defined", function () {
        expect( aRecordingPolicyKeepRecent.pPruneRecords).not.toBeUndefined();
    });

    it("Has pPruneRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.pPruneRecords).toBe( "function");
    });




    it("Has pRelease defined", function () {
        expect( aRecordingPolicyKeepRecent.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.pRelease).toBe( "function");
    });





    it("Has fRecorder defined", function () {
        expect( aRecordingPolicyKeepRecent.fRecorder).not.toBeUndefined();
    });

    it("Has fRecorder typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fRecorder).toBe( "function");
    });


    it("Has pSetRecorder defined", function () {
        expect( aRecordingPolicyKeepRecent.pSetRecorder).not.toBeUndefined();
    });

    it("Has pSetRecorder typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.pSetRecorder).toBe( "function");
    });





    it("Has pSetMustKeepRecords defined", function () {
        expect( aRecordingPolicyKeepRecent.pSetMustKeepRecords).not.toBeUndefined();
    });

    it("Has pSetMustKeepRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.pSetMustKeepRecords).toBe( "function");
    });



    it("Has fMustKeepRecords defined", function () {
        expect( aRecordingPolicyKeepRecent.fMustKeepRecords).not.toBeUndefined();
    });

    it("Has fMustKeepRecords typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fMustKeepRecords).toBe( "function");
    });





    it("Has pSetMustKeepRecordsMaxNumber defined", function () {
        expect( aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber).not.toBeUndefined();
    });

    it("Has pSetMustKeepRecordsMaxNumber typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.pSetMustKeepRecordsMaxNumber).toBe( "function");
    });




    it("Has fMustKeepRecordsMaxNumber defined", function () {
        expect( aRecordingPolicyKeepRecent.fMustKeepRecordsMaxNumber).not.toBeUndefined();
    });

    it("Has fMustKeepRecordsMaxNumber typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fMustKeepRecordsMaxNumber).toBe( "function");
    });





    it("Has pSetMustKeepRecordsRecentMillis defined", function () {
        expect( aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis).not.toBeUndefined();
    });

    it("Has pSetMustKeepRecordsRecentMillis typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.pSetMustKeepRecordsRecentMillis).toBe( "function");
    });





    it("Has fMustKeepRecordsRecentMillis defined", function () {
        expect( aRecordingPolicyKeepRecent.fMustKeepRecordsRecentMillis).not.toBeUndefined();
    });

    it("Has fMustKeepRecordsRecentMillis typeof function", function () {
        expect( typeof aRecordingPolicyKeepRecent.fMustKeepRecordsRecentMillis).toBe( "function");
    });

});

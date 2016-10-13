/*
 * dumpingpolicy_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131806
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






/// <reference path="src/identifying/dumpingpolicy_ng_type.js"/>
"use strict";




describe("prettytypes-ng DumpingPolicy structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce", "commonEventKinds", "identifyingTypes"));


    var aDumpingPolicy              = null;

    var aDumpingPolicy_title   = "DumpingPolicy-Title-test";


    beforeEach( inject(function( _DumpingPolicyType_, _IdentifierSvce_, _RecorderSvce_){

        // console.log( "typeof aModule_RecorderType= " + typeof _RecorderType_);


        aDumpingPolicy = new _DumpingPolicyType_.DumpingPolicy_Constructor( aDumpingPolicy_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aDumpingPolicy= " + typeof aDumpingPolicy);
        // console.log( "aDumpingPolicy keys = " + Object.keys( aDumpingPolicy));

    }));





    it("Has module defined", function () {
        expect( aDumpingPolicy._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aDumpingPolicy._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName dumpingpolicy_type", function () {
        expect( aDumpingPolicy._v_Module.ModuleName).toBe( "dumpingpolicy_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aDumpingPolicy._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.dumpingpolicy_type", function () {
        expect( aDumpingPolicy._v_Module.ModuleFullName).toBe( "identifying/dumpingpolicy_type");
    });

    it("Has module DumpingPolicy_Prototype defined", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Prototype).not.toBeUndefined();
    });

    it("Has module DumpingPolicy_Prototype not null", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Prototype).not.toBeNull( null);
    });

    it("Has module DumpingPolicy_Constructor defined", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Constructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicy_Constructor not null", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_Constructor).not.toBeNull( null);
    });

    it("Has module DumpingPolicy_SuperPrototypeConstructor defined", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicy_SuperPrototypeConstructor not null", function () {
        expect( aDumpingPolicy._v_Module.DumpingPolicy_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aDumpingPolicy._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module DumpingPolicy_Prototype", function () {
        expect( aDumpingPolicy._v_Prototype).toBe( aDumpingPolicy._v_Module.DumpingPolicy_Prototype);
    });

    it("Has _v_Prototype_DumpingPolicy defined", function () {
        expect( aDumpingPolicy._v_Prototype_DumpingPolicy).not.toBeUndefined();
    });

    it("Has _v_Prototype_DumpingPolicy module DumpingPolicy_Prototype", function () {
        expect( aDumpingPolicy._v_Prototype).toBe( aDumpingPolicy._v_Module.DumpingPolicy_Prototype);
    });



    it("Has _v_Type DumpingPolicy", function () {
        expect( aDumpingPolicy._v_Type).toBe( "DumpingPolicy");
    });

    it("Has title DumpingPolicy_DefaultName", function () {
        expect( aDumpingPolicy._v_Title).toBe( aDumpingPolicy_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aDumpingPolicy.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aDumpingPolicy.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aDumpingPolicy.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aDumpingPolicy.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aDumpingPolicy.fIdentifyingJSON().type).toBe( aDumpingPolicy._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aDumpingPolicy.fIdentifyingJSON().id).toBe( aDumpingPolicy._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aDumpingPolicy.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aDumpingPolicy.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicy.fIdentifyingString()).toBe( JSON.stringify( aDumpingPolicy.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON().type).toBe( aDumpingPolicy._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON().id).toBe( aDumpingPolicy._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleJSON().title).toBe( aDumpingPolicy._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aDumpingPolicy.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicy.fIdentifyingWithTitleString()).toBe( JSON.stringify( aDumpingPolicy.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aDumpingPolicy.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aDumpingPolicy.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aDumpingPolicy.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aDumpingPolicy.fToResultJSON().type).toBe( aDumpingPolicy._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aDumpingPolicy.fToResultJSON().id).toBe( aDumpingPolicy._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aDumpingPolicy.fToResultJSON().title).toBe( aDumpingPolicy._v_Title);
    });






    it("Has fConsoleService defined", function () {
        expect( aDumpingPolicy.fConsoleService).not.toBeUndefined();
    });

    it("Has fConsoleService typeof function", function () {
        expect( typeof aDumpingPolicy.fConsoleService).toBe( "function");
    });




    it("Has pDumpRecord defined", function () {
        expect( aDumpingPolicy.pDumpRecord).not.toBeUndefined();
    });

    it("Has pDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicy.pDumpRecord).toBe( "function");
    });




    it("Has pSetMayDumpRecords defined", function () {
        expect( aDumpingPolicy.pSetMayDumpRecords).not.toBeUndefined();
    });

    it("Has pSetMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicy.pSetMayDumpRecords).toBe( "function");
    });



    it("Has fMayDumpRecords defined", function () {
        expect( aDumpingPolicy.fMayDumpRecords).not.toBeUndefined();
    });

    it("Has fMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicy.fMayDumpRecords).toBe( "function");
    });



    it("Has fMustDumpRecord defined", function () {
        expect( aDumpingPolicy.fMustDumpRecord).not.toBeUndefined();
    });

    it("Has fMustDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicy.fMustDumpRecord).toBe( "function");
    });





    it("Has pRelease defined", function () {
        expect( aDumpingPolicy.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aDumpingPolicy.pRelease).toBe( "function");
    });



});

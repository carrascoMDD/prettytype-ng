/*
 * dumpingpolicy_filterkinds_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131808
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






/// <reference path="src/identifying/dumpingpolicy_filterkinds_ng_type.js"/>
"use strict";




describe("prettytypes-ng DumpingPolicyFilterKinds structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce", "commonEventKinds", "identifyingTypes"));


    var aDumpingPolicyFilterKinds              = null;

    var aDumpingPolicyFilterKinds_title   = "DumpingPolicyFilterKinds-Title-test";


    beforeEach( inject(function( _DumpingPolicyFilterKindsType_, _IdentifierSvce_, _RecorderSvce_){

        // console.log( "typeof aModule_RecorderType= " + typeof _RecorderType_);


        aDumpingPolicyFilterKinds = new _DumpingPolicyFilterKindsType_.DumpingPolicyFilterKinds_Constructor( aDumpingPolicyFilterKinds_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aDumpingPolicyFilterKinds= " + typeof aDumpingPolicyFilterKinds);
        // console.log( "aDumpingPolicyFilterKinds keys = " + Object.keys( aDumpingPolicyFilterKinds));

    }));





    it("Has module defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName dumpingpolicy_filterkinds_type", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.ModuleName).toBe( "dumpingpolicy_filterkinds_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.dumpingpolicy_filterkinds_type", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.ModuleFullName).toBe( "identifying/dumpingpolicy_filterkinds_type");
    });

    it("Has module DumpingPolicyFilterKinds_Prototype defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype).not.toBeUndefined();
    });

    it("Has module DumpingPolicyFilterKinds_Prototype not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype).not.toBeNull( null);
    });

    it("Has module DumpingPolicyFilterKinds_Constructor defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Constructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicyFilterKinds_Constructor not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Constructor).not.toBeNull( null);
    });

    it("Has module DumpingPolicyFilterKinds_SuperPrototypeConstructor defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicyFilterKinds_SuperPrototypeConstructor not null", function () {
        expect( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module DumpingPolicyFilterKinds_Prototype", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype).toBe( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype);
    });

    it("Has _v_Prototype_DumpingPolicyFilterKinds defined", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype_DumpingPolicyFilterKinds).not.toBeUndefined();
    });

    it("Has _v_Prototype_DumpingPolicyFilterKinds module DumpingPolicyFilterKinds_Prototype", function () {
        expect( aDumpingPolicyFilterKinds._v_Prototype).toBe( aDumpingPolicyFilterKinds._v_Module.DumpingPolicyFilterKinds_Prototype);
    });



    it("Has _v_Type DumpingPolicyFilterKinds", function () {
        expect( aDumpingPolicyFilterKinds._v_Type).toBe( "DumpingPolicyFilterKinds");
    });

    it("Has title DumpingPolicyFilterKinds_DefaultName", function () {
        expect( aDumpingPolicyFilterKinds._v_Title).toBe( aDumpingPolicyFilterKinds_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aDumpingPolicyFilterKinds.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingString()).toBe( JSON.stringify( aDumpingPolicyFilterKinds.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON().title).toBe( aDumpingPolicyFilterKinds._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicyFilterKinds.fIdentifyingWithTitleString()).toBe( JSON.stringify( aDumpingPolicyFilterKinds.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON().type).toBe( aDumpingPolicyFilterKinds._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON().id).toBe( aDumpingPolicyFilterKinds._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aDumpingPolicyFilterKinds.fToResultJSON().title).toBe( aDumpingPolicyFilterKinds._v_Title);
    });






    it("Has fConsoleService defined", function () {
        expect( aDumpingPolicyFilterKinds.fConsoleService).not.toBeUndefined();
    });

    it("Has fConsoleService typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fConsoleService).toBe( "function");
    });




    it("Has pDumpRecord defined", function () {
        expect( aDumpingPolicyFilterKinds.pDumpRecord).not.toBeUndefined();
    });

    it("Has pDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.pDumpRecord).toBe( "function");
    });




    it("Has pSetMayDumpRecords defined", function () {
        expect( aDumpingPolicyFilterKinds.pSetMayDumpRecords).not.toBeUndefined();
    });

    it("Has pSetMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.pSetMayDumpRecords).toBe( "function");
    });



    it("Has fMayDumpRecords defined", function () {
        expect( aDumpingPolicyFilterKinds.fMayDumpRecords).not.toBeUndefined();
    });

    it("Has fMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMayDumpRecords).toBe( "function");
    });



    it("Has fMustDumpRecord defined", function () {
        expect( aDumpingPolicyFilterKinds.fMustDumpRecord).not.toBeUndefined();
    });

    it("Has fMustDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMustDumpRecord).toBe( "function");
    });





    it("Has fEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fEventKindsNotForConsole).toBe( "function");
    });



    it("Has fSetEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fSetEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole).toBe( "function");
    });

    it("Has fFewerEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fFewerEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole).toBe( "function");
    });

    it("Has fMoreEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fMoreEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole).toBe( "function");
    });



    it("Has fSetEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fSetEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fSetEventKindsNotForConsole_inPrototype).toBe( "function");
    });

    it("Has fFewerEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fFewerEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fFewerEventKindsNotForConsole_inPrototype).toBe( "function");
    });

    it("Has fMoreEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fMoreEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.fMoreEventKindsNotForConsole_inPrototype).toBe( "function");
    });





    it("Has pRelease defined", function () {
        expect( aDumpingPolicyFilterKinds.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aDumpingPolicyFilterKinds.pRelease).toBe( "function");
    });



});

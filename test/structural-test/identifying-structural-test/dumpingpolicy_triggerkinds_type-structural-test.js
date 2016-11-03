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




describe("prettytypes-ng DumpingPolicyTriggerKinds structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce", "commonEventKinds", "identifyingTypes"));


    var aDumpingPolicyTriggerKinds              = null;

    var aDumpingPolicyTriggerKinds_title   = "DumpingPolicyTriggerKinds-Title-test";


    beforeEach( inject(function( _DumpingPolicyTriggerKindsType_, _IdentifierSvce_, _RecorderSvce_){

        // console.log( "typeof aModule_RecorderType= " + typeof _RecorderType_);


        aDumpingPolicyTriggerKinds = new _DumpingPolicyTriggerKindsType_.DumpingPolicyTriggerKinds_Constructor( aDumpingPolicyTriggerKinds_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aDumpingPolicyTriggerKinds= " + typeof aDumpingPolicyTriggerKinds);
        // console.log( "aDumpingPolicyTriggerKinds keys = " + Object.keys( aDumpingPolicyTriggerKinds));

    }));





    it("Has module defined", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName dumpingpolicy_filterkinds_type", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.ModuleName).toBe( "dumpingpolicy_triggerkinds_type");
    });

    it("Has module ModulePackages identifying", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.ModulePackages).toBe( "identifying");
    });

    it("Has module ModuleFullName identifying.dumpingpolicy_filterkinds_type", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.ModuleFullName).toBe( "identifying/dumpingpolicy_triggerkinds_type");
    });

    it("Has module DumpingPolicyTriggerKinds_Prototype defined", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_Prototype).not.toBeUndefined();
    });

    it("Has module DumpingPolicyTriggerKinds_Prototype not null", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_Prototype).not.toBeNull( null);
    });

    it("Has module DumpingPolicyTriggerKinds_Constructor defined", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_Constructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicyTriggerKinds_Constructor not null", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_Constructor).not.toBeNull( null);
    });

    it("Has module DumpingPolicyTriggerKinds_SuperPrototypeConstructor defined", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module DumpingPolicyTriggerKinds_SuperPrototypeConstructor not null", function () {
        expect( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aDumpingPolicyTriggerKinds._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module DumpingPolicyTriggerKinds_Prototype", function () {
        expect( aDumpingPolicyTriggerKinds._v_Prototype).toBe( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_Prototype);
    });

    it("Has _v_Prototype_DumpingPolicyTriggerKinds defined", function () {
        expect( aDumpingPolicyTriggerKinds._v_Prototype_DumpingPolicyTriggerKinds).not.toBeUndefined();
    });

    it("Has _v_Prototype_DumpingPolicyTriggerKinds module DumpingPolicyTriggerKinds_Prototype", function () {
        expect( aDumpingPolicyTriggerKinds._v_Prototype).toBe( aDumpingPolicyTriggerKinds._v_Module.DumpingPolicyTriggerKinds_Prototype);
    });



    it("Has _v_Type DumpingPolicyTriggerKinds", function () {
        expect( aDumpingPolicyTriggerKinds._v_Type).toBe( "DumpingPolicyTriggerKinds");
    });

    it("Has title DumpingPolicyTriggerKinds_DefaultName", function () {
        expect( aDumpingPolicyTriggerKinds._v_Title).toBe( aDumpingPolicyTriggerKinds_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aDumpingPolicyTriggerKinds.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fFullTypeNameString).toBe( "function");
    });




    it("Has fIdentifyingJSON defined", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingJSON().type).toBe( aDumpingPolicyTriggerKinds._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingJSON().id).toBe( aDumpingPolicyTriggerKinds._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingString()).toBe( JSON.stringify( aDumpingPolicyTriggerKinds.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON().type).toBe( aDumpingPolicyTriggerKinds._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON().id).toBe( aDumpingPolicyTriggerKinds._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON().title).toBe( aDumpingPolicyTriggerKinds._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleString()).toBe( JSON.stringify( aDumpingPolicyTriggerKinds.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aDumpingPolicyTriggerKinds.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aDumpingPolicyTriggerKinds.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aDumpingPolicyTriggerKinds.fToResultJSON().type).toBe( aDumpingPolicyTriggerKinds._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aDumpingPolicyTriggerKinds.fToResultJSON().id).toBe( aDumpingPolicyTriggerKinds._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aDumpingPolicyTriggerKinds.fToResultJSON().title).toBe( aDumpingPolicyTriggerKinds._v_Title);
    });






    it("Has fConsoleService defined", function () {
        expect( aDumpingPolicyTriggerKinds.fConsoleService).not.toBeUndefined();
    });

    it("Has fConsoleService typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fConsoleService).toBe( "function");
    });




    it("Has pDumpRecord defined", function () {
        expect( aDumpingPolicyTriggerKinds.pDumpRecord).not.toBeUndefined();
    });

    it("Has pDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.pDumpRecord).toBe( "function");
    });




    it("Has pSetMayDumpRecords defined", function () {
        expect( aDumpingPolicyTriggerKinds.pSetMayDumpRecords).not.toBeUndefined();
    });

    it("Has pSetMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.pSetMayDumpRecords).toBe( "function");
    });



    it("Has fMayDumpRecords defined", function () {
        expect( aDumpingPolicyTriggerKinds.fMayDumpRecords).not.toBeUndefined();
    });

    it("Has fMayDumpRecords typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fMayDumpRecords).toBe( "function");
    });



    it("Has fMustDumpRecord defined", function () {
        expect( aDumpingPolicyTriggerKinds.fMustDumpRecord).not.toBeUndefined();
    });

    it("Has fMustDumpRecord typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fMustDumpRecord).toBe( "function");
    });




    it("Has fRecordTriggersDump defined", function () {
        expect( aDumpingPolicyTriggerKinds.fRecordTriggersDump).not.toBeUndefined();
    });

    it("Has fRecordTriggersDump typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fRecordTriggersDump).toBe( "function");
    });




    it("Has fEventKindsTriggeringDump defined", function () {
        expect( aDumpingPolicyTriggerKinds.fEventKindsTriggeringDump).not.toBeUndefined();
    });

    it("Has fEventKindsTriggeringDump typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fEventKindsTriggeringDump).toBe( "function");
    });








    it("Has fEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyTriggerKinds.fEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fEventKindsNotForConsole).toBe( "function");
    });



    it("Has fSetEventKindsNotForConsole defined", function () {
        expect( aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole).not.toBeUndefined();
    });

    it("Has fSetEventKindsNotForConsole typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole).toBe( "function");
    });

    it("Has fFewerEventKindsForConsole defined", function () {
        expect( aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole).not.toBeUndefined();
    });

    it("Has fFewerEventKindsForConsole typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole).toBe( "function");
    });

    it("Has fMoreEventKindsForConsole defined", function () {
        expect( aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole).not.toBeUndefined();
    });

    it("Has fMoreEventKindsForConsole typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole).toBe( "function");
    });







    it("Has fSetEventKindsNotForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fSetEventKindsNotForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fSetEventKindsNotForConsole_inPrototype).toBe( "function");
    });

    it("Has fFewerEventKindsForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fFewerEventKindsForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole_inPrototype).toBe( "function");
    });

    it("Has fMoreEventKindsForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fMoreEventKindsForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole_inPrototype).toBe( "function");
    });






    it("Has fRecordTriggersDump defined", function () {
        expect( aDumpingPolicyTriggerKinds.fRecordTriggersDump).not.toBeUndefined();
    });

    it("Has fRecordTriggersDump typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fRecordTriggersDump).toBe( "function");
    });



    it("Has fEventKindsTriggeringDump defined", function () {
        expect( aDumpingPolicyTriggerKinds.fEventKindsTriggeringDump).not.toBeUndefined();
    });

    it("Has fEventKindsTriggeringDump typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fEventKindsTriggeringDump).toBe( "function");
    });



    it("Has fSetEventKindsTriggeringDump defined", function () {
        expect( aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump).not.toBeUndefined();
    });

    it("Has fSetEventKindsTriggeringDump typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump).toBe( "function");
    });

    it("Has fFewerEventKindsForConsole defined", function () {
        expect( aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole).not.toBeUndefined();
    });

    it("Has fFewerEventKindsForConsole typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole).toBe( "function");
    });

    it("Has fMoreEventKindsForConsole defined", function () {
        expect( aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole).not.toBeUndefined();
    });

    it("Has fMoreEventKindsForConsole typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole).toBe( "function");
    });



    it("Has fSetEventKindsTriggeringDump_inPrototype defined", function () {
        expect( aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump_inPrototype).not.toBeUndefined();
    });

    it("Has fSetEventKindsTriggeringDump_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fSetEventKindsTriggeringDump_inPrototype).toBe( "function");
    });

    it("Has fFewerEventKindsForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fFewerEventKindsForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fFewerEventKindsForConsole_inPrototype).toBe( "function");
    });

    it("Has fMoreEventKindsForConsole_inPrototype defined", function () {
        expect( aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole_inPrototype).not.toBeUndefined();
    });

    it("Has fMoreEventKindsForConsole_inPrototype typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.fMoreEventKindsForConsole_inPrototype).toBe( "function");
    });




    it("Has pRelease defined", function () {
        expect( aDumpingPolicyTriggerKinds.pRelease).not.toBeUndefined();
    });

    it("Has pRelease typeof function", function () {
        expect( typeof aDumpingPolicyTriggerKinds.pRelease).toBe( "function");
    });



});

/*
 * common_type-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241650
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




describe("prettytypes-ng Common tests", function () {

    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);


    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverriderType_title = "Overrider-Title-test";

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverriderType_title);
    console.log( "typeof anOverrider= " + typeof anOverrider);
    console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);


    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifierType_title = "Identifier-Title-test";

    var anIdentifier = new aModule_IdentifierType.Identifier_Constructor( aIdentifierType_title);
    console.log( "typeof anIdentifier= " + typeof anIdentifier);
    console.log( "anIdentifier keys = " + Object.keys( anIdentifier));




    var aModule_RecordTypeFactory = ModuleFactory_RecordType();
    console.log( "typeof aModule_RecordTypeFactory= " + typeof aModule_RecordTypeFactory);


    var aModule_RecordType = aModule_RecordTypeFactory( aTypesRegistrySvce, anOverrider);
    console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);



    var aModule_RecorderTypeFactory = ModuleFactory_RecorderType();
    console.log( "typeof aModule_RecorderTypeFactory= " + typeof aModule_RecorderTypeFactory);


    var aModule_RecorderType = aModule_RecorderTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aModule_IdentifierType,
        aModule_RecordType
    );
    console.log( "typeof aModule_RecorderType= " + typeof aModule_RecorderType);

    var aRecorderType_title = "Recorder-Title-test";

    var aRecorder = new aModule_RecorderType.Recorder_Constructor( aRecorderType_title);
    console.log( "typeof aRecorder= " + typeof aRecorder);
    console.log( "aRecorder keys = " + Object.keys( aRecorder));




    var aModule_CommonTypeFactory = ModuleFactory_CommonType();
    console.log( "typeof aModule_CommonTypeFactory= " + typeof aModule_CommonTypeFactory);


    var aModule_CommonType = aModule_CommonTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aRecorder
    );
    console.log( "typeof aModule_CommonType= " + typeof aModule_CommonType);

    var aCommonType_title = "Common-Title-test";

    var aCommon = new aModule_CommonType.Common_Constructor( aCommonType_title);
    console.log( "typeof aCommon= " + typeof aCommon);
    console.log( "aCommon keys = " + Object.keys( aCommon));



    it("Has module defined", function () {
        expect( aCommon._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aCommon._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName common_type", function () {
        expect( aCommon._v_Module.ModuleName).toBe( "common_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aCommon._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.common_type", function () {
        expect( aCommon._v_Module.ModuleFullName).toBe( "common/common_type");
    });

    it("Has module Common_Prototype defined", function () {
        expect( aCommon._v_Module.Common_Prototype).not.toBeUndefined();
    });

    it("Has module Common_Prototype not null", function () {
        expect( aCommon._v_Module.Common_Prototype).not.toBeNull( null);
    });

    it("Has module Common_Constructor defined", function () {
        expect( aCommon._v_Module.Common_Constructor).not.toBeUndefined();
    });

    it("Has module Common_Constructor not null", function () {
        expect( aCommon._v_Module.Common_Constructor).not.toBeNull( null);
    });

    it("Has module Common_SuperPrototypeConstructor defined", function () {
        expect( aCommon._v_Module.Common_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Common_SuperPrototypeConstructor not null", function () {
        expect( aCommon._v_Module.Common_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aCommon._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Common_Prototype", function () {
        expect( aCommon._v_Prototype).toBe( aCommon._v_Module.Common_Prototype);
    });

    it("Has _v_Prototype_Common defined", function () {
        expect( aCommon._v_Prototype_Common).not.toBeUndefined();
    });

    it("Has _v_Prototype_Common module Common_Prototype", function () {
        expect( aCommon._v_Prototype).toBe( aCommon._v_Module.Common_Prototype);
    });



    it("Has _v_Type Common", function () {
        expect( aCommon._v_Type).toBe( "Common");
    });

    it("Has title Common_DefaultName", function () {
        expect( aCommon._v_Title).toBe( aCommonType_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aCommon.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aCommon.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aCommon.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aCommon.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aCommon.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aCommon.fIdentifyingJSON().type).toBe( aCommon._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aCommon.fIdentifyingJSON().id).toBe( aCommon._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aCommon.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aCommon.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aCommon.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommon.fIdentifyingString()).toBe( JSON.stringify( aCommon.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aCommon.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aCommon.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aCommon.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aCommon.fIdentifyingWithTitleJSON().type).toBe( aCommon._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aCommon.fIdentifyingWithTitleJSON().id).toBe( aCommon._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aCommon.fIdentifyingWithTitleJSON().title).toBe( aCommon._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aCommon.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aCommon.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aCommon.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommon.fIdentifyingWithTitleString()).toBe( JSON.stringify( aCommon.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aCommon.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aCommon.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON()not null", function () {
        expect( aCommon.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aCommon.fToResultJSON().type).toBe( aCommon._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aCommon.fToResultJSON().id).toBe( aCommon._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aCommon.fToResultJSON().title).toBe( aCommon._v_Title);
    });





});




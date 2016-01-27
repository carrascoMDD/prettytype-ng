/*
 * prominstr_type-test.js
 *
 * Created @author Antonio Carrasco Valero 201601262228
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



/// <reference path="src/common/prominstr_type.js"/>
"use strict";




describe("prettytypes-ng ProminstrType tests", function () {


    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes"));



    var aProminstr                = null;

    var aProminstr_title = "ProminstrType-Title-test";


    beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _ProminstrType_) {

        // console.log( "typeof aModule_CommonType= " + typeof _ProminstrType_);
        // console.log( "anIdentifier aModule_CommonType = " + Object.keys( _ProminstrType_));

        aProminstr = new _ProminstrType_.Prominstr_Constructor( aProminstr_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aProminstr= " + typeof aProminstr);
        // console.log( "aCommon keys = " + Object.keys( aProminstr));

    }));





    it("Has module defined", function () {
        expect( aProminstr._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aProminstr._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName prominstr_type", function () {
        expect( aProminstr._v_Module.ModuleName).toBe( "prominstr_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aProminstr._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.prominstr_type", function () {
        expect( aProminstr._v_Module.ModuleFullName).toBe( "common/prominstr_type");
    });

    it("Has module Prominstr_Prototype defined", function () {
        expect( aProminstr._v_Module.Prominstr_Prototype).not.toBeUndefined();
    });

    it("Has module Prominstr_Prototype not null", function () {
        expect( aProminstr._v_Module.Prominstr_Prototype).not.toBeNull( null);
    });

    it("Has module Prominstr_Constructor defined", function () {
        expect( aProminstr._v_Module.Prominstr_Constructor).not.toBeUndefined();
    });

    it("Has module Prominstr_Constructor not null", function () {
        expect( aProminstr._v_Module.Prominstr_Constructor).not.toBeNull( null);
    });

    it("Has module Prominstr_SuperPrototypeConstructor defined", function () {
        expect( aProminstr._v_Module.Prominstr_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module Prominstr_SuperPrototypeConstructor not null", function () {
        expect( aProminstr._v_Module.Prominstr_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aProminstr._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module Prominstr_Prototype", function () {
        expect( aProminstr._v_Prototype).toBe( aProminstr._v_Module.Prominstr_Prototype);
    });

    it("Has _v_Prototype_Prominstr defined", function () {
        expect( aProminstr._v_Prototype_Prominstr).not.toBeUndefined();
    });

    it("Has _v_Prototype_Prominstr module Prominstr_Prototype", function () {
        expect( aProminstr._v_Prototype).toBe( aProminstr._v_Module.Prominstr_Prototype);
    });



    it("Has _v_Type Prominstr", function () {
        expect( aProminstr._v_Type).toBe( "Prominstr");
    });

    it("Has title Prominstr_DefaultName", function () {
        expect( aProminstr._v_Title).toBe( aProminstr_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aProminstr.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aProminstr.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aProminstr.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aProminstr.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aProminstr.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aProminstr.fIdentifyingJSON().type).toBe( aProminstr._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aProminstr.fIdentifyingJSON().id).toBe( aProminstr._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aProminstr.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aProminstr.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aProminstr.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aProminstr.fIdentifyingString()).toBe( JSON.stringify( aProminstr.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aProminstr.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aProminstr.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aProminstr.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aProminstr.fIdentifyingWithTitleJSON().type).toBe( aProminstr._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aProminstr.fIdentifyingWithTitleJSON().id).toBe( aProminstr._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aProminstr.fIdentifyingWithTitleJSON().title).toBe( aProminstr._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aProminstr.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aProminstr.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aProminstr.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aProminstr.fIdentifyingWithTitleString()).toBe( JSON.stringify( aProminstr.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aProminstr.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aProminstr.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aProminstr.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aProminstr.fToResultJSON().type).toBe( aProminstr._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aProminstr.fToResultJSON().id).toBe( aProminstr._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aProminstr.fToResultJSON().title).toBe( aProminstr._v_Title);
    });






    var someProminstrMethodNames = [
        "fNewDeferred",
        "pDecorateNewDeferred",
        "fReserveDeferredId",
        "fNewDeferredResolvePromise",
        "pDeferredResolve",
        "fNewDeferredResolveWithNothingPromise",
        "pDeferredResolveWithNothing",
        "fNewDeferredResolveWithSomethingPromise",
        "pDeferredResolveWithSomething",
        "fNewDeferredResolveWithNullPromise",
        "pDeferredResolveWithNull",
        "fNewDeferredResolveWithResponsePromise",
        "pDeferredResolveWithResponse",
        "fNewDeferredResolveWithRowsPromise",
        "pDeferredResolveWithRows",
        "fNewDeferredResolveWithFieldsPromise",
        "pDeferredResolveWithFields",
        "fNewDeferredResolveWithSelectionIndexPromise",
        "pDeferredResolveWithSelectionIndex",
        "fNewDeferredResolveWhenInDoubtPromise",
        "pDeferredResolveWhenInDoubt",
        "fNewPromiseAll",
        "fNewDeferredRejectPromise",
        "pDeferredReject",
        "fNewDeferredResolveAjaxResponsePromise",
        "pDeferredResolveAjaxResponse",
        "fNewDeferredRejectAjaxErrorPromise",
        "pDeferredRejectAjaxError",
        "fNewDeferredRejectActionErrorPromise",
        "pDeferredRejectActionError"
    ];


    var aNumProminstrMethodNames = someProminstrMethodNames.length;
    for( var aProminstrMethodNameIdx=0; aProminstrMethodNameIdx < aNumProminstrMethodNames; aProminstrMethodNameIdx++) {
        var aProminstrMethodName = someProminstrMethodNames[ aProminstrMethodNameIdx];
        if( aProminstrMethodName) {

            (function() {

                var aProminstrMethodName_here = aProminstrMethodName;

                it("Has " + aProminstrMethodName_here + " defined", function () {
                    expect( aProminstr[ aProminstrMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aProminstrMethodName_here + " typeof function", function () {
                    expect( typeof aProminstr[ aProminstrMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});


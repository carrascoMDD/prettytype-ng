/*
 * withprominstr_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601262242
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







/// <reference path="src/common/withprominstr_type.js"/>
"use strict";




describe("prettytypes-ng WithProminstrType structural tests", function () {



    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes"));



    var aWithProminstr         = null;

    var aWithProminstr_title = "WithProminstrType-Title-test";


    beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _WithProminstrType_) {

        // console.log( "typeof aModule_ProminstrType= " + typeof _WithProminstrType_);
        // console.log( "anIdentifier aModule_ProminstrType = " + Object.keys( _WithProminstrType_));

        aWithProminstr = new _WithProminstrType_.WithProminstr_Constructor( aWithProminstr_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aWithProminstr= " + typeof aWithProminstr);
        // console.log( "aWithProminstr keys = " + Object.keys( aWithProminstr));

    }));







    it("Has module defined", function () {
        expect( aWithProminstr._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aWithProminstr._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName withprominstr_type", function () {
        expect( aWithProminstr._v_Module.ModuleName).toBe( "withprominstr_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aWithProminstr._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.withprominstr_type", function () {
        expect( aWithProminstr._v_Module.ModuleFullName).toBe( "common/withprominstr_type");
    });

    it("Has module WithProminstr_Prototype defined", function () {
        expect( aWithProminstr._v_Module.WithProminstr_Prototype).not.toBeUndefined();
    });

    it("Has module WithProminstr_Prototype not null", function () {
        expect( aWithProminstr._v_Module.WithProminstr_Prototype).not.toBeNull( null);
    });

    it("Has module WithProminstr_Constructor defined", function () {
        expect( aWithProminstr._v_Module.WithProminstr_Constructor).not.toBeUndefined();
    });

    it("Has module WithProminstr_Constructor not null", function () {
        expect( aWithProminstr._v_Module.WithProminstr_Constructor).not.toBeNull( null);
    });

    it("Has module WithProminstr_SuperPrototypeConstructor defined", function () {
        expect( aWithProminstr._v_Module.WithProminstr_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module WithProminstr_SuperPrototypeConstructor not null", function () {
        expect( aWithProminstr._v_Module.WithProminstr_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aWithProminstr._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module WithProminstr_Prototype", function () {
        expect( aWithProminstr._v_Prototype).toBe( aWithProminstr._v_Module.WithProminstr_Prototype);
    });

    it("Has _v_Prototype_WithProminstr defined", function () {
        expect( aWithProminstr._v_Prototype_WithProminstr).not.toBeUndefined();
    });

    it("Has _v_Prototype_WithProminstr module WithProminstr_Prototype", function () {
        expect( aWithProminstr._v_Prototype).toBe( aWithProminstr._v_Module.WithProminstr_Prototype);
    });



    it("Has _v_Type WithProminstr", function () {
        expect( aWithProminstr._v_Type).toBe( "WithProminstr");
    });

    it("Has title WithProminstr_DefaultName", function () {
        expect( aWithProminstr._v_Title).toBe( aWithProminstr_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aWithProminstr.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aWithProminstr.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aWithProminstr.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aWithProminstr.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aWithProminstr.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aWithProminstr.fIdentifyingJSON().type).toBe( aWithProminstr._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aWithProminstr.fIdentifyingJSON().id).toBe( aWithProminstr._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aWithProminstr.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aWithProminstr.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aWithProminstr.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aWithProminstr.fIdentifyingString()).toBe( JSON.stringify( aWithProminstr.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aWithProminstr.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aWithProminstr.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aWithProminstr.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aWithProminstr.fIdentifyingWithTitleJSON().type).toBe( aWithProminstr._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aWithProminstr.fIdentifyingWithTitleJSON().id).toBe( aWithProminstr._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aWithProminstr.fIdentifyingWithTitleJSON().title).toBe( aWithProminstr._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aWithProminstr.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aWithProminstr.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aWithProminstr.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aWithProminstr.fIdentifyingWithTitleString()).toBe( JSON.stringify( aWithProminstr.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aWithProminstr.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aWithProminstr.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aWithProminstr.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aWithProminstr.fToResultJSON().type).toBe( aWithProminstr._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aWithProminstr.fToResultJSON().id).toBe( aWithProminstr._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aWithProminstr.fToResultJSON().title).toBe( aWithProminstr._v_Title);
    });






    var someWithProminstrMethodNames = [
        "fNewDeferred",
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


    var aNumWithProminstrMethodNames = someWithProminstrMethodNames.length;
    for( var aWithProminstrMethodNameIdx=0; aWithProminstrMethodNameIdx < aNumWithProminstrMethodNames; aWithProminstrMethodNameIdx++) {
        var aWithProminstrMethodName = someWithProminstrMethodNames[ aWithProminstrMethodNameIdx];
        if( aWithProminstrMethodName) {

            (function() {

                var aWithProminstrMethodName_here = aWithProminstrMethodName;

                it("Has " + aWithProminstrMethodName_here + " defined", function () {
                    expect( aWithProminstr[ aWithProminstrMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aWithProminstrMethodName_here + " typeof function", function () {
                    expect( typeof aWithProminstr[ aWithProminstrMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});


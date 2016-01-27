/*
 * reuse_ctrl_type.js
 *
 * Created @author Antonio Carrasco Valero 201601250103
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





/// <reference path="src/reuse/reuse_ctrl_type.js"/>
"use strict";




describe("prettytypes-ng ReuseCtrlType tests", function () {


    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs", "reuseCtrlTypes"));


    var aReuseCtrl    = null;

    var aReuseCtrl_title = "ReuseCtrlType-Title-test";



    beforeEach( inject(function(  $rootScope, _IdentifierSvce_, _RecorderSvce_, _ReuseCtrlType_) {

        // console.log( "typeof _ReuseCtrlType_= " + typeof _ReuseCtrlType_);
        // console.log( "anIdentifier _ReuseCtrlType_ = " + Object.keys( _ReuseCtrlType_));

        var aScope = $rootScope.$new();

        aReuseCtrl = new _ReuseCtrlType_.ReuseCtrl_Constructor(
            aReuseCtrl_title,
            _IdentifierSvce_,
            _RecorderSvce_,
            aScope
        );
        // console.log( "typeof aReuse= " + typeof aReuse);
        // console.log( "aReuse keys = " + Object.keys( aReuse));

    }));






    it("Has module defined", function () {
        expect( aReuseCtrl._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aReuseCtrl._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName reuse_ctrl_type", function () {
        expect( aReuseCtrl._v_Module.ModuleName).toBe( "reuse_ctrl_type");
    });

    it("Has module ModulePackages reuse", function () {
        expect( aReuseCtrl._v_Module.ModulePackages).toBe( "test/reuse_commons/reuse_ctrl");
    });

    it("Has module ModuleFullName reuse.reusectrl", function () {
        expect( aReuseCtrl._v_Module.ModuleFullName).toBe( "test/reuse_commons/reuse_ctrl/reuse_ctrl_type");
    });

    it("Has module ReuseCtrl_Prototype defined", function () {
        expect( aReuseCtrl._v_Module.ReuseCtrl_Prototype).not.toBeUndefined();
    });

    it("Has module ReuseCtrl_Prototype not null", function () {
        expect( aReuseCtrl._v_Module.ReuseCtrl_Prototype).not.toBeNull( null);
    });

    it("Has module ReuseCtrl_Constructor defined", function () {
        expect( aReuseCtrl._v_Module.ReuseCtrl_Constructor).not.toBeUndefined();
    });

    it("Has module ReuseCtrl_Constructor not null", function () {
        expect( aReuseCtrl._v_Module.ReuseCtrl_Constructor).not.toBeNull( null);
    });

    it("Has module ReuseCtrl_SuperPrototypeConstructor defined", function () {
        expect( aReuseCtrl._v_Module.ReuseCtrl_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module ReuseCtrl_SuperPrototypeConstructor not null", function () {
        expect( aReuseCtrl._v_Module.ReuseCtrl_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aReuseCtrl._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module ReuseCtrl_Prototype", function () {
        expect( aReuseCtrl._v_Prototype).toBe( aReuseCtrl._v_Module.ReuseCtrl_Prototype);
    });

    it("Has _v_Prototype_ReuseCtrl defined", function () {
        expect( aReuseCtrl._v_Prototype_ReuseCtrl).not.toBeUndefined();
    });

    it("Has _v_Prototype_ReuseCtrl module ReuseCtrl_Prototype", function () {
        expect( aReuseCtrl._v_Prototype).toBe( aReuseCtrl._v_Module.ReuseCtrl_Prototype);
    });



    it("Has _v_Type ReuseCtrl", function () {
        expect( aReuseCtrl._v_Type).toBe( "ReuseCtrl");
    });

    it("Has title ReuseCtrl_DefaultName", function () {
        expect( aReuseCtrl._v_Title).toBe( aReuseCtrl_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aReuseCtrl.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aReuseCtrl.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aReuseCtrl.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aReuseCtrl.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aReuseCtrl.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aReuseCtrl.fIdentifyingJSON().type).toBe( aReuseCtrl._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aReuseCtrl.fIdentifyingJSON().id).toBe( aReuseCtrl._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aReuseCtrl.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aReuseCtrl.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aReuseCtrl.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aReuseCtrl.fIdentifyingString()).toBe( JSON.stringify( aReuseCtrl.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aReuseCtrl.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleJSON().type).toBe( aReuseCtrl._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleJSON().id).toBe( aReuseCtrl._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleJSON().title).toBe( aReuseCtrl._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aReuseCtrl.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aReuseCtrl.fIdentifyingWithTitleString()).toBe( JSON.stringify( aReuseCtrl.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aReuseCtrl.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aReuseCtrl.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aReuseCtrl.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aReuseCtrl.fToResultJSON().type).toBe( aReuseCtrl._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aReuseCtrl.fToResultJSON().id).toBe( aReuseCtrl._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aReuseCtrl.fToResultJSON().title).toBe( aReuseCtrl._v_Title);
    });






    var someReuseCtrlMethodNames = [
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


    var aNumReuseCtrlMethodNames = someReuseCtrlMethodNames.length;
    for( var aReuseCtrlMethodNameIdx=0; aReuseCtrlMethodNameIdx < aNumReuseCtrlMethodNames; aReuseCtrlMethodNameIdx++) {
        var aReuseCtrlMethodName = someReuseCtrlMethodNames[ aReuseCtrlMethodNameIdx];
        if( aReuseCtrlMethodName) {

            (function() {

                var aReuseCtrlMethodName_here = aReuseCtrlMethodName;

                it("Has " + aReuseCtrlMethodName_here + " defined", function () {
                    expect( aReuseCtrl[ aReuseCtrlMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aReuseCtrlMethodName_here + " typeof function", function () {
                    expect( typeof aReuseCtrl[ aReuseCtrlMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});


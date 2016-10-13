/*
 * reuse_ctrl-structural-test.js
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





/// <reference path="test/reuse_commons/reuse_ctrl/reuse_ctrl.js"/>
"use strict";




describe("prettytypes-ng ReuseCtrlType structural tests", function () {


    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs"));


    var aCommonCtrl    = null;

    var aCommonCtrl_title = "CommonCtrl-Title-test";



    beforeEach( inject(function(  $rootScope, _IdentifierSvce_, _RecorderSvce_, _CommonCtrlType_) {

        // console.log( "typeof _CommonCtrlType_= " + typeof _CommonCtrlType_);
        // console.log( "anIdentifier _CommonCtrlType_ = " + Object.keys( _CommonCtrlType_));

        var aScope = $rootScope.$new();

        aCommonCtrl = new _CommonCtrlType_.CommonCtrl_Constructor(
            aCommonCtrl_title,
            _IdentifierSvce_,
            _RecorderSvce_,
            aScope
        );
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

    }));






    it("Has module defined", function () {
        expect( aCommonCtrl._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aCommonCtrl._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName common_ctrl_type", function () {
        expect( aCommonCtrl._v_Module.ModuleName).toBe( "common_ctrl_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aCommonCtrl._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.commonctrl", function () {
        expect( aCommonCtrl._v_Module.ModuleFullName).toBe( "common/common_ctrl_type");
    });

    it("Has module CommonCtrl_Prototype defined", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Prototype).not.toBeUndefined();
    });

    it("Has module CommonCtrl_Prototype not null", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Prototype).not.toBeNull( null);
    });

    it("Has module CommonCtrl_Constructor defined", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Constructor).not.toBeUndefined();
    });

    it("Has module CommonCtrl_Constructor not null", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Constructor).not.toBeNull( null);
    });

    it("Has module CommonCtrl_SuperPrototypeConstructor defined", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module CommonCtrl_SuperPrototypeConstructor not null", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aCommonCtrl._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module CommonCtrl_Prototype", function () {
        expect( aCommonCtrl._v_Prototype).toBe( aCommonCtrl._v_Module.CommonCtrl_Prototype);
    });

    it("Has _v_Prototype_CommonCtrl defined", function () {
        expect( aCommonCtrl._v_Prototype_CommonCtrl).not.toBeUndefined();
    });

    it("Has _v_Prototype_CommonCtrl module CommonCtrl_Prototype", function () {
        expect( aCommonCtrl._v_Prototype).toBe( aCommonCtrl._v_Module.CommonCtrl_Prototype);
    });



    it("Has _v_Type CommonCtrl", function () {
        expect( aCommonCtrl._v_Type).toBe( "CommonCtrl");
    });

    it("Has title CommonCtrl_DefaultName", function () {
        expect( aCommonCtrl._v_Title).toBe( aCommonCtrl_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aCommonCtrl.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aCommonCtrl.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aCommonCtrl.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aCommonCtrl.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aCommonCtrl.fIdentifyingJSON().type).toBe( aCommonCtrl._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aCommonCtrl.fIdentifyingJSON().id).toBe( aCommonCtrl._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aCommonCtrl.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aCommonCtrl.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonCtrl.fIdentifyingString()).toBe( JSON.stringify( aCommonCtrl.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON().type).toBe( aCommonCtrl._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON().id).toBe( aCommonCtrl._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON().title).toBe( aCommonCtrl._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleString()).toBe( JSON.stringify( aCommonCtrl.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aCommonCtrl.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aCommonCtrl.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aCommonCtrl.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aCommonCtrl.fToResultJSON().type).toBe( aCommonCtrl._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aCommonCtrl.fToResultJSON().id).toBe( aCommonCtrl._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aCommonCtrl.fToResultJSON().title).toBe( aCommonCtrl._v_Title);
    });






    var someCommonCtrlMethodNames = [
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


    var aNumCommonCtrlMethodNames = someCommonCtrlMethodNames.length;
    for( var aCommonCtrlMethodNameIdx=0; aCommonCtrlMethodNameIdx < aNumCommonCtrlMethodNames; aCommonCtrlMethodNameIdx++) {
        var aCommonCtrlMethodName = someCommonCtrlMethodNames[ aCommonCtrlMethodNameIdx];
        if( aCommonCtrlMethodName) {

            (function() {

                var aCommonCtrlMethodName_here = aCommonCtrlMethodName;

                it("Has " + aCommonCtrlMethodName_here + " defined", function () {
                    expect( aCommonCtrl[ aCommonCtrlMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aCommonCtrlMethodName_here + " typeof function", function () {
                    expect( typeof aCommonCtrl[ aCommonCtrlMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});


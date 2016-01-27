/*
 * common_ctrl-test.js
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


/* ACV OJO TODO 201601270204 Controller tests are not suposed to test the controller, but the changes on the $scope,
  and instantiation of the controller is done by the _$controller_
  But it does not supply a properly initialized instance of controller.



/// <reference path="src/common/common_ctrl_type.js"/>
"use strict";




describe("prettytypes-ng CommonCtrl tests", function () {


    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs"));


    var aRootScope     = null;
    var aController    = null;

    var aCommonCtrl    = null;



    beforeEach( inject(function( _$rootScope_, _$controller_) {

        // console.log( "typeof _CommonCtrl_= " + typeof _CommonCtrl_);
        // console.log( "anIdentifier _CommonCtrl_ = " + Object.keys( _CommonCtrl_));

        aRootScope = _$rootScope_;

        aController = _$controller_;

        console.log( "typeof aRootScope= " + typeof aRootScope);
        console.log( "aRootScope keys = " + Object.keys( aRootScope));

        console.log( "typeof aController= " + typeof aController);
        console.log( "aController keys = " + Object.keys( aController));

    }));






    it("Has module defined", function () {
        aRootScope = aRootScope.$new();
        aCommonCtrl = aController( "CommonCtrl", { "$scope": aRootScope});
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
 */
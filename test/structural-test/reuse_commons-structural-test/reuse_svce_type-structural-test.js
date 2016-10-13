/*
 * reuse_svce_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601250231
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







/// <reference path="src/common/common_svce_type.js"/>
"use strict";




describe("prettytypes-ng ReuseSvceType structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs", "reuseSvceTypes"));


    var aReuseSvce    = null;

    var aReuseSvce_title = "ReuseSvceType-Title-test";



    beforeEach( inject(function(  _IdentifierSvce_, _RecorderSvce_, _ReuseSvceType_) {

        // console.log( "typeof _ReuseSvceType_= " + typeof _ReuseSvceType_);
        // console.log( "anIdentifier _ReuseSvceType_ = " + Object.keys( _ReuseSvceType_));

        aReuseSvce = new _ReuseSvceType_.ReuseSvce_Constructor(
            aReuseSvce_title,
            _IdentifierSvce_,
            _RecorderSvce_
        );
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

    }));



    it("Has module defined", function () {
        expect( aReuseSvce._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aReuseSvce._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName reuse_svce_type", function () {
        expect( aReuseSvce._v_Module.ModuleName).toBe( "reuse_svce_type");
    });

    it("Has module ModulePackages reuse", function () {
        expect( aReuseSvce._v_Module.ModulePackages).toBe( "test/reuse_commons/reuse_svce");
    });

    it("Has module ModuleFullName common.commonctrl", function () {
        expect( aReuseSvce._v_Module.ModuleFullName).toBe( "test/reuse_commons/reuse_svce/reuse_svce_type");
    });

    it("Has module ReuseSvce_Prototype defined", function () {
        expect( aReuseSvce._v_Module.ReuseSvce_Prototype).not.toBeUndefined();
    });

    it("Has module ReuseSvce_Prototype not null", function () {
        expect( aReuseSvce._v_Module.ReuseSvce_Prototype).not.toBeNull( null);
    });

    it("Has module ReuseSvce_Constructor defined", function () {
        expect( aReuseSvce._v_Module.ReuseSvce_Constructor).not.toBeUndefined();
    });

    it("Has module ReuseSvce_Constructor not null", function () {
        expect( aReuseSvce._v_Module.ReuseSvce_Constructor).not.toBeNull( null);
    });

    it("Has module ReuseSvce_SuperPrototypeConstructor defined", function () {
        expect( aReuseSvce._v_Module.ReuseSvce_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module ReuseSvce_SuperPrototypeConstructor not null", function () {
        expect( aReuseSvce._v_Module.ReuseSvce_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aReuseSvce._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module ReuseSvce_Prototype", function () {
        expect( aReuseSvce._v_Prototype).toBe( aReuseSvce._v_Module.ReuseSvce_Prototype);
    });

    it("Has _v_Prototype_ReuseSvce defined", function () {
        expect( aReuseSvce._v_Prototype_ReuseSvce).not.toBeUndefined();
    });

    it("Has _v_Prototype_ReuseSvce module ReuseSvce_Prototype", function () {
        expect( aReuseSvce._v_Prototype).toBe( aReuseSvce._v_Module.ReuseSvce_Prototype);
    });



    it("Has _v_Type ReuseSvce", function () {
        expect( aReuseSvce._v_Type).toBe( "ReuseSvce");
    });

    it("Has title ReuseSvce_DefaultName", function () {
        expect( aReuseSvce._v_Title).toBe( aReuseSvce_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aReuseSvce.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aReuseSvce.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aReuseSvce.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aReuseSvce.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aReuseSvce.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aReuseSvce.fIdentifyingJSON().type).toBe( aReuseSvce._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aReuseSvce.fIdentifyingJSON().id).toBe( aReuseSvce._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aReuseSvce.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aReuseSvce.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aReuseSvce.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aReuseSvce.fIdentifyingString()).toBe( JSON.stringify( aReuseSvce.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aReuseSvce.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aReuseSvce.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aReuseSvce.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aReuseSvce.fIdentifyingWithTitleJSON().type).toBe( aReuseSvce._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aReuseSvce.fIdentifyingWithTitleJSON().id).toBe( aReuseSvce._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aReuseSvce.fIdentifyingWithTitleJSON().title).toBe( aReuseSvce._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aReuseSvce.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aReuseSvce.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aReuseSvce.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aReuseSvce.fIdentifyingWithTitleString()).toBe( JSON.stringify( aReuseSvce.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aReuseSvce.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aReuseSvce.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aReuseSvce.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aReuseSvce.fToResultJSON().type).toBe( aReuseSvce._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aReuseSvce.fToResultJSON().id).toBe( aReuseSvce._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aReuseSvce.fToResultJSON().title).toBe( aReuseSvce._v_Title);
    });






    var someReuseSvceMethodNames = [
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


    var aNumReuseSvceMethodNames = someReuseSvceMethodNames.length;
    for( var aReuseSvceMethodNameIdx=0; aReuseSvceMethodNameIdx < aNumReuseSvceMethodNames; aReuseSvceMethodNameIdx++) {
        var aReuseSvceMethodName = someReuseSvceMethodNames[ aReuseSvceMethodNameIdx];
        if( aReuseSvceMethodName) {

            (function() {

                var aReuseSvceMethodName_here = aReuseSvceMethodName;

                it("Has " + aReuseSvceMethodName_here + " defined", function () {
                    expect( aReuseSvce[ aReuseSvceMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aReuseSvceMethodName_here + " typeof function", function () {
                    expect( typeof aReuseSvce[ aReuseSvceMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});



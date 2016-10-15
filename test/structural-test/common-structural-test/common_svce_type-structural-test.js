/*
 * common_svce_type-structural-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601250225
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







/// <reference path="src/common/common_svce_ng_type.js"/>
"use strict";




describe("prettytypes-ng CommonSvceType structural tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs","reuseSvceTypes"));


    var aCommonSvce    = null;

    var aCommonSvce_title = "CommonSvceType-Title-test";



    beforeEach( inject(function(  _IdentifierSvce_, _RecorderSvce_, _CommonSvceType_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = new _CommonSvceType_.CommonSvce_Constructor(
            aCommonSvce_title,
            _IdentifierSvce_,
            _RecorderSvce_
        );
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

    }));



    it("Has module defined", function () {
        expect( aCommonSvce._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aCommonSvce._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName common_svce_type", function () {
        expect( aCommonSvce._v_Module.ModuleName).toBe( "common_svce_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aCommonSvce._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.commonctrl", function () {
        expect( aCommonSvce._v_Module.ModuleFullName).toBe( "common/common_svce_type");
    });

    it("Has module CommonSvce_Prototype defined", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Prototype).not.toBeUndefined();
    });

    it("Has module CommonSvce_Prototype not null", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Prototype).not.toBeNull( null);
    });

    it("Has module CommonSvce_Constructor defined", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Constructor).not.toBeUndefined();
    });

    it("Has module CommonSvce_Constructor not null", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Constructor).not.toBeNull( null);
    });

    it("Has module CommonSvce_SuperPrototypeConstructor defined", function () {
        expect( aCommonSvce._v_Module.CommonSvce_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module CommonSvce_SuperPrototypeConstructor not null", function () {
        expect( aCommonSvce._v_Module.CommonSvce_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aCommonSvce._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module CommonSvce_Prototype", function () {
        expect( aCommonSvce._v_Prototype).toBe( aCommonSvce._v_Module.CommonSvce_Prototype);
    });

    it("Has _v_Prototype_CommonSvce defined", function () {
        expect( aCommonSvce._v_Prototype_CommonSvce).not.toBeUndefined();
    });

    it("Has _v_Prototype_CommonSvce module CommonSvce_Prototype", function () {
        expect( aCommonSvce._v_Prototype).toBe( aCommonSvce._v_Module.CommonSvce_Prototype);
    });



    it("Has _v_Type CommonSvce", function () {
        expect( aCommonSvce._v_Type).toBe( "CommonSvce");
    });

    it("Has title CommonSvce_DefaultName", function () {
        expect( aCommonSvce._v_Title).toBe( aCommonSvce_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aCommonSvce.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aCommonSvce.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aCommonSvce.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aCommonSvce.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aCommonSvce.fIdentifyingJSON().type).toBe( aCommonSvce._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aCommonSvce.fIdentifyingJSON().id).toBe( aCommonSvce._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aCommonSvce.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aCommonSvce.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonSvce.fIdentifyingString()).toBe( JSON.stringify( aCommonSvce.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON().type).toBe( aCommonSvce._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON().id).toBe( aCommonSvce._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON().title).toBe( aCommonSvce._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aCommonSvce.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aCommonSvce.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonSvce.fIdentifyingWithTitleString()).toBe( JSON.stringify( aCommonSvce.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aCommonSvce.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aCommonSvce.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aCommonSvce.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aCommonSvce.fToResultJSON().type).toBe( aCommonSvce._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aCommonSvce.fToResultJSON().id).toBe( aCommonSvce._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aCommonSvce.fToResultJSON().title).toBe( aCommonSvce._v_Title);
    });






    var someCommonSvceMethodNames = [
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


    var aNumCommonSvceMethodNames = someCommonSvceMethodNames.length;
    for( var aCommonSvceMethodNameIdx=0; aCommonSvceMethodNameIdx < aNumCommonSvceMethodNames; aCommonSvceMethodNameIdx++) {
        var aCommonSvceMethodName = someCommonSvceMethodNames[ aCommonSvceMethodNameIdx];
        if( aCommonSvceMethodName) {

            (function() {

                var aCommonSvceMethodName_here = aCommonSvceMethodName;

                it("Has " + aCommonSvceMethodName_here + " defined", function () {
                    expect( aCommonSvce[ aCommonSvceMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aCommonSvceMethodName_here + " typeof function", function () {
                    expect( typeof aCommonSvce[ aCommonSvceMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});



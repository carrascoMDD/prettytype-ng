/*
 * common_type-commoneventkinds-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201610151725
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







/// <reference path="src/common/common_ng_type.js"/>
"use strict";




describe("prettytypes-ng CommonType CommonEventKinds structural tests", function () {



    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes"));



    var aCommon         = null;

    var aCommon_title = "CommonType-Title-test";


    beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_) {

        // console.log( "typeof aModule_ProminstrType= " + typeof _CommonType_);
        // console.log( "anIdentifier aModule_ProminstrType = " + Object.keys( _CommonType_));

        aCommon = new _CommonType_.Common_Constructor( aCommon_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

    }));





    var someEventKinds = [
        "EVENTKIND_SERVICEREPORT_OK",
        "EVENTKIND_SERVICEREPORT_FAIL"
    ];




    var someEventSets = [
        "EVENTKINDS"
    ];



    it("Has Event Kinds", function () {

        var aNumEventKinds = someEventKinds.length;
        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = someEventKinds[ anEventKindIdx];
            if( anEventKind) {
                expect( aCommon[ anEventKind]).not.toBeUndefined();
                expect( aCommon[ anEventKind]).not.toBeNull();
            }
        }

    });






    it("Has Event Sets", function () {

        var aNumEventSets = someEventSets.length;
        for( var anEventSetIdx=0; anEventSetIdx < aNumEventSets; anEventSetIdx++) {

            var anEventSet = someEventSets[ anEventSetIdx];
            if( anEventSet) {
                expect( aCommon[ anEventSet]).not.toBeUndefined();
                expect( aCommon[ anEventSet]).not.toBeNull();
            }
        }

    });


});


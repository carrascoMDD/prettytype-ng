/*
 * common_type-misc-test.js
 *
 * Created @author Antonio Carrasco Valero 201601262224
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




describe("prettytypes-ng CommonType misc tests", function () {



    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes"));


    var aModule_CommonType  = null;
    var aCommon             = null;

    var aCommon_title = "Common-Title-test";



    beforeEach( inject(function( _IdentifierSvce_, _RecorderSvce_, _CommonType_) {

        aModule_CommonType = _CommonType_;

        // console.log( "typeof aModule_CommonType= " + typeof aModule_CommonType);
        // console.log( "anIdentifier aModule_CommonType = " + Object.keys( aModule_CommonType));

        aCommon = new aModule_CommonType.Common_Constructor( aCommon_title, _IdentifierSvce_, _RecorderSvce_);
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

    }));






    it("Has fFirstDiff defined", function () {
        expect( aCommon.fFirstDiff).not.toBeUndefined();
    });

    it("Has fFirstDiff typeof function", function () {
        expect( typeof aCommon.fFirstDiff).toBe( "function");
    });


    it("fFirstDiff('','') null", function () {
        expect( aCommon.fFirstDiff( "", "")).toBeNull();
    });

    it("fFirstDiff('a','a') null", function () {
        expect( aCommon.fFirstDiff( "a", "a")).toBeNull();
    });

    it("fFirstDiff(1,1) null", function () {
        expect( aCommon.fFirstDiff( 1, 1)).toBeNull();
    });

    it("fFirstDiff(true,true) null", function () {
        expect( aCommon.fFirstDiff( true, true)).toBeNull();
    });

    it("fFirstDiff({},{}) null", function () {
        expect( aCommon.fFirstDiff( {}, {})).toBeNull();
    });

    it("fFirstDiff([],[]) null", function () {
        expect( aCommon.fFirstDiff( [], [])).toBeNull();
    });



    it("fFirstDiff('a','') null", function () {
        expect( aCommon.fFirstDiff( "a", "")).toBe( "/");
    });

    it("fFirstDiff('a','b') null", function () {
        expect( aCommon.fFirstDiff( "a", "b")).toBe( "/");
    });

    it("fFirstDiff(1,2) null", function () {
        expect( aCommon.fFirstDiff( 1, 2)).toBe( "/");
    });

    it("fFirstDiff(true,true) null", function () {
        expect( aCommon.fFirstDiff( true, false)).toBe( "/");
    });

    it("fFirstDiff({},'') null", function () {
        expect( aCommon.fFirstDiff( {}, '')).toBe( "/");
    });

    it("fFirstDiff([],'') null", function () {
        expect( aCommon.fFirstDiff( [], '')).toBe( "/");
    });




    it("fFirstDiff({'a': 'a'},{'a': 'a'}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a'},{'a': 'a'})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'b'}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'b'})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'b'}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'b'})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'd','e':'e'}}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'd','e':'e'}})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}})).toBeNull();
    });




    it("fFirstDiff({'a': 'a'},{'a': 'b'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a'},{'a': 'b'}))).toBe( JSON.stringify( ["a"]));
    });


    it("fFirstDiff({'a': 'a'},{'b': 'a'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a'},{'a': 'b'}))).toBe( JSON.stringify( ["a"]));
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'c'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'c'}))).toBe( JSON.stringify( ["b"]));
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','c':'b'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'c'}))).toBe( JSON.stringify( ["b"]));
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'x','e':'e'}}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'x','e':'e'}}))).toBe( JSON.stringify( ["c", "d"]));
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'x'}}}}))).toBe( JSON.stringify( ["c","i","k","f"]));
    });


});




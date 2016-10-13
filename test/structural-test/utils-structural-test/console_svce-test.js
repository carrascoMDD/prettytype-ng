/*
 * console_svce-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131355
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




/// <reference path="src/utils/console_ng_svce.js"/>
"use strict";




describe("prettytypes-ng console_svce structural tests", function () {


    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce"));

    var aConsoleSvce           = null;


    beforeEach( inject(function( _ConsoleSvce_){

        aConsoleSvce = _ConsoleSvce_;
        // console.log( "typeof anOverrider= " + typeof anOverrider);
        // console.log( "anOverrider keys = " + Object.keys( anOverrider));
    }));






    it("Has module ModuleName console_svce", function () {
        expect( aConsoleSvce.ModuleName).toBe( "console_svce");
    });

    it("Has module ModulePackages utils", function () {
        expect( aConsoleSvce.ModulePackages).toBe( "utils");
    });

    it("Has module ModuleFullName utils.console_svce", function () {
        expect( aConsoleSvce.ModuleFullName).toBe( "utils/console_svce");
    });





    it("Has log defined", function () {
        expect( aConsoleSvce.log).not.toBeUndefined();
    });

    it("Has log typeof function", function () {
        expect( typeof aConsoleSvce.log).toBe( "function");
    });


    it("Has error defined", function () {
        expect( aConsoleSvce.error).not.toBeUndefined();
    });

    it("Has error typeof function", function () {
        expect( typeof aConsoleSvce.log).toBe( "function");
    });


    it("Has info defined", function () {
        expect( aConsoleSvce.info).not.toBeUndefined();
    });

    it("Has info typeof function", function () {
        expect( typeof aConsoleSvce.info).toBe( "function");
    });


    it("Has clear defined", function () {
        expect( aConsoleSvce.clear).not.toBeUndefined();
    });

    it("Has clear typeof function", function () {
        expect( typeof aConsoleSvce.clear).toBe( "function");
    });






    it("Has pSetWriteToConsole defined", function () {
        expect( aConsoleSvce.pSetWriteToConsole).not.toBeUndefined();
    });

    it("Has pSetWriteToConsole typeof function", function () {
        expect( typeof aConsoleSvce.pSetWriteToConsole).toBe( "function");
    });


    it("Has pSetCollectLogs defined", function () {
        expect( aConsoleSvce.pSetCollectLogs).not.toBeUndefined();
    });

    it("Has pSetCollectLogs typeof function", function () {
        expect( typeof aConsoleSvce.pSetCollectLogs).toBe( "function");
    });


    it("Has pSetMaxCollectedLogsLength defined", function () {
        expect( aConsoleSvce.pSetMaxCollectedLogsLength).not.toBeUndefined();
    });

    it("Has pSetMaxCollectedLogsLength typeof function", function () {
        expect( typeof aConsoleSvce.pSetMaxCollectedLogsLength).toBe( "function");
    });


    it("Has fCollectedLogs defined", function () {
        expect( aConsoleSvce.fCollectedLogs).not.toBeUndefined();
    });

    it("Has fCollectedLogs typeof function", function () {
        expect( typeof aConsoleSvce.fCollectedLogs).toBe( "function");
    });




});




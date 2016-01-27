'use strict';

/*
 * appversion_svce.js
 *
 * Created @author Antonio Carrasco Valero 201410010923
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused. licensed under EUPL  http://www.uiwire.org

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
 */

/* Services */

var mAppversionServices = angular.module('appVersionTypes', ['ngResource']);



mAppversionServices.factory('AppVersionSvce', function($resource){

    var URL_PREFIX = "";


    var aServices = { };

    aServices.fVersionMgrJSONClient = function() {
        var aVersionResource = $resource('version.json');
        return aVersionResource.query();
    };


    aServices.fVersionMgrJSONServer = function() {
        var aVersionResource = $resource( URL_PREFIX + '/version.json');
        return aVersionResource.query();
    };

    return aServices;

});




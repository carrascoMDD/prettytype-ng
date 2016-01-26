'use strict';

/*
 * common_ctrl.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused.  licensed under EUPL  http://www.uiwire.org

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



angular.module('commonTypes').controller( 'CommonCtrl', [
    'CommonCtrlType',
    "IdentifierSvce",
    "RecorderSvce",
    '$scope',
function ( theSS_CommonCtrlType,
           theSS_IdentifierSvce,
           theSS_RecorderSvce,
           $scope) {

    $scope.Object = Object;
    $scope.JSON = JSON;
    $scope.Date = Date;

    /* *********************************
    Only by concrete subtypes
    */

    $scope.commonCtrl = new theSS_CommonCtrlType.CommonCtrl_Constructor(
        "Controller_Common",
        theSS_IdentifierSvce,
        theSS_RecorderSvce,
        $scope
    );


}]);






'use strict';

/*
 * typesregistry_svce.js
 *
 * Created @author Antonio Carrasco Valero 201601261615
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




var mTypesRegistryServices = angular.module("typesRegistry", []);




mTypesRegistryServices.factory("TypesRegistrySvce",
    ModuleFactory_TypesRegistrySvce()
);




;'use strict';

/*
 * baseurl_types.js
 *
 * Created @author Antonio Carrasco Valero 201601242344
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



angular.module("baseURLs", [ "typesRegistry"]);




;'use strict';

/*
 * appbaseurl_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
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
 *
 */



angular.module("baseURLs").factory("AppBaseURLType", [
    "TypesRegistrySvce",
function( theSS_typesregistry) {


    var ModuleName     = "appbaseurl_type";
    var ModulePackages = "roots";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function() {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.APPBASEURLFIELDDOMID = "did_AppBaseURLfld";
        };





        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };







        var aModule = { };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;




        var gAppBaseURL = null;


        var fAppBaseURL = function() {
            if( gAppBaseURL) {
                return gAppBaseURL;
            }

            var anAppBaseURLelement = document.getElementById( this.APPBASEURLFIELDDOMID);
            if( !anAppBaseURLelement) {
                return null;
            }

            gAppBaseURL = anAppBaseURLelement.value;

            return gAppBaseURL;
        };
        if( fAppBaseURL){}/* CQT */
        aModule.fAppBaseURL = fAppBaseURL;






        var fAppBaseURL_jquery_unused = function() {
            if( gAppBaseURL) {
                return gAppBaseURL;
            }

            document.getElementById( this.APPBASEURLFIELDDOMID)
            var anAppBaseURLelement = $("#" + this.APPBASEURLFIELDDOMID);
            if( !anAppBaseURLelement || !anAppBaseURLelement.length) {
                return null;
            }

            gAppBaseURL = anAppBaseURLelement.val();

            return gAppBaseURL;
        };
        if( fAppBaseURL_jquery_unused){}/* CQT */
        aModule.fAppBaseURL_jquery_unused = fAppBaseURL_jquery_unused;



        return aModule;
    };






    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer();
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }





    return anExistingModule;

}]);







;'use strict';

/*
 * appbaseurl_svce.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
 *
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
 *
 */



angular.module("baseURLs").factory("AppBaseURLSvce", [
    "AppBaseURLType",
function( theSS_AppBaseURLType){


    return theSS_AppBaseURLType;

}]);







;'use strict';

/*
 * apibaseurl_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
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
 *
 */



angular.module("baseURLs").factory("APIBaseURLType", [
    "TypesRegistrySvce",
function( theSS_typesregistry) {


    var ModuleName     = "apibaseurl_type";
    var ModulePackages = "roots";
    var ModuleFullName = ModulePackages + "/" + ModuleName;



    var aMod_definer = function() {


        if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.APIBASEURLFIELDDOMID = "did_AppBaseURLfld";
        };





        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };







        var aModule = { };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;




        var gAPIBaseURL = null;


        var fAPIBaseURL = function() {
            if( gAPIBaseURL) {
                return gAPIBaseURL;
            }

            var anAPIBaseURLelement = document.getElementById( this.APIBASEURLFIELDDOMID);
            if( !anAPIBaseURLelement) {
                return null;
            }

            gAPIBaseURL = anAPIBaseURLelement.value;

            return gAPIBaseURL;
        };
        if( fAPIBaseURL){}/* CQT */
        aModule.fAPIBaseURL = fAPIBaseURL;






        var fAPIBaseURL_jquery_unused = function() {
            if( gAPIBaseURL) {
                return gAPIBaseURL;
            }

            document.getElementById( this.APIBASEURLFIELDDOMID)
            var anAPIBaseURLelement = $("#" + this.APIBASEURLFIELDDOMID);
            if( !anAPIBaseURLelement || !anAPIBaseURLelement.length) {
                return null;
            }

            gAPIBaseURL = anAPIBaseURLelement.val();

            return gAPIBaseURL;
        };
        if( fAPIBaseURL_jquery_unused){}/* CQT */
        aModule.fAPIBaseURL_jquery_unused = fAPIBaseURL_jquery_unused;



        return aModule;
    };






    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer();
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }





    return anExistingModule;

}]);







;'use strict';

/*
 * apibaseurl_svce.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
 *
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
 *
 */



angular.module("baseURLs").factory("APIBaseURLSvce", [
    "APIBaseURLType",
function( theSS_APIBaseURLType){


    return theSS_APIBaseURLType;

}]);







;'use strict';

/*
 * roots_types.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
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



angular.module("rootsTypes", [ "typesRegistry"]);




;'use strict';

/*
 * overrider_type.js
 *
 * Created @author Antonio Carrasco Valero 201601261700
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("rootsTypes").factory("OverriderType", [
    "TypesRegistrySvce",
    ModuleFactory_OverriderType()
]);




;'use strict';

/*
 * overrider_svce.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
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



angular.module("rootsTypes").factory("OverriderSvce", [
    "OverriderType",
function( theSS_OverriderType){


    var aService = new theSS_OverriderType.Overrider_Constructor( "Overrider_Service");
    if( aService){}/* CQT */

    return aService;


}]);







;'use strict';

/*
 * console_ng_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610131345
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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




var mExceptionDetailsServices = angular.module("consoleSvce", [
    "typesRegistry",
    "rootsTypes"
]);




mExceptionDetailsServices.factory("ConsoleSvce",[
     "TypesRegistrySvce",
     "OverriderSvce",
      ModuleFactory_ConsoleSvce()
  ]
);




;'use strict';

/*
 * identifying_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
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



angular.module("identifyingTypes", [
    "typesRegistry",
    "rootsTypes",
    "consoleSvce",
    "commonEventKinds"
]);




;'use strict';

/*
 * identifier_type.js
 *
 * Created @author Antonio Carrasco Valero 201601261700
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



angular.module("identifyingTypes").factory("IdentifierType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    ModuleFactory_IdentifierType()
]);

;'use strict';

/*
 * identifier_svce.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
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



angular.module("identifyingTypes").factory("IdentifierSvce", [
    "IdentifierType",
function( theSS_IdentifierType){


    var aService = new theSS_IdentifierType.Identifier_Constructor(
        "Service_Identifier"
    );
    if( aService){}/* CQT */

    return aService;


}]);







;'use strict';

/*
 * record.js
 *
 * Created @author Antonio Carrasco Valero 201601261700
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



angular.module("identifyingTypes").factory("RecordType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    ModuleFactory_RecordType()
]);
;'use strict';

/*
 * recordingpolicy_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610131411
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("RecordingPolicyType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "IdentifierSvce",
    ModuleFactory_RecordingPolicyType()
]);
;'use strict';

/*
 * recordingpolicy_keepall_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610131412
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("RecordingPolicyKeepAllType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "RecordingPolicyType",
    ModuleFactory_RecordingPolicyKeepAllType()
]);
;'use strict';

/*
 * recordingpolicy_keepsome_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610181745
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("RecordingPolicyKeepSomeType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "RecordingPolicyKeepAllType",
    ModuleFactory_RecordingPolicyKeepSomeType()
]);
;'use strict';

/*
 * recordingpolicy_keeprecent_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610181746
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("RecordingPolicyKeepRecentType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "RecordingPolicyKeepSomeType",
    ModuleFactory_RecordingPolicyKeepRecentType()
]);
;'use strict';

/*
 * dumpingpolicy_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610131411
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("DumpingPolicyType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "IdentifierSvce",
    "ConsoleSvce",
    ModuleFactory_DumpingPolicyType()
]);
;'use strict';

/*
 * dumpingpolicy_filterkinds_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610131419
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("DumpingPolicyFilterKindsType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "DumpingPolicyType",
    "CommonEventKinds",
    ModuleFactory_DumpingPolicyFilterKindsType()
]);
;'use strict';

/*
 * dumpingpolicy_triggerkinds_ng_type.js
 *
 * Created @author Antonio Carrasco Valero 201610301133
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("DumpingPolicyTriggerKindsType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "DumpingPolicyFilterKindsType",
    "CommonEventKinds",
    ModuleFactory_DumpingPolicyTriggerKindsType()
]);
;'use strict';

/*
 * recorder_type.js
 *
 * Created @author Antonio Carrasco Valero 201601261700
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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



angular.module("identifyingTypes").factory("RecorderType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "IdentifierSvce",
    "IdentifierType",
    "RecordType",
    "RecordingPolicyKeepAllType",
    "DumpingPolicyFilterKindsType",
    ModuleFactory_RecorderType()
]);


;'use strict';

/*
 * recorder_svce.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
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



angular.module("identifyingTypes").factory("RecorderSvce", [
    "IdentifierSvce",
    "RecorderType",
function( theSS_IdentifierSvce,
          theSS_RecorderType){


    var aService = new theSS_RecorderType.Recorder_Constructor(
        "Service_Recorder",
        theSS_IdentifierSvce
    );
    if( aService){}/* CQT */

    return aService;


}]);







;'use strict';

/*
 * common_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
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



angular.module("commonTypes", [
    "typesRegistry",
    "rootsTypes",
    "commonEventKinds",
    "identifyingTypes",
    "baseURLs"
]);




;'use strict';

/*
 * commoneventkinds_ng.js
 *
 * Created @author Antonio Carrasco Valero 201610131421
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
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

var mCommonEventKinds = angular.module("commonEventKinds", [ "typesRegistry"]);




mCommonEventKinds.factory("CommonEventKinds",[
    "TypesRegistrySvce",
    ( function( theSS_typesregistry){
        
        
        var ModuleName     = "commoneventkinds";
        var ModulePackages = "base";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_definer = function() {
            
            
            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                
                theToInit.EVENTKIND_ACTIONREPORT_FAILED          = "EVT_ACTIONREPORT_FAILED";
                theToInit.EVENTKIND_ACTIONREPORT_SUCCESS         = "EVT_ACTIONREPORT_SUCCESS";
                
                theToInit.EVENTKIND_ACTIONREPORT_CREATED         = "EVT_ACTIONREPORT_CREATED";
                
                theToInit.EVENTKIND_GRIDREGISTEREDINPARENT       = "EVT_GRIDREGISTEREDINPARENT";
                theToInit.EVENTKIND_EDITORREGISTEREDINPARENT     = "EVT_EDITORREGISTEREDINPARENT";
                theToInit.EVENTKIND_CREATORREGISTEREDINPARENT    = "EVT_CREATORREGISTEREDINPARENT";
                theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR  = "EVT_CANDIDATEREGISTEREDINEDITOR";
                
                theToInit.EVENTKIND_WIRED                        = "EVT_WIRED";
                theToInit.EVENTKIND_UNWIRED                      = "EVT_UNWIRED";
                
                theToInit.EVENTKIND_ADDROWSCHANGELISTENER         = "EVT_ADDROWSCHANGELISTENER";
                theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER      = "EVT_REMOVEROWSCHANGELISTENER";
                theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER    = "EVT_ADDSELECTIONCHANGELISTENER";
                theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER = "EVT_REMOVESELECTIONCHANGELISTENER";
                theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER     = "EVT_ADDACTIONHAPPENEDLISTENER";
                theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER  = "EVT_REMOVEACTIONHAPPENEDLISTENER";
                
                theToInit.EVENTKIND_TRYTORETRIEVEROWS            = "EVT_TRYTORETRIEVEROWS";
                theToInit.EVENTKIND_RETRIEVEDROWS                = "EVT_RETRIEVEDROWS";
                theToInit.EVENTKIND_TRYTORETRIEVEFIELDS          = "EVT_TRYTORETRIEVEFIELDS";
                theToInit.EVENTKIND_RETRIEVEDFIELDS              = "EVT_RETRIEVEDFIELDS";
                
                theToInit.EVENTKIND_LISTENED                     = "EVT_LISTENED";
                theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED  = "EVT_GRIDSELECTIONCHANGELISTENED";
                theToInit.EVENTKIND_ARGUMENTSCHANGELISTENED      = "EVT_ARGUMENTSCHANGELISTENED";
                
                
                
                
                
                theToInit.EVENTKIND_SERVICEREPORT_SENDING         = "EVT_SERVICEREPORT_SENDING";
                theToInit.EVENTKIND_SERVICEREPORT_OK              = "EVT_SERVICEREPORT_OK";
                theToInit.EVENTKIND_SERVICEREPORT_FAIL            = "EVT_SERVICEREPORT_FAIL";
                
                theToInit.EVENTKIND_SERVICEREPORT_GET             = "EVT_SERVICEREPORT_GET";
                theToInit.EVENTKIND_SERVICEREPORT_GETOK           = "EVT_SERVICEREPORT_GETOK";
                theToInit.EVENTKIND_SERVICEREPORT_GETFAIL         = "EVT_SERVICEREPORT_GETFAIL";
                theToInit.EVENTKIND_SERVICEREPORT_POST            = "EVT_SERVICEREPORT_POST";
                theToInit.EVENTKIND_SERVICEREPORT_POSTOK          = "EVT_SERVICEREPORT_POSTOK";
                theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL        = "EVT_SERVICEREPORT_POSTFAIL";
                theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL      = "EVT_SERVICEREPORT_UPLOADFAIL";
                
                
                
                
                
                theToInit.EVENTKINDS_NOPROMISE_FAILURES = [
                    theToInit.EVENTKIND_ACTIONREPORT_FAILED        ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL     ,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];
                
                
                
                theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES = [
                    theToInit.EVENTKIND_ACTIONREPORT_SUCCESS       ,
                    theToInit.EVENTKIND_ACTIONREPORT_CREATED       ,
                    theToInit.EVENTKIND_GRIDREGISTEREDINPARENT     ,
                    theToInit.EVENTKIND_EDITORREGISTEREDINPARENT   ,
                    theToInit.EVENTKIND_CREATORREGISTEREDINPARENT  ,
                    theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR,
                    theToInit.EVENTKIND_WIRED                      ,
                    theToInit.EVENTKIND_UNWIRED                    ,
                    theToInit.EVENTKIND_ADDROWSCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER,
                    theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER,
                    theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER  ,
                    theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER ,
                    theToInit.EVENTKIND_TRYTORETRIEVEROWS          ,
                    theToInit.EVENTKIND_RETRIEVEDROWS              ,
                    theToInit.EVENTKIND_TRYTORETRIEVEFIELDS        ,
                    theToInit.EVENTKIND_RETRIEVEDFIELDS            ,
                    theToInit.EVENTKIND_LISTENED                   ,
                    theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED,
                    theToInit.EVENTKIND_SERVICEREPORT_SENDING      ,
                    theToInit.EVENTKIND_SERVICEREPORT_OK           ,
                    theToInit.EVENTKIND_SERVICEREPORT_GET          ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETOK        ,
                    theToInit.EVENTKIND_SERVICEREPORT_POST         ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTOK
                ];
                
                
                
                theToInit.EVENTKINDS_NOPROMISE = [];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
                
                
                
                
                theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT              = "NODEFERREDTOREJECT";
                theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE             = "NODEFERREDTORESOLVE";
                
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED  = "ATTEMPTTOREJECT_ALREADYRESOLVED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED  = "ATTEMPTTOREJECT_ALREADYREJECTED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING       = "ATTEMPTTOREJECT_NOTPENDING";
                
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED = "ATTEMPTTORESOLVE_ALREADYRESOLVED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED = "ATTEMPTTORESOLVE_ALREADYREJECTED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING      = "ATTEMPTTORESOLVE_NOTPENDING";
                
                theToInit.PROMINSTEVT_ALLSCHEDULED                         = "ALLSCHEDULED";
                
                theToInit.PROMINSTEVT_REJECTED                             = "REJECTED";
                theToInit.PROMINSTEVT_RESOLVED                             = "RESOLVED";
                
                
                
                
                theToInit.EVENTKINDS_PROMISE_FAILURES = [
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT             ,
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE            ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING      ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING
                
                ];
                
                theToInit.EVENTKINDS_PROMISE_NOTFAILURES = [
                    theToInit.PROMINSTEVT_ALLSCHEDULED                        ,
                    theToInit.PROMINSTEVT_REJECTED                            ,
                    theToInit.PROMINSTEVT_RESOLVED
                
                ];
                
                
                
                
                theToInit.EVENTKINDS_FAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_PROMISE_FAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
                
                
                
                
                theToInit.EVENTKINDS_NOTFAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
                
                
                
                
                
                
                
                theToInit.EVENTKINDS = theToInit.EVENTKINDS_NOPROMISE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS, theToInit.EVENTKINDS_PROMISE_FAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);
                
                
                
                
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                    
                    theToInit.EVENTKIND_ACTIONREPORT_CREATED       ,
                    theToInit.EVENTKIND_GRIDREGISTEREDINPARENT     ,
                    theToInit.EVENTKIND_EDITORREGISTEREDINPARENT   ,
                    theToInit.EVENTKIND_CREATORREGISTEREDINPARENT  ,
                    theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR,
                    theToInit.EVENTKIND_WIRED                      ,
                    theToInit.EVENTKIND_UNWIRED                    ,
                    theToInit.EVENTKIND_ADDROWSCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER,
                    theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER,
                    theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER  ,
                    theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER ,
                    theToInit.EVENTKIND_TRYTORETRIEVEROWS          ,
                    theToInit.EVENTKIND_RETRIEVEDROWS              ,
                    theToInit.EVENTKIND_TRYTORETRIEVEFIELDS        ,
                    theToInit.EVENTKIND_RETRIEVEDFIELDS            ,
                    theToInit.EVENTKIND_LISTENED                   ,
                    theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED,
                    theToInit.EVENTKIND_SERVICEREPORT_SENDING      ,
                    theToInit.EVENTKIND_SERVICEREPORT_OK           ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GET          ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETOK        ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POST         ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTOK       ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL     ,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];
                
                
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE = theToInit.EVENTKINDS_PROMISE_NOTFAILURES.slice();
                
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
                theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE.slice();
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NONE;
                
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;
                
                
                
                
                
                
                theToInit.EVENTKINDS_ERRORS = [
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT             ,
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE            ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING      ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING     ,
                    theToInit.EVENTKIND_ACTIONREPORT_FAILED        ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];
                
                
                theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS  = theToInit.EVENTKINDS_ERRORS.slice();
                
                theToInit.EVENTKINDS_TRIGGERDUMP_ALL     = theToInit.EVENTKINDS.slice();
                
                theToInit.EVENTKINDS_TRIGGERDUMP_DEFAULT = theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS;
                
                
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);
            
            
            
            
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
            
            
            
            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;
            aModule.pgInitFromModuleConstants = pgInitFromModuleConstants;
            
            
            
            return aModule;
        };
        
        
        
        
        
        
        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {
            
            var aModule = aMod_definer();
            anExistingModule = aModule;
            
            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }
        
        
        
        return anExistingModule;
        
        
    })
]);



;'use strict';

/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201601261700
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



angular.module("commonTypes").factory("CommonType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "IdentifierSvce",
    "RecorderSvce",
    "CommonEventKinds",
    ModuleFactory_CommonType()
]);
;'use strict';

/*
 * prominstr_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
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



angular.module("commonTypes").factory("ProminstrSvce", [
    "ProminstrType",
    "IdentifierSvce",
    "RecorderSvce",
function( theSS_ProminstrType,
          theSS_IdentifierSvce,
          theSS_RecorderSvce){


    var aService = new theSS_ProminstrType.Prominstr_Constructor(
        "Prominstr_Service",
        theSS_IdentifierSvce,
        theSS_RecorderSvce
    );
    if( aService){}/* CQT */

    return aService;


}]);







;'use strict';

/*
 * common_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
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



angular.module("commonTypes").factory("CommonSvce", [
    "CommonSvceType",
    "IdentifierSvce",
    "RecorderSvce",
function( theSS_CommonSvceType,
          theSS_IdentifierSvce,
          theSS_RecorderSvce){


    var aService = new theSS_CommonSvceType.CommonSvce_Constructor(
        "Common_Service",
        theSS_IdentifierSvce,
        theSS_RecorderSvce
    );
    if( aService){}/* CQT */

    return aService;


}]);







;'use strict';

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






//# sourceMappingURL=prettytype-ng.js.map
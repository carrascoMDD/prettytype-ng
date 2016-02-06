'use strict';

/*
 * exceptiondetails_svce.js
 *
 * Created @author Antonio Carrasco Valero 201601261704
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




var mExceptionDetailsServices = angular.module("exceptionDetails", []);





mExceptionDetailsServices.factory("ExceptionDetailsSvce",
    ModuleFactory_ExceptionDetailsSvce()
);;'use strict';

/*
 * decoratesystemprototypes_svce.js
 *
 * Created @author Antonio Carrasco Valero 201601261703
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




var mExceptionDetailsServices = angular.module("decoratesystemprototypes", []);





mExceptionDetailsServices.factory("DecoratesystemprototypesSvce",
    ModuleFactory_DecoratesystemprototypesSvce()
);





;'use strict';

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
    "rootsTypes"
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
    "identifyingTypes",
    "baseURLs"
]);




;'use strict';

/*
 * prominstrexception.js
 *
 * Created @author Antonio Carrasco Valero 201410141126
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


angular.module("commonTypes").factory("ProminstrException",
    ModuleFactory_ProminstrType()
);















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
    "RecorderType",
    ModuleFactory_CommonType()
]);
;'use strict';

/*
 * prominstr_type.js
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



angular.module("commonTypes").factory("ProminstrType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonType",
    "IdentifierType",
    "$q",
    ModuleFactory_ProminstrType()
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
 * withprominstr_type.js
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



angular.module("commonTypes").factory("WithProminstrType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonType",
    "ProminstrSvce",
    ModuleFactory_WithProminstrType()
]);;'use strict';

/*
 * common_svce_type.js
 *
 * Created @author Antonio Carrasco Valero 201601261659
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



angular.module("commonTypes").factory("CommonSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithProminstrType",
    "AppBaseURLSvce",
    "APIBaseURLSvce",
    ModuleFactory_CommonSvceType()
]);
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
 * common_ctrl_type.js
 *
 * Created @author Antonio Carrasco Valero 201601261659
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



angular.module("commonTypes").factory("CommonCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "WithProminstrType",
    "AppBaseURLSvce",
    "APIBaseURLSvce",
    "$location",
    ModuleFactory_CommonCtrlType()
]);







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
'use strict';

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
    ( function( theSS_typesregistry,
                theSS_Overrider,
                theSS_CommonType,
                theSS_ProminstrSvce) {
        
        
        var ModuleName     = "withprominstr_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_definer = function( theS_Overrider,
                                     theS_CommonType,
                                     theS_ProminstrSvce) {
            
            
            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}
            
            
            
            
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            
            
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.WITHPROMINSTR_DEFAULTTITLE = "WithProminstrDefaultName";
                
            };
            
            
            
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
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
            
            
            
            
            
            
            var aWithProminstr_Prototype = (function() {
                
                
                
                var aPrototype = new theS_CommonType.Common_SuperPrototypeConstructor();
                
                pgInitFromModuleConstants( aPrototype);
                
                
                aPrototype._v_SuperPrototype = theS_CommonType.Common_Prototype;
                
                
                aPrototype._v_Type = "WithProminstr";
                
                aPrototype._v_Prototype_WithProminstr = aPrototype;
                
                
                aPrototype._v_Module = null;
                
                aPrototype._v_ProminstrSvce = null;
                
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_WithProminstr( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.WITHPROMINSTR_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_WithProminstr = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_Common.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                    
                    this._v_ProminstrSvce = theS_ProminstrSvce;
                };
                if( _pInit_WithProminstr){}/* CQT */
                aPrototype._pInit_WithProminstr = _pInit_WithProminstr;
                
                
                
                
                
                
                
                
                
                
                var fNewDeferred = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferred( this);
                };
                if( fNewDeferred){}/* CQT */
                aPrototype.fNewDeferred = fNewDeferred;
                
                
                
                
                
                
                
                
                var fNewDeferredResolvePromise = function( theResolution, theResolutionKind) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolvePromise( theResolution, theResolutionKind, this);
                };
                if( fNewDeferredResolvePromise){}/* CQT */
                aPrototype.fNewDeferredResolvePromise = fNewDeferredResolvePromise;
                
                
                
                
                var pDeferredResolve = function( theDeferred, theResolution, theResolutionKind) {
                    
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolve( theDeferred, theResolution, theResolutionKind, this);
                };
                if( pDeferredResolve){}/* CQT */
                aPrototype.pDeferredResolve = pDeferredResolve;
                
                
                
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWithNothingPromise = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithNothingPromise( this);
                };
                if( fNewDeferredResolveWithNothingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNothingPromise = fNewDeferredResolveWithNothingPromise;
                
                
                
                
                var pDeferredResolveWithNothing = function( theDeferred) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithNothing( theDeferred, this);
                };
                if( pDeferredResolveWithNothing){}/* CQT */
                aPrototype.pDeferredResolveWithNothing = pDeferredResolveWithNothing;
                
                
                
                
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWithNullPromise = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithNullPromise( this);
                    
                };
                if( fNewDeferredResolveWithNullPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNullPromise = fNewDeferredResolveWithNullPromise;
                
                
                
                
                var pDeferredResolveWithNull = function( theDeferred) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithNull( theDeferred, this);
                };
                if( pDeferredResolveWithNull){}/* CQT */
                aPrototype.pDeferredResolveWithNull = pDeferredResolveWithNull;
                
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWithSomethingPromise = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithSomethingPromise( this);
                };
                if( fNewDeferredResolveWithSomethingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSomethingPromise = fNewDeferredResolveWithSomethingPromise;
                
                
                
                
                var pDeferredResolveWithSomething = function( theDeferred) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithSomething( theDeferred, this);
                };
                if( pDeferredResolveWithSomething){}/* CQT */
                aPrototype.pDeferredResolveWithSomething = pDeferredResolveWithSomething;
                
                
                
                
                
                var fNewDeferredResolveWithResponsePromise = function( theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithResponsePromise( theResponse, this);
                };
                if( fNewDeferredResolveWithResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithResponsePromise = fNewDeferredResolveWithResponsePromise;
                
                
                
                
                
                var pDeferredResolveWithResponse = function( theDeferred, theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithResponse( theDeferred, theResponse, this);
                };
                if( pDeferredResolveWithResponse){}/* CQT */
                aPrototype.pDeferredResolveWithResponse = pDeferredResolveWithResponse;
                
                
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWithRowsPromise = function( theRows) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithRowsPromise( theRows, this);
                };
                if( fNewDeferredResolveWithRowsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithRowsPromise = fNewDeferredResolveWithRowsPromise;
                
                
                
                
                var pDeferredResolveWithRows = function( theDeferred, theRows) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithRows( theDeferred, theRows, this);
                };
                if( pDeferredResolveWithRows){}/* CQT */
                aPrototype.pDeferredResolveWithRows = pDeferredResolveWithRows;
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWithFieldsPromise = function( theFields) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithFieldsPromise( theFields, this);
                };
                if( fNewDeferredResolveWithFieldsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithFieldsPromise = fNewDeferredResolveWithFieldsPromise;
                
                
                
                
                var pDeferredResolveWithFields = function( theDeferred, theFields) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithFields( theDeferred, theFields, this);
                };
                if( pDeferredResolveWithFields){}/* CQT */
                aPrototype.pDeferredResolveWithFields = pDeferredResolveWithFields;
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWithSelectionIndexPromise = function( theSelectionIndex) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWithSelectionIndexPromise( theSelectionIndex, this);
                };
                if( fNewDeferredResolveWithSelectionIndexPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSelectionIndexPromise = fNewDeferredResolveWithSelectionIndexPromise;
                
                
                
                
                var pDeferredResolveWithSelectionIndex = function( theDeferred, theSelectionIndex) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWithSelectionIndex( theDeferred, theSelectionIndex, this);
                };
                if( pDeferredResolveWithSelectionIndex){}/* CQT */
                aPrototype.pDeferredResolveWithSelectionIndex = pDeferredResolveWithSelectionIndex;
                
                
                
                
                
                
                
                
                
                
                
                
                var fNewDeferredResolveWhenInDoubtPromise = function( theSomething) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveWhenInDoubtPromise( theSomething, this);
                };
                if( fNewDeferredResolveWhenInDoubtPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWhenInDoubtPromise = fNewDeferredResolveWhenInDoubtPromise;
                
                
                
                
                
                
                
                var pDeferredResolveWhenInDoubt = function( theDeferred, theSomething) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveWhenInDoubt( theDeferred, theSomething, this);
                };
                if( pDeferredResolveWhenInDoubt){}/* CQT */
                aPrototype.pDeferredResolveWhenInDoubt = pDeferredResolveWhenInDoubt;
                
                
                
                
                
                
                
                
                
                
                
                
                var fNewDeferredRejectPromise = function( theRejection, theRejectionKind) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredRejectPromise( theRejection, theRejectionKind, this);
                };
                if( fNewDeferredRejectPromise){}/* CQT */
                aPrototype.fNewDeferredRejectPromise = fNewDeferredRejectPromise;
                
                
                
                
                
                var pDeferredReject = function( theDeferred, theRejection, theRejectionKind) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredReject( theDeferred, theRejection, theRejectionKind, this);
                    
                };
                if( pDeferredReject){}/* CQT */
                aPrototype.pDeferredReject = pDeferredReject;
                
                
                
                
                
                
                var fNewDeferredResolveAjaxResponsePromise = function( theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredResolveAjaxResponsePromise( theResponse, this);
                };
                if( fNewDeferredResolveAjaxResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveAjaxResponsePromise = fNewDeferredResolveAjaxResponsePromise;
                
                
                
                
                
                var pDeferredResolveAjaxResponse = function( theDeferred, theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredResolveAjaxResponse( theDeferred, theResponse, this);
                    
                };
                if( pDeferredResolveAjaxResponse){}/* CQT */
                aPrototype.pDeferredResolveAjaxResponse = pDeferredResolveAjaxResponse;
                
                
                
                
                
                
                
                
                var fNewDeferredRejectAjaxErrorPromise = function( theRejection) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredRejectAjaxErrorPromise( theRejection, this);
                };
                if( fNewDeferredRejectAjaxErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectAjaxErrorPromise = fNewDeferredRejectAjaxErrorPromise;
                
                
                
                
                
                var pDeferredRejectAjaxError = function( theDeferred, theRejection) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredRejectAjaxError( theDeferred, theRejection, this);
                    
                };
                if( pDeferredRejectAjaxError){}/* CQT */
                aPrototype.pDeferredRejectAjaxError = pDeferredRejectAjaxError;
                
                
                
                
                
                
                var fNewDeferredRejectActionErrorPromise = function( theRejection) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewDeferredRejectActionErrorPromise( theRejection, this);
                };
                if( fNewDeferredRejectActionErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectActionErrorPromise = fNewDeferredRejectActionErrorPromise;
                
                
                
                
                var pDeferredRejectActionError = function( theDeferred, theRejection) {
                    
                    if( !this._v_ProminstrSvce) {
                        return;
                    }
                    
                    this._v_ProminstrSvce.pDeferredRejectActionError( theDeferred, theRejection, this);
                };
                if( pDeferredRejectActionError){}/* CQT */
                aPrototype.pDeferredRejectActionError = pDeferredRejectActionError;
                
                
                
                
                
                
                
                var fNewPromiseAll = function( thePromises) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }
                    
                    return this._v_ProminstrSvce.fNewPromiseAll( thePromises, this);
                };
                if( fNewPromiseAll){}/* CQT */
                aPrototype.fNewPromiseAll = fNewPromiseAll;
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var WithProminstr_Constructor = function( theTitle, theIdentifier, theRecorder) {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;
                
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._pInit_WithProminstr( theTitle, theIdentifier, theRecorder);
            };
            WithProminstr_Constructor.prototype = aWithProminstr_Prototype;
            
            
            
            
            
            var WithProminstr_SuperPrototypeConstructor = function() {
                
                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;
                
                this._v_Prototype = aWithProminstr_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            WithProminstr_SuperPrototypeConstructor.prototype = aWithProminstr_Prototype;
            
            
            
            var aModule = {
                "WithProminstr_Prototype": aWithProminstr_Prototype,
                "WithProminstr_Constructor": WithProminstr_Constructor,
                "WithProminstr_SuperPrototypeConstructor": WithProminstr_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            
            aWithProminstr_Prototype._v_Module = aModule;
            
            
            
            
            
            return aModule;
        };
        
        
        
        
        
        
        
        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {
            
            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonType,
                theSS_ProminstrSvce
            );
            anExistingModule = aModule;
            
            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }
        
        
        
        
        
        
        return anExistingModule;
        
    })
]);
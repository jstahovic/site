function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"0S4P":function(e,t){e.exports=ng.common},"g/Wr":function(e,t){e.exports=ng.elements},"vG+p":function(e,t){e.exports=ng.platformBrowser},vOrQ:function(e,t){e.exports=ng.core},zUnb:function(e,t,n){"use strict";n.r(t);var o=n("vOrQ"),r=n("g/Wr"),i=function(){function e(){_classCallCheck(this,e),this._numTimesCustButtonClicked=0,this.custButtonClicked=new o.EventEmitter,this._siteRootAgent=document.querySelector("site-root-agent"),console.log("CustButtonClicker._siteRootAgent: ",this._siteRootAgent)}return _createClass(e,[{key:"onCustButtonClicked",value:function(){this._numTimesCustButtonClicked++,console.log("_numTimesCustButtonClicked",this._numTimesCustButtonClicked),this.custButtonClicked.emit(this._numTimesCustButtonClicked);var e=new CustomEvent("custButtonClickedCustomEvent",{detail:{numTimesCustButtonClicked:this._numTimesCustButtonClicked}});window.dispatchEvent(e),window.EventBus.fire("custButtonClickedCustomEventFromBusListener",{numTimesCustButtonClicked:this._numTimesCustButtonClicked}),this._siteRootAgent&&(this._siteRootAgent.postMessageToConsole("Foo you from CustButtonClicker!"),this._siteRootAgent.fauxHttpRequest("FRUIT",this.fauxHttpRequestListener))}},{key:"fauxHttpRequestListener",value:function(e){console.log("fauxHttpResponse: ",e)}}]),e}(),l=function(){function e(t){_classCallCheck(this,e),this.injector=t}return _createClass(e,[{key:"ngDoBootstrap",value:function(){var e=Object(r.createCustomElement)(i,{injector:this.injector});customElements.define("cust-button-clicker",e)}}]),e}(),s=o["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .cust-button-clicker[_ngcontent-%COMP%]{border-style:solid;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;font-family:sans-serif;-webkit-box-pack:center;justify-content:center;padding:1rem}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block;border:none;padding:1rem 2rem;margin:0;text-decoration:none;background:#0069ed;color:#fff;font-family:sans-serif;font-size:1rem;cursor:pointer;text-align:center;-webkit-transition:background 250ms ease-in-out,-webkit-transform 150ms;transition:background 250ms ease-in-out,-webkit-transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease,-webkit-transform 150ms ease;-webkit-appearance:none;-moz-appearance:none}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#0053ba}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:#fff solid 1px;outline-offset:-4px}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active{-webkit-transform:scale(.99);transform:scale(.99)}"]],data:{}});function u(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","cust-button-clicker"]],null,null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,1,"button",[],null,[[null,"click"]],(function(e,t,n){var o=!0;return"click"===t&&(o=!1!==e.component.onCustButtonClicked()&&o),o}),null,null)),(e()(),o["\u0275ted"](-1,null,["Customer Button"]))],null,null)}var a=o["\u0275ccf"]("ng-component",i,(function(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,u,s)),o["\u0275did"](1,49152,null,0,i,[],null,null)],null,null)}),{},{custButtonClicked:"custButtonClicked"},[]),c=n("0S4P"),m=n("vG+p"),d=o["\u0275cmf"](l,[],(function(e){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](5120,o.LOCALE_ID,o["\u0275angular_packages_core_core_p"],[[3,o.LOCALE_ID]]),o["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[o.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](5120,o["\u0275angular_packages_core_core_ba"],o["\u0275angular_packages_core_core_r"],[o.NgZone]),o["\u0275mpd"](4608,o.Compiler,o.Compiler,[]),o["\u0275mpd"](5120,o.APP_ID,o["\u0275angular_packages_core_core_f"],[]),o["\u0275mpd"](5120,o.IterableDiffers,o["\u0275angular_packages_core_core_n"],[]),o["\u0275mpd"](5120,o.KeyValueDiffers,o["\u0275angular_packages_core_core_o"],[]),o["\u0275mpd"](4608,m.DomSanitizer,m["\u0275DomSanitizerImpl"],[c.DOCUMENT]),o["\u0275mpd"](6144,o.Sanitizer,null,[m.DomSanitizer]),o["\u0275mpd"](4608,m.HAMMER_GESTURE_CONFIG,m.HammerGestureConfig,[]),o["\u0275mpd"](5120,m.EVENT_MANAGER_PLUGINS,(function(e,t,n,o,r,i,l,s){return[new m["\u0275DomEventsPlugin"](e,t,n),new m["\u0275KeyEventsPlugin"](o),new m["\u0275HammerGesturesPlugin"](r,i,l,s)]}),[c.DOCUMENT,o.NgZone,o.PLATFORM_ID,c.DOCUMENT,c.DOCUMENT,m.HAMMER_GESTURE_CONFIG,o["\u0275Console"],[2,m.HAMMER_LOADER]]),o["\u0275mpd"](4608,m.EventManager,m.EventManager,[m.EVENT_MANAGER_PLUGINS,o.NgZone]),o["\u0275mpd"](135680,m["\u0275DomSharedStylesHost"],m["\u0275DomSharedStylesHost"],[c.DOCUMENT]),o["\u0275mpd"](4608,m["\u0275DomRendererFactory2"],m["\u0275DomRendererFactory2"],[m.EventManager,m["\u0275DomSharedStylesHost"],o.APP_ID]),o["\u0275mpd"](6144,o.RendererFactory2,null,[m["\u0275DomRendererFactory2"]]),o["\u0275mpd"](6144,m["\u0275SharedStylesHost"],null,[m["\u0275DomSharedStylesHost"]]),o["\u0275mpd"](4608,o.Testability,o.Testability,[o.NgZone]),o["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),o["\u0275mpd"](1024,o.ErrorHandler,m["\u0275angular_packages_platform_browser_platform_browser_a"],[]),o["\u0275mpd"](1024,o.APP_INITIALIZER,(function(e){return[m["\u0275angular_packages_platform_browser_platform_browser_j"](e)]}),[[2,o.NgProbeToken]]),o["\u0275mpd"](512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o["\u0275mpd"](131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o["\u0275Console"],o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o["\u0275mpd"](1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o["\u0275mpd"](1073742336,m.BrowserModule,m.BrowserModule,[[3,m.BrowserModule]]),o["\u0275mpd"](1073742336,l,l,[o.Injector]),o["\u0275mpd"](256,o["\u0275APP_ROOT"],!0,[])])}));m.platformBrowser().bootstrapModuleFactory(d,{ngZone:"noop"}).catch((function(e){return console.error(e)}))}});
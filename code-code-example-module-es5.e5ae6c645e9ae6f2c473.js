function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{DzVX:function(e,n,i){"use strict";i.r(n);var t=i("ofXK"),o=i("6CTB"),a=i("fXoL"),c=["content"];function s(e,n){if(1&e&&(a.Vb(0,"header"),a.Dc(1),a.Ub()),2&e){var i=a.hc();a.Cb(1),a.Ec(i.header)}}var r,h=["*"],d=((r=function(){function e(){_classCallCheck(this,e),this._path="",this.isAvoid=!1}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this.aioCode.code=this.content.nativeElement.innerHTML}},{key:"header",set:function(e){this._header=e,this.classes={"headed-code":!!this.header,"simple-code":!this.header}},get:function(){return this._header}},{key:"path",set:function(e){this._path=e,this.isAvoid=-1!==this.path.indexOf(".avoid.")},get:function(){return this._path}},{key:"hidecopy",set:function(e){this._hidecopy=null!=e&&"false"!=="".concat(e)},get:function(){return this._hidecopy}},{key:"hyphenatedHideCopy",set:function(e){this.hidecopy=e}},{key:"capitalizedHideCopy",set:function(e){this.hidecopy=e}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Kb({type:r,selectors:[["code-example"]],viewQuery:function(e,n){var i;1&e&&(a.Ac(c,!0),a.Ac(o.a,!0)),2&e&&(a.rc(i=a.ec())&&(n.content=i.first),a.rc(i=a.ec())&&(n.aioCode=i.first))},hostVars:2,hostBindings:function(e,n){2&e&&a.Gb("avoidFile",n.isAvoid)},inputs:{language:"language",linenums:"linenums",region:"region",header:"header",path:"path",hidecopy:"hidecopy",hyphenatedHideCopy:["hide-copy","hyphenatedHideCopy"],capitalizedHideCopy:["hideCopy","capitalizedHideCopy"]},ngContentSelectors:h,decls:5,vars:8,consts:[[2,"display","none"],["content",""],[4,"ngIf"],[3,"ngClass","language","linenums","path","region","hideCopy","header"]],template:function(e,n){1&e&&(a.lc(),a.Vb(0,"div",0,1),a.kc(2),a.Ub(),a.Cc(3,s,2,1,"header",2),a.Rb(4,"aio-code",3)),2&e&&(a.Cb(3),a.mc("ngIf",n.header),a.Cb(1),a.mc("ngClass",n.classes)("language",n.language)("linenums",n.linenums)("path",n.path)("region",n.region)("hideCopy",n.hidecopy)("header",n.header))},directives:[t.k,o.a,t.i],encapsulation:2}),r),p=i("V90o");i.d(n,"CodeExampleModule",(function(){return u}));var l,u=((l=function e(){_classCallCheck(this,e),this.customElementComponent=d}).\u0275mod=a.Ob({type:l}),l.\u0275inj=a.Nb({factory:function(e){return new(e||l)},imports:[[t.c,p.a]]}),l)}}]);
//# sourceMappingURL=code-code-example-module-es5.e5ae6c645e9ae6f2c473.js.map
function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{dth9:function(t,e,i){"use strict";i.r(e);var s,n=i("ofXK"),a=i("tk/3"),c=i("PCNd"),r=i("jtHE"),o=i("itXk"),l=i("lJxs"),u=i("fXoL"),h=i("XNiG"),p=i("1G5W"),f=i("vkgz"),b=i("jn67"),v=i("vHPH"),y=((s=function(){function t(e,i){_classCallCheck(this,t),this.http=e,this.logger=i,this.apiBase=b.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new h.a,this.sectionsSubject=new r.a(1),this._sections=this.sectionsSubject.pipe(Object(p.a)(this.onDestroy))}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.onDestroy.next()}},{key:"fetchSections",value:function(t){var e=this,i=this.apiBase+(t||this.apiListJsonDefault);this.http.get(i).pipe(Object(p.a)(this.onDestroy),Object(f.a)((function(){return e.logger.log("Got API sections from ".concat(i))}))).subscribe((function(t){return e.sectionsSubject.next(t)}),(function(t){throw e.logger.error(t),t}))}},{key:"sections",get:function(){var t=this;return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe((function(e){return t.logger.log("ApiService got API ".concat(e.length," section(s)"))}))),this._sections.pipe(Object(f.a)((function(t){t.forEach((function(t){t.deprecated=!!t.items&&t.items.every((function(t){return"deprecated"===t.stability}))}))})))}}]),t}()).\u0275fac=function(t){return new(t||s)(u.Zb(a.a),u.Zb(v.a))},s.\u0275prov=u.Mb({token:s,factory:s.\u0275fac}),s),d=i("/lUL"),g=i("x4lQ"),m=["filter"];function C(t,e){if(1&t&&(u.Vb(0,"h2"),u.Vb(1,"a",11),u.Dc(2),u.Ub(),u.Ub()),2&t){var i=u.hc().$implicit;u.Cb(1),u.Gb("deprecated-api-item",i.deprecated),u.mc("href",i.path,u.xc),u.Cb(1),u.Ec(i.title)}}function S(t,e){if(1&t&&(u.Tb(0),u.Vb(1,"li",13),u.Vb(2,"a",11),u.Rb(3,"span"),u.Dc(4),u.Ub(),u.Ub(),u.Sb()),2&t){var i=e.$implicit;u.Cb(2),u.Gb("deprecated-api-item","deprecated"===i.stability),u.mc("href",i.path,u.xc),u.Cb(1),u.Fb("symbol ",i.docType,""),u.Cb(1),u.Fc(" ",i.title," ")}}function k(t,e){if(1&t&&(u.Vb(0,"ul",12),u.Cc(1,S,5,7,"ng-container",8),u.Ub()),2&t){var i=u.hc().$implicit;u.Cb(1),u.mc("ngForOf",i.items)}}function w(t,e){if(1&t&&(u.Vb(0,"div"),u.Cc(1,C,3,4,"h2",9),u.Cc(2,k,2,1,"ul",10),u.Ub()),2&t){var i=e.$implicit;u.Cb(1),u.mc("ngIf",i.items),u.Cb(1),u.mc("ngIf",i.items&&i.items.length)}}var j,O=function t(){_classCallCheck(this,t),this.query="",this.status="all",this.type="all"},T=((j=function(){function t(e,i){_classCallCheck(this,t),this.apiService=e,this.locationService=i,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new r.a(1),this.searchCriteria=new O,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"stable",title:"Stable"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.filteredSections=Object(o.a)([this.apiService.sections,this.criteriaSubject]).pipe(Object(l.a)((function(t){return{sections:t[0],criteria:t[1]}})),Object(l.a)((function(e){return e.sections.map((function(i){return Object.assign(Object.assign({},i),{items:t.filterSection(i,e.criteria)})}))}))),this.initializeSearchCriteria()}},{key:"setQuery",value:function(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}},{key:"setStatus",value:function(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}},{key:"setType",value:function(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}},{key:"toggleStatusMenu",value:function(){this.showStatusMenu=!this.showStatusMenu}},{key:"toggleTypeMenu",value:function(){this.showTypeMenu=!this.showTypeMenu}},{key:"filterSection",value:function(t,e){var i=e.query,s=e.status,n=e.type,a=!i||-1!==t.name.indexOf(i),c=t.items.filter((function(t){return function(t){return"all"===n||n===t.docType}(t)&&function(t){return"all"===s||s===t.stability||"security-risk"===s&&t.securityRisk}(t)&&function(t){return a||-1!==t.name.indexOf(i)}(t)}));return c.length?c:a&&"package"===n?[]:null}},{key:"initializeSearchCriteria",value:function(){var t=this.locationService.search(),e=t.query,i=t.status,s=t.type,n=(e||"").toLowerCase();this.queryEl.nativeElement.value=n,this.status=this.statuses.find((function(t){return t.value===i}))||this.statuses[0],this.type=this.types.find((function(t){return t.value===s}))||this.types[0],this.searchCriteria={query:n,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}},{key:"setLocationSearch",value:function(){var t=this.searchCriteria,e=t.query,i=t.status,s=t.type;this.locationService.setSearch("API Search",{query:e||void 0,status:"all"!==i?i:void 0,type:"all"!==s?s:void 0})}},{key:"setSearchCriteria",value:function(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}]),t}()).\u0275fac=function(t){return new(t||j)(u.Qb(y),u.Qb(d.a))},j.\u0275cmp=u.Kb({type:j,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&u.Ac(m,!0),2&t&&u.rc(i=u.ec())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","Filter","aria-label","Filter Search",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"aio-select",1),u.dc("change",(function(t){return e.setType(t.option)})),u.Ub(),u.Vb(2,"aio-select",2),u.dc("change",(function(t){return e.setStatus(t.option)})),u.Ub(),u.Vb(3,"div",3),u.Vb(4,"input",4,5),u.dc("input",(function(t){return e.setQuery(t.target.value)})),u.Ub(),u.Vb(6,"i",6),u.Dc(7,"search"),u.Ub(),u.Ub(),u.Ub(),u.Vb(8,"article",7),u.Cc(9,w,3,2,"div",8),u.ic(10,"async"),u.Ub()),2&t&&(u.Cb(1),u.mc("options",e.types)("selected",e.type)("showSymbol",!0),u.Cb(1),u.mc("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),u.Cb(7),u.mc("ngForOf",u.jc(10,7,e.filteredSections)))},directives:[g.a,n.j,n.k],pipes:[n.b],encapsulation:2}),j);i.d(e,"ApiListModule",(function(){return _}));var U,_=((U=function t(){_classCallCheck(this,t),this.customElementComponent=T}).\u0275mod=u.Ob({type:U}),U.\u0275inj=u.Nb({factory:function(t){return new(t||U)},providers:[y],imports:[[n.c,c.a,a.b]]}),U)}}]);
//# sourceMappingURL=api-api-list-module-es5.8d22b04eb16dc1c51bc2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fPy6:function(t,n,c){"use strict";c.r(n);var o=c("ofXK"),e=c("NFeN"),r=c("fXoL"),i=c("lJxs"),s=c("qZ0a"),u=c("jn67"),a=c("tk/3");const b=u.a+"contributors.json",p=["Angular","Collaborators","GDE"];let l=(()=>{class t{constructor(t){this.http=t,this.contributors=this.getContributors()}getContributors(){const t=this.http.get(b).pipe(Object(i.a)(t=>{const n={};return Object.keys(t).forEach(c=>{const o=t[c];o.groups.forEach(t=>{(n[t]||(n[t]=[])).push(o)})}),n}),Object(i.a)(t=>Object.keys(t).map(n=>{const c=p.indexOf(n);return{name:n,order:-1===c?p.length:c,contributors:t[n].sort(f)}}).sort(d)),Object(s.a)());return t.connect(),t}}return t.\u0275fac=function(n){return new(n||t)(r.Zb(a.a))},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac}),t})();function f(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function d(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var m=c("/lUL");function g(t,n){1&t&&(r.Vb(0,"a",7),r.Dc(1," View Bio "),r.Ub())}function h(t,n){if(1&t){const t=r.Wb();r.Vb(0,"a",8),r.dc("click",(function(n){return r.vc(t),n.stopPropagation()})),r.Rb(1,"mat-icon",9),r.Ub()}if(2&t){const t=r.hc();r.oc("href","https://twitter.com/",t.person.twitter,"",r.xc)}}function k(t,n){if(1&t){const t=r.Wb();r.Vb(0,"a",8),r.dc("click",(function(n){return r.vc(t),n.stopPropagation()})),r.Vb(1,"mat-icon",10),r.Dc(2,"link"),r.Ub(),r.Ub()}if(2&t){const t=r.hc();r.nc("href",t.person.website,r.xc)}}function C(t,n){if(1&t){const t=r.Wb();r.Vb(0,"div",11),r.dc("click",(function(n){r.vc(t);const c=r.hc();return c.flipCard(c.person)}))("keyup.enter",(function(n){r.vc(t);const c=r.hc();return c.flipCard(c.person)})),r.Vb(1,"h3"),r.Dc(2),r.Ub(),r.Vb(3,"p",12),r.Dc(4),r.Ub(),r.Ub()}if(2&t){const t=r.hc();r.Cb(2),r.Ec(t.person.name),r.Cb(2),r.Ec(t.person.bio)}}const v=function(t){return{flipped:t}};let w=(()=>{class t{constructor(){this.noPicture="_no-one.png",this.pictureBase=u.a+"images/bios/"}flipCard(t){t.isFlipped=!t.isFlipped}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Kb({type:t,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(t,n){1&t&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.dc("click",(function(t){return n.flipCard(n.person)}))("keyup.enter",(function(t){return n.flipCard(n.person)})),r.Vb(2,"h3"),r.Dc(3),r.Ub(),r.Vb(4,"div",2),r.Vb(5,"div",3),r.Cc(6,g,2,0,"a",4),r.Cc(7,h,2,1,"a",5),r.Cc(8,k,3,1,"a",5),r.Ub(),r.Ub(),r.Ub(),r.Cc(9,C,5,2,"div",6),r.Ub()),2&t&&(r.mc("ngClass",r.pc(8,v,n.person.isFlipped)),r.Cb(3),r.Ec(n.person.name),r.Cb(1),r.Bc("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")",r.Jb),r.Cb(2),r.mc("ngIf",n.person.bio),r.Cb(1),r.mc("ngIf",n.person.twitter),r.Cb(1),r.mc("ngIf",n.person.website),r.Cb(1),r.mc("ngIf",n.person.isFlipped))},directives:[o.i,o.k,e.a],encapsulation:2}),t})();function U(t,n){if(1&t){const t=r.Wb();r.Vb(0,"a",3),r.dc("click",(function(c){r.vc(t);const o=n.$implicit;return r.hc().selectGroup(o)}))("keyup.enter",(function(c){r.vc(t);const o=n.$implicit;return r.hc().selectGroup(o)})),r.Dc(1),r.Ub()}if(2&t){const t=n.$implicit,c=r.hc();r.Gb("selected",t==c.selectedGroup.name),r.Cb(1),r.Ec(t)}}function V(t,n){1&t&&r.Rb(0,"aio-contributor",7),2&t&&r.mc("person",n.$implicit)}function y(t,n){if(1&t&&(r.Vb(0,"section",4),r.Vb(1,"div",5),r.Cc(2,V,1,1,"aio-contributor",6),r.Ub(),r.Ub()),2&t){const t=r.hc();r.Cb(2),r.mc("ngForOf",t.selectedGroup.contributors)}}let O=(()=>{class t{constructor(t,n){this.contributorService=t,this.locationService=n}ngOnInit(){const t=this.locationService.search().group||"";this.contributorService.contributors.subscribe(n=>{this.groups=n,this.groupNames=n.map(t=>t.name),this.selectGroup(t)})}selectGroup(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find(n=>n.name.toLowerCase()===t)||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}return t.\u0275fac=function(n){return new(n||t)(r.Qb(l),r.Qb(m.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(r.Vb(0,"div",0),r.Cc(1,U,2,3,"a",1),r.Ub(),r.Cc(2,y,3,1,"section",2)),2&t&&(r.Cb(1),r.mc("ngForOf",n.groupNames),r.Cb(1),r.mc("ngIf",n.selectedGroup))},directives:[o.j,o.k,w],encapsulation:2}),t})();c.d(n,"ContributorListModule",(function(){return F}));let F=(()=>{class t{constructor(){this.customElementComponent=O}}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(n){return new(n||t)},providers:[l],imports:[[o.c,e.b]]}),t})()}}]);
//# sourceMappingURL=contributor-contributor-list-module-es2015.6d24cdabbf23c0611975.js.map
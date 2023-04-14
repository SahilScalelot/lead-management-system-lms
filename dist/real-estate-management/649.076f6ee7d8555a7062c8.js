"use strict";(self.webpackChunkRealEstateManagement=self.webpackChunkRealEstateManagement||[]).push([[649],{3649:(Q,l,o)=>{o.r(l),o.d(l,{AdminModule:()=>N});var g=o(8583),c=o(3423),h=o(2789),m=o(9983),f=o(9692),u=o(7937),p=o(6627),v=o(1095),x=o(4466),A=o(7157),O=o(5396),F=o(6063),b=o(3220),C=o(7441),y=o(3679),M=o(8288),T=o(1170),Z=o(3815),n=o(7716),r=o(2340),L=o(1841),d=o(4806);let I=(()=>{class s{constructor(t,e){this.http=t,this._globalFunctions=e}getAgents(t={}){return this.http.post(r.N.appURL+"agents",t,this._globalFunctions.getFileAuthorizationHeader())}getOrganizer(t=""){return this.http.post(r.N.appURL+"agents/getorganiser",{agentid:t},this._globalFunctions.getAuthorizationHeader())}}return s.\u0275fac=function(t){return new(t||s)(n.LFG(L.eN),n.LFG(d.E))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var P=o(1400);const S=["myTable"];function j(s,i){1&s&&(n.TgZ(0,"div",9),n._UZ(1,"mat-progress-bar",10),n.qZA()),2&s&&(n.xp6(1),n.Q6J("mode","indeterminate"))}function R(s,i){1&s&&n.GkF(0)}function z(s,i){1&s&&(n.TgZ(0,"div",11),n._uU(1,"There are no Organizer! "),n.qZA())}let D=(()=>{class s{constructor(t,e,a,U){this._agentService=t,this._globalFunctions=e,this._changeDetectorRef=a,this._fuseConfirmationService=U,this.isLoading=!1,this.constants=T.t,this.searchInputControl=new y.NI,this.flashMessage=null,this.pagination={},this.filterObj={}}ngOnInit(){this.filterObj={page:"1",limit:"10",search:""},this.getAgents(),this.search=Z.debounce(this.search,500)}getAgents(){this.isLoading=!0,this._agentService.getAgents(this.filterObj).subscribe(t=>{if(t&&t.IsSuccess){this.products=t.Data.docs,console.log(this.products);const e=this._globalFunctions.copyObject(t.Data);delete e.docs,this.pagination=e}else this._globalFunctions.successErrorHandling(t,this,!0);this.isLoading=!1},t=>{this._globalFunctions.errorHanding(t,this,!0),this.isLoading=!1})}sortField(t=""){this.filterObj.sortfield=(null==t?void 0:t.active)||"_id",this.filterObj.sortoption=(null==t?void 0:t.direction)||"-1",this.getAgents()}paginate(t){this.filterObj.page=(t?t.pageIndex+1:1)||"1",this.filterObj.limit=(null==t?void 0:t.pageSize)||"10",this.getAgents()}search(t){var e;this.filterObj.search=(null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.value)||"",this.getAgents()}closeDetails(){this.selectedProduct=null,this.selectedProductArr=null}toggleDetails(t={}){const e=this._globalFunctions.copyObject(this.selectedProduct||{});e&&e._id===t._id?this.closeDetails():(this.selectedProduct=t,this.getOrganizer(t._id))}getOrganizer(t=""){this.isLoading=!0,this._agentService.getOrganizer(t).subscribe(e=>{e&&e.IsSuccess?(console.log(e),this.selectedProductArr=null==e?void 0:e.Data):this._globalFunctions.successErrorHandling(e,this,!0),this.isLoading=!1},e=>{this._globalFunctions.errorHanding(e,this,!0),this.isLoading=!1})}showFlashMessage(t){this.flashMessage=t,this._changeDetectorRef.markForCheck(),setTimeout(()=>{this.flashMessage=null,this._changeDetectorRef.markForCheck()},3e3)}toggleExpandRow(t){console.log("Toggled Expand Row!",t),this.table.rowDetail.toggleExpandRow(t)}}return s.\u0275fac=function(t){return new(t||s)(n.Y36(I),n.Y36(d.E),n.Y36(n.sBO),n.Y36(P.R))},s.\u0275cmp=n.Xpm({type:s,selectors:[["agent"]],viewQuery:function(t,e){if(1&t&&n.Gf(S,5),2&t){let a;n.iGM(a=n.CRH())&&(e.table=a.first)}},decls:12,vars:3,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],["class","absolute inset-x-0 bottom-0",4,"ngIf"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],[4,"ngIf","ngIfElse"],["noProducts",""],[1,"absolute","inset-x-0","bottom-0"],[3,"mode"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.YNc(2,j,2,1,"div",2),n.TgZ(3,"div",3),n._uU(4,"Agents"),n.qZA(),n._UZ(5,"div",4),n.qZA(),n.TgZ(6,"div",5),n.TgZ(7,"div",6),n.ynx(8),n.YNc(9,R,1,0,"ng-container",7),n.BQk(),n.YNc(10,z,2,0,"ng-template",null,8,n.W1O),n.qZA(),n.qZA(),n.qZA()),2&t){const a=n.MAs(11);n.xp6(2),n.Q6J("ngIf",e.isLoading),n.xp6(7),n.Q6J("ngIf",e.products&&e.products.length>0)("ngIfElse",a)}},directives:[g.O5],styles:[".inventory-grid[_ngcontent-%COMP%]{grid-template-columns:48px auto 40px}@media (min-width: 600px){.inventory-grid[_ngcontent-%COMP%]{grid-template-columns:180px auto 200px 150px 72px 72px}}@media (min-width: 960px){.inventory-grid[_ngcontent-%COMP%]{grid-template-columns:180px auto 200px 150px 72px 72px}}@media (min-width: 1280px){.inventory-grid[_ngcontent-%COMP%]{grid-template-columns:180px auto 200px 150px 72px 72px}}"],data:{animation:M.L}}),s})();var E=o(7539),Y=o(9073);const H=[{path:"",redirectTo:"agents"},{path:"agents",component:D},{path:"sites",loadChildren:()=>o.e(391).then(o.bind(o,6391)).then(s=>s.SitesModule)}];let N=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[c.Bz.forChild(H),g.ez,h.p0,m.c,f.TU,u.w,p.Ps,O.rP,x.m,A.JX,v.ot,b.FA,F.Yd,C.LD,E.p9,Y.LeadManagerModule]]}),s})()}}]);
(()=>{var U=Object.defineProperty;var R=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(o,s,t)=>s in o?U(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,g=(o,s)=>{for(var t in s||(s={}))E.call(s,t)&&S(o,t,s[t]);if(R)for(var t of R(s))j.call(s,t)&&S(o,t,s[t]);return o};(self.webpackChunk=self.webpackChunk||[]).push([[20016],{79717:function(o){function s(t,u,c){return t===t&&(c!==void 0&&(t=t<=c?t:c),u!==void 0&&(t=t>=u?t:u)),t}o.exports=s},8780:function(o,s,t){var u=t(79717),c=t(56705);function f(p,a,i){return i===void 0&&(i=a,a=void 0),i!==void 0&&(i=c(i),i=i===i?i:0),a!==void 0&&(a=c(a),a=a===a?a:0),u(c(p),a,i)}o.exports=f},56705:function(o,s,t){var u=t(70071),c=t(34655),f=0/0,p=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,v=/^0o[0-7]+$/i,x=parseInt;function h(n){if(typeof n=="number")return n;if(c(n))return f;if(u(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=u(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=n.replace(p,"");var l=i.test(n);return l||v.test(n)?x(n.slice(2),l?2:8):a.test(n)?f:+n}o.exports=h},14682:function(o,s,t){"use strict";t.d(s,{Z:function(){return h}});var u=function(){var n=this,r=n.$createElement,l=n._self._c||r;return l("wrapper",{attrs:{id:n.TYPE_GROUPS+"/"+n.id+"/"+n.TYPE_GROUPS_IMAGE}},[l("image-element",n._b({},"image-element",n.imageProps,!1))],1)},c=[],f=t(91366),p=t(1888),a={name:"ImageWrapper",components:{ImageElement:f.Z},props:{id:{type:[String,Number],required:!0},image:{type:Object,required:!0},settings:{type:Object,required:!0}},data(){return{TYPE_GROUPS:p.pU,TYPE_GROUPS_IMAGE:p.Lv}},computed:{imageProps(){const{figure:n,link:r,alt:l}=this.image;return g({key:n.source,image:n,link:r,alt:l},this.settings)}}},i=a,v=t(51900),x=(0,v.Z)(i,u,c,!1,null,null,null),h=x.exports},10200:function(o,s,t){"use strict";t.r(s),t.d(s,{default:function(){return C}});var u=function(){var e=this,m=e.$createElement,d=e._self._c||m;return e.shouldHideBlock?d("div"):d("block",{attrs:{background:e.blockBackground,"text-align":e.resolvedTextAlign}},[d("container",{attrs:{direction:"col"}},e._l(e.items,function(y){return d("text-image-row-mirror",{key:y.id,attrs:{state:y,settings:e.resolvedSettings}})}),1)],1)},c=[],f=t(54299),p=t.n(f),a=t(6213),i=t(36666),v=function(){var e=this,m=e.$createElement,d=e._self._c||m;return d("row",e._b({staticClass:"text-image-row"},"row",e.row,!1),[d("wrapper",{attrs:{id:e.TYPE_GROUPS+"/"+e.state.id}},[d("container",{class:e.textImageRowClasses,attrs:{direction:"row"}},[d("column",e._b({},"column",e.textColumn,!1),[d("container",{attrs:{direction:"col"}},[d("content-stack",{attrs:{label:e.callout,title:e.title,text:e.text,button:e.button,"button-secondary":e.buttonSecondary}})],1)],1),e._v(" "),d("column",e._b({},"column",e.imageColumn,!1),[e.settings.images.hidden?e._e():d("image-wrapper",{attrs:{id:e.state.id,image:e.state.image,settings:e.settings.images}})],1)],1)],1)],1)},x=[],h=t(43254),n=t(22952),r=t(1888),l=t(14682),T={name:"TextImageRow",components:{ImageWrapper:l.Z,ContentStack:h.Z},props:{state:{type:Object,required:!0},settings:{type:Object,required:!0}},data(){return{TYPE_GROUPS:r.pU,defaults:(0,a.I1)(),row:{options:{gutterMultiplier:{row:{xs:{bottom:3}}}}}}},computed:{title(){const{id:e,title:m={}}=this.state;return g({id:"".concat(r.pU,"/").concat(e,"/").concat(r.iw),contents:m.content},this.settings.titles)},callout(){const{id:e,callout:m={}}=this.state;return g({id:"".concat(r.pU,"/").concat(e,"/").concat(r.No),contents:m.content},this.settings.callouts)},text(){const{id:e,text:m={}}=this.state;return g({id:"".concat(r.pU,"/").concat(e,"/").concat(r.w_),contents:m.content},this.settings.texts)},button(){const{id:e,button:m={}}=this.state;return g(g({id:"".concat(r.pU,"/").concat(e,"/").concat(r.LW)},m),this.settings.buttons)},buttonSecondary(){const{id:e,secondaryButton:m={}}=this.state;return g(g({id:"".concat(r.pU,"/").concat(e,"/").concat(r.ei)},m),this.settings.secondaryButtons)},textImageRowClasses(){return{"text-image-container":this.imageSize===n.OM}},imageSize(){return this.settings.images.size||n.OM},imageColumn(){return{columns:{xs:[n.zp,n.Qv].includes(this.imageSize)?4:12,sm:(()=>{switch(this.imageSize){case n.zp:return 2;case n.Qv:return 4;default:return 6}})()},options:{gutterMultiplier:{row:{xs:{bottom:this.imageSize===n.OM?2:0},sm:{bottom:0},md:{bottom:0},lg:{bottom:0}}},offsets:{sm:1}}}},textColumn(){return{columns:{xs:[n.zp,n.Qv].includes(this.imageSize)?8:12,sm:this.imageSize===n.Qv?7:5},options:{offsets:{sm:this.imageSize===n.zp?2:0}}}}}},b=T,I=t(51900),M=(0,I.Z)(b,v,x,!1,null,"036f7d02",null),O=M.exports,_={name:"TextAndImageRowMirror",components:{TextImageRowMirror:O},extends:i.Z,computed:{items(){return this.repeatables.length?this.repeatables:(0,a.B3)(1)},resolvedSettings(){const e={callouts:{hidden:!0},titles:{tag:"h2"},buttons:{hidden:!0},secondaryButtons:{hidden:!0}};return p()({},(0,a.I1)(),e,this.settings)}}},z=_,P=(0,I.Z)(z,u,c,!1,null,null,null),C=P.exports}}]);})();
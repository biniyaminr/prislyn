(()=>{var y=Object.defineProperty,R=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(p,r,t)=>r in p?y(p,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[r]=t,h=(p,r)=>{for(var t in r||(r={}))z.call(r,t)&&_(p,t,r[t]);if(E)for(var t of E(r))U.call(r,t)&&_(p,t,r[t]);return p},P=(p,r)=>R(p,b(r));(self.webpackChunk=self.webpackChunk||[]).push([[53984],{79717:function(p){function r(t,u,m){return t===t&&(m!==void 0&&(t=t<=m?t:m),u!==void 0&&(t=t>=u?t:u)),t}p.exports=r},8780:function(p,r,t){var u=t(79717),m=t(56705);function d(o,a,i){return i===void 0&&(i=a,a=void 0),i!==void 0&&(i=m(i),i=i===i?i:0),a!==void 0&&(a=m(a),a=a===a?a:0),u(m(o),a,i)}p.exports=d},56705:function(p,r,t){var u=t(70071),m=t(34655),d=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt;function s(n){if(typeof n=="number")return n;if(m(n))return d;if(u(n)){var l=typeof n.valueOf=="function"?n.valueOf():n;n=u(l)?l+"":l}if(typeof n!="string")return n===0?n:+n;n=n.replace(o,"");var f=i.test(n);return f||v.test(n)?g(n.slice(2),f?2:8):a.test(n)?d:+n}p.exports=s},69594:function(p,r,t){"use strict";t.d(r,{l:function(){return v}});var u=t(54299),m=t.n(u),d=t(20643),o=t.n(d),a=t(22952),i=t(6213);function v(g){let s={};return o()(g,"images.aspectRatio")===a.$_&&(s={images:{aspectRatio:(0,i.I1)().images.aspectRatio}}),m()({},g,s)}},65301:function(p,r,t){"use strict";t.d(r,{Z:function(){return s}});var u=function(){var n=this,l=n.$createElement,f=n._self._c||l;return f("wrapper",{attrs:{id:n.TYPE_GROUPS+"/"+n.id+"/"+n.TYPE_GROUPS_BUTTON}},[f("button-element",{attrs:{label:n.button.label,link:n.button.link,"preset-size":n.settings.presetSize,"preset-style":n.settings.presetStyle,"preset-color":n.settings.presetColor,"fullwidth-mobile":n.settings.fullwidthMobile}})],1)},m=[],d=t(67564),o=t(1888),a={name:"TextWrapper",components:{ButtonElement:d.Z},props:{id:{type:[String,Number],required:!0},button:{type:Object,required:!0},settings:{type:Object,required:!0}},data(){return{TYPE_GROUPS:o.pU,TYPE_GROUPS_BUTTON:o.LW}}},i=a,v=t(51900),g=(0,v.Z)(i,u,m,!1,null,null,null),s=g.exports},14682:function(p,r,t){"use strict";t.d(r,{Z:function(){return s}});var u=function(){var n=this,l=n.$createElement,f=n._self._c||l;return f("wrapper",{attrs:{id:n.TYPE_GROUPS+"/"+n.id+"/"+n.TYPE_GROUPS_IMAGE}},[f("image-element",n._b({},"image-element",n.imageProps,!1))],1)},m=[],d=t(91366),o=t(1888),a={name:"ImageWrapper",components:{ImageElement:d.Z},props:{id:{type:[String,Number],required:!0},image:{type:Object,required:!0},settings:{type:Object,required:!0}},data(){return{TYPE_GROUPS:o.pU,TYPE_GROUPS_IMAGE:o.Lv}},computed:{imageProps(){const{figure:n,link:l,alt:f}=this.image;return h({key:n.source,image:n,link:l,alt:f},this.settings)}}},i=a,v=t(51900),g=(0,v.Z)(i,u,m,!1,null,null,null),s=g.exports},55981:function(p,r,t){"use strict";t.d(r,{Z:function(){return g}});var u=function(){var s=this,n=s.$createElement,l=s._self._c||n;return l("column",{attrs:{options:s.sectionTitleTextSpacing}},[s.title.hidden?s._e():l("row",[l("wrapper",{attrs:{id:s.TYPE_SECTION_TITLE}},[l("w-text",s._b({attrs:{contents:s.title.title,tag:"h3"}},"w-text",s.title,!1))],1)],1),s._v(" "),s.text.hidden?s._e():l("row",{attrs:{options:s.sectionTextSpacing}},[l("wrapper",{attrs:{id:s.TYPE_SECTION_TEXT}},[l("w-text",s._b({attrs:{contents:s.text.content,tag:"p"}},"w-text",s.text,!1))],1)],1)],1)},m=[],d=t(1888),o={name:"SectionTitleText",props:{title:{type:Object,default:()=>({})},text:{type:Object,default:()=>({})}},data(){return{sectionTitleTextSpacing:{gutterMultiplier:{row:{xs:{top:0,bottom:2},sm:{top:0,bottom:2},md:{top:0,bottom:2},lg:{top:0,bottom:2},xl:{top:0,bottom:2}}}},sectionTextSpacing:{gutterMultiplier:{row:{xs:{top:1,bottom:2},sm:{top:1,bottom:2},md:{top:1,bottom:2},lg:{top:1,bottom:2},xl:{top:1,bottom:2}}}},TYPE_SECTION_TITLE:d.rf,TYPE_SECTION_TEXT:d.Rj}}},a=o,i=t(51900),v=(0,i.Z)(a,u,m,!1,null,"2939dc27",null),g=v.exports},58683:function(p,r,t){"use strict";t.d(r,{Z:function(){return O}});var u=function(){var e=this,T=e.$createElement,c=e._self._c||T;return c("wrapper",{attrs:{id:e.TYPE_GROUPS+"/"+e.state.id}},[c("container",{attrs:{direction:"row"}},[e.showTitleAboveImage&&!e.settings.titles.hidden?c("column",e._b({staticClass:"text-col"},"column",e.titleAboveImageCol,!1),[c("container",{attrs:{direction:"col"}},[c("row",[c("title-wrapper",{attrs:{id:e.state.id,title:e.state.title.content,settings:e.settings.titles}})],1)],1)],1):e._e(),e._v(" "),e.settings.images.hidden?e._e():c("column",e._b({},"column",e.imageCol,!1),[c("image-wrapper",{class:e.imageClasses,attrs:{id:e.state.id,image:e.state.image,settings:e.settings.images}})],1),e._v(" "),c("column",e._b({staticClass:"text-col"},"column",e.textCol,!1),[c("container",{attrs:{direction:"col"}},[!e.showTitleAboveImage&&!e.settings.titles.hidden?c("row",[c("title-wrapper",{attrs:{id:e.state.id,title:e.state.title.content,settings:e.settings.titles}})],1):e._e(),e._v(" "),e.settings.texts.hidden?e._e():c("row",[c("text-wrapper",{attrs:{id:e.state.id,text:e.state.text,settings:e.settings.texts}})],1),e._v(" "),e.settings.buttons.hidden?e._e():c("row",[c("button-wrapper",{attrs:{id:e.state.id,button:e.state.button,settings:e.settings.buttons}})],1)],1)],1)],1)],1)},m=[],d=t(26564),o=t(22952),a=t(6213),i=t(1888),v=t(14682),g=t(65301),s=t(3290),n=t(12978),l={name:"TextImageColumn",components:{ImageWrapper:v.Z,ButtonWrapper:g.Z,TitleWrapper:s.Z,TextWrapper:n.Z},props:{state:{type:Object,required:!0},settings:{type:Object,required:!0},imageCenteredOnDesktop:{type:Boolean,default:!1},titleAboveImage:{type:Boolean,default:!1}},data(){return{TYPE_GROUPS:i.pU,defaults:(0,a.I1)()}},computed:P(h({},(0,d.mapState)(["viewportSize"])),{imageSize(){return this.settings.images.size||o.OM},imageClasses(){return{"sm-image":this.imageSize===o.zp}},imageCol(){return{columns:{xs:this.imageSize===o.OM?12:4,sm:12},options:{gutterMultiplier:{row:{xs:{bottom:(()=>this.imageSize===o.OM?this.titleAboveImage?1:2:0)()},sm:{bottom:this.titleAboveImage?1:2}}}}}},showTitleAboveImage(){const e=this.viewportSize==="xs"&&this.imageSize!==o.OM;return this.titleAboveImage&&!e},textCol(){return{columns:{xs:this.imageSize===o.OM?12:8,sm:12}}},titleAboveImageCol(){return{columns:{xs:12},options:{gutterMultiplier:{row:{xs:{bottom:1}}}}}}})},f=l,x=t(51900),S=(0,x.Z)(f,u,m,!1,null,"581a28b4",null),O=S.exports},12978:function(p,r,t){"use strict";t.d(r,{Z:function(){return s}});var u=function(){var n=this,l=n.$createElement,f=n._self._c||l;return f("wrapper",{attrs:{id:n.TYPE_GROUPS+"/"+n.id+"/"+n.TYPE_GROUPS_TEXT}},[f("text-element",{attrs:{content:n.text.content,color:n.text.color,"font-family":n.settings.fontFamily,"font-size":n.settings.fontSize,align:n.settings.align}})],1)},m=[],d=t(66196),o=t(1888),a={name:"TextWrapper",components:{TextElement:d.Z},props:{id:{type:[String,Number],required:!0},text:{type:[String,Object],required:!0},settings:{type:Object,required:!0}},data(){return{TYPE_GROUPS:o.pU,TYPE_GROUPS_TEXT:o.w_}}},i=a,v=t(51900),g=(0,v.Z)(i,u,m,!1,null,null,null),s=g.exports},3290:function(p,r,t){"use strict";t.d(r,{Z:function(){return g}});var u=function(){var s=this,n=s.$createElement,l=s._self._c||n;return l("wrapper",{attrs:{id:s.TYPE_GROUPS+"/"+s.id+"/"+s.TYPE_GROUPS_TITLE}},[l("w-text",s._b({attrs:{contents:s.title}},"w-text",s.settings,!1))],1)},m=[],d=t(1888),o={name:"TitleWrapper",props:{id:{type:[String,Number],required:!0},title:{type:[String,Object],required:!0},settings:{type:Object,required:!0}},data(){return{TYPE_GROUPS:d.pU,TYPE_GROUPS_TITLE:d.iw}}},a=o,i=t(51900),v=(0,i.Z)(a,u,m,!1,null,null,null),g=v.exports},69050:function(p,r,t){"use strict";t.r(r),t.d(r,{default:function(){return O}});var u=function(){var e=this,T=e.$createElement,c=e._self._c||T;return e.shouldHideBlock?c("div"):c("block",{attrs:{align:"top",background:e.blockBackground,"text-align":e.resolvedTextAlign}},[c("container",{attrs:{direction:"row"}},[c("column",e._b({},"column",e.wrapperCol,!1),[!e.resolvedSectionTitle.hidden||!e.resolvedSectionText.hidden?c("section-title-text",{attrs:{title:e.resolvedSectionTitle,text:e.resolvedSectionText}}):e._e(),e._v(" "),c("w-grid",{attrs:{items:e.items,columns:e.columns,"column-size":e.colGap,"row-size":"xlarge","row-column-locked":!1},scopedSlots:e._u([{key:"item",fn:function(I){var C=I.item;return[c("text-image-column",{attrs:{state:C,settings:e.resolvedSettings,"image-centered-on-desktop":e.imageCenteredOnDesktop}})]}}],null,!1,3933331709)})],1)],1)],1)},m=[],d=t(54299),o=t.n(d),a=t(22952),i=t(6213),v=t(69594),g=t(36666),s=t(58683),n=t(55981),l={name:"TextAndImage2ColumnCentered",components:{TextImageColumn:s.Z,SectionTitleText:n.Z},extends:g.Z,data(){return{defaultTextAlign:"center"}},computed:{imageCenteredOnDesktop(){return this.imageSize===a.zp},imageSize(){return this.resolvedSettings.images.size},items(){return this.repeatables.length?this.repeatables:(0,i.B3)(2)},resolvedSettings(){const e={titles:{tag:"h3"},images:{size:a.zp}},T=o()({},(0,i.I1)(),e,this.settings);return(0,v.l)(T)},colGap(){const e=this.columnCount>3?"xlarge":"xxlarge";return this.imageSize===a.Qv?e:"medium"},wrapperCol(){return{columns:{xs:12,sm:this.imageSize===a.OM||this.columnCount>2?12:8},options:{offsets:{sm:this.imageSize===a.OM||this.columnCount>2?0:2}}}},columns(){return{xs:1,sm:1,md:this.columnCount,lg:this.columnCount,xl:this.columnCount}}}},f=l,x=t(51900),S=(0,x.Z)(f,u,m,!1,null,null,null),O=S.exports}}]);})();
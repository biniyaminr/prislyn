(()=>{(self.webpackChunk=self.webpackChunk||[]).push([[2709],{79717:function(c){function l(e,n,a){return e===e&&(a!==void 0&&(e=e<=a?e:a),n!==void 0&&(e=e>=n?e:n)),e}c.exports=l},8780:function(c,l,e){var n=e(79717),a=e(56705);function d(r,o,i){return i===void 0&&(i=o,o=void 0),i!==void 0&&(i=a(i),i=i===i?i:0),o!==void 0&&(o=a(o),o=o===o?o:0),n(a(r),o,i)}c.exports=d},837:function(c,l,e){"use strict";e.r(l),e.d(l,{default:function(){return v}});var n=function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("header-background",t._b({},"header-background",t.blockBackground,!1),[s("div",{ref:"headerContent",staticClass:"w-header header-6 container",class:t.classes,style:t.blockStyles},[s("container",{staticClass:"header__content-container",attrs:{direction:"col"}},[s("row",{staticClass:"header__top header__condensed",class:{header__sticky:t.isStickyMode},attrs:{options:t.headerOptions}},[s("header-hamburger-icon",{staticClass:"header__hamburger",attrs:{properties:t.getElementProps(t.HAMBURGER_PURPOSE),visible:!t.isSearchOpen&&t.isNavVisible}}),t._v(" "),s("header-logo",{staticClass:"header__logo",attrs:{visible:!t.isSearchOpen,properties:t.getElementProps(t.LOGO_PURPOSE)}}),t._v(" "),t.isOverContent&&t.isNavVisible?s("header-navigation",{staticClass:"header__navigation display-desktop",attrs:{visible:!t.isSearchOpen,properties:t.navProps}}):t._e(),t._v(" "),s("header-icons",{staticClass:"header__icons",attrs:{"action-button-props":t.actionButtonProps,"search-icon-props":t.searchIconProps,"cart-icon-props":t.cartIconProps,"is-search-open":t.isSearchOpen,"is-search-enabled":t.isSearchVisible}}),t._v(" "),t.isSearchVisible?s("search-bar",t._b({},"search-bar",t.searchBarProps,!1)):t._e()],1),t._v(" "),t.isOverContent?t._e():s("row",{staticClass:"display-desktop",attrs:{options:t.options[1]}},[s("header-navigation",{directives:[{name:"show",rawName:"v-show",value:t.isNavVisible,expression:"isNavVisible"}],staticClass:"header__navigation",attrs:{properties:t.navProps,visible:!t.isSearchOpen}})],1)],1)],1),t._v(" "),t.isSiteWideFulfillmentVisible?s("site-wide-fulfillment",{staticClass:"container"}):t._e(),t._v(" "),t.shouldDisplayDineInFulfillmentControls?s("dine-in-fulfillment"):t._e()],1)},a=[],d=e(19379);const r=[{gutterMultiplier:{row:{xs:{top:1,bottom:1},sm:{top:1,bottom:1},md:{top:1.5,bottom:0},lg:{top:1.5,bottom:0},xl:{top:1.5,bottom:0}}}},{gutterMultiplier:{row:{sm:{top:1,bottom:1},md:{top:1,bottom:1},lg:{top:1,bottom:1},xl:{top:1,bottom:1}}}},{gutterMultiplier:{row:{xs:{top:1.5,bottom:1.5},sm:{top:1.5,bottom:1.5},md:{top:1.5,bottom:0},lg:{top:1.5,bottom:0},xl:{top:1.5,bottom:0}}}},{gutterMultiplier:{row:{xs:{top:1,bottom:1},sm:{top:1,bottom:1},md:{top:1.5,bottom:1.5},lg:{top:1.5,bottom:1.5},xl:{top:1.5,bottom:1.5}}}},{gutterMultiplier:{row:{xs:{top:1.5,bottom:1.5},sm:{top:1.5,bottom:1.5},md:{top:1.5,bottom:1.5},lg:{top:1.5,bottom:1.5},xl:{top:1.5,bottom:1.5}}}}],o={styles:{textAlign:"center",minHeight:"80px"},contentAlign:"center"};var i={name:"Header6",extends:d.Z,data(){const{contentAlign:t,background:p,styles:s}=o;return{options:r,defaultStyles:s,defaultBackground:p,defaultContentAlign:t}},computed:{isStickyMode(){const{stickyHeader:t}=this.blockBackground;return t.isSticky&&t.isOverContent},headerOptions(){return this.isNavVisible&&this.imageLogo?r[0]:this.isNavVisible&&!this.imageLogo?r[2]:!this.isNavVisible&&this.imageLogo?r[3]:r[4]}}},h=i,m=e(51900),b=(0,m.Z)(h,n,a,!1,null,"27e15260",null),v=b.exports}}]);})();
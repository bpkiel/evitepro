!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/_build/webpack_bundles/",n(n.s=604)}({2:function(e,t){e.exports=window.evite},604:function(e,t,n){e.exports=n(605)},605:function(e,t,n){"use strict";var r=n(2);new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleCarouselClick=function(e){if(e.target.classList.contains("tabnav-link")){if(e.target.classList.contains("current"))return!1;var n=document.querySelector(".current"),i=document.querySelector(n.dataset.hash),o=document.querySelector(e.target.dataset.hash);(0,r.removeClass)(n,"current"),n.setAttribute("aria-selected",!1),(0,r.addClass)(e.target,"current"),e.target.setAttribute("aria-selected",!0),t.changeSlide(i,o)}},this.changeSlide=function(e,t){var n=e.childNodes[1],r=t.childNodes[1];e.style.opacity=0,n.style.opacity=0,t.style.opacity=1,r.style.opacity=1},this.el=document.getElementById("pro_landing_carousel"),this.selectableItems=this.el.querySelectorAll("pro-landing-carousel-image"),this.navTriggers=this.el.querySelectorAll("tabnav-link"),this.el.addEventListener("click",this.handleCarouselClick)}}});
//# sourceMappingURL=standalone_purchasing.evite_pro_landing_page.pro-landing-page.js.4fcb665450a4.map
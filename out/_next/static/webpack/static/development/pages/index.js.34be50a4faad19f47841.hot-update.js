webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/vanta/dist/vanta.globe.min.js":
/*!****************************************************!*\
  !*** ./node_modules/vanta/dist/vanta.globe.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=10)}({0:function(t,e,i){"use strict";function s(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function o(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}i.d(e,"c",(function(){return s})),i.d(e,"e",(function(){return o})),i.d(e,"i",(function(){return n})),i.d(e,"h",(function(){return r})),i.d(e,"g",(function(){return h})),i.d(e,"f",(function(){return a})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"d",(function(){return p})),Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};const n=t=>t[Math.floor(Math.random()*t.length)];function r(t,e){return null==t&&(t=0),null==e&&(e=1),t+Math.random()*(e-t)}function h(t,e){return null==t&&(t=0),null==e&&(e=1),Math.floor(t+Math.random()*(e-t+1))}const a=t=>document.querySelector(t),c=t=>"number"==typeof t?"#"+("00000"+t.toString(16)).slice(-6):t,l=(t,e=1)=>{const i=c(t),s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null;return"rgba("+o.r+","+o.g+","+o.b+","+e+")"},p=t=>.299*t.r+.587*t.g+.114*t.b},1:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i(0);const o="object"==typeof window;let n=o&&window.THREE||{};o&&!window.VANTA&&(window.VANTA={});const r=o&&window.VANTA||{};r.register=(t,e)=>r[t]=t=>new e(t),r.version="0.5.9";const h=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};r.VantaBase=class{constructor(t={}){if(!o)return!1;if(r.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this),this.options=Object(s.c)({mouseControls:!0,touchControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1},this.defaultOptions),(t instanceof HTMLElement||"string"==typeof t)&&(t={el:t}),Object(s.c)(this.options,t),this.options.THREE&&(n=this.options.THREE),this.el=this.options.el,null==this.el)h('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const t=this.el;if(this.el=Object(s.f)(t),!this.el)return void h("Cannot find element",t)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(t){return h("Init error",t),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(s.a)(this.options.backgroundColor)))}const e=window.addEventListener;e("resize",this.resize),this.resize(),this.animationLoop(),this.options.mouseControls&&(e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper))}setOptions(t={}){Object(s.c)(this.options,t)}prepareEl(){let t,e;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const e=this.el.childNodes[t];if(e.nodeType===Node.TEXT_NODE){const t=document.createElement("span");t.textContent=e.textContent,e.parentElement.insertBefore(t,e),e.remove()}}for(t=0;t<this.el.children.length;t++)e=this.el.children[t],"static"===getComputedStyle(e).position&&(e.style.position="relative"),"auto"===getComputedStyle(e).zIndex&&(e.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(t,e={}){Object(s.c)(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(s.c)(t.style,e),t.classList.add("vanta-canvas")}initThree(){n.WebGLRenderer?(this.renderer=new n.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new n.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}windowMouseMoveWrapper(t){const e=this.getCanvasElement();if(!e)return!1;const i=e.getBoundingClientRect(),s=t.clientX-i.left,o=t.clientY-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}windowTouchWrapper(t){if(1===t.touches.length){const e=this.getCanvasElement();if(!e)return!1;const i=e.getBoundingClientRect(),s=t.touches[0].clientX-i.left,o=t.touches[0].clientY-i.top;s>=0&&o>=0&&s<=i.width&&o<=i.height&&(this.mouseX=s,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(s,o))}}triggerMouseMove(t,e){this.uniforms&&(this.uniforms.u_mouse.value.x=t/this.scale,this.uniforms.u_mouse.value.y=e/this.scale);const i=t/this.width,s=e/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(i,s)}setSize(){this.scale||(this.scale=1),Object(s.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,e=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,s=e.top+i;return s-window.innerHeight<=i&&i<=s+t}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.u_time.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX=this.mouseEaseX+.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY=this.mouseEaseY+.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null)}},e.b=r.VantaBase},10:function(t,e,i){"use strict";i.r(e);var s=i(1),o=i(0);const n="object"==typeof window;let r=n&&window.THREE;class h extends s.b{static initClass(){this.prototype.defaultOptions={color:16727937,color2:16777215,size:1,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(t){r=t.THREE||r,super(t)}genPoint(t,e,i){let s;if(this.points||(this.points=[]),this.options.showDots){const t=new r.SphereGeometry(.25,12,12),e=new r.MeshLambertMaterial({color:this.options.color});s=new r.Mesh(t,e)}else s=new r.Object3D;return this.cont.add(s),s.ox=t,s.oy=e,s.oz=i,s.position.set(t,e,i),s.r=0,this.points.push(s)}onInit(){this.cont=new r.Group,this.cont.position.set(-50,-20,0),this.scene.add(this.cont);let t=this.options.points,{spacing:e}=this.options;const i=t*t*2;this.linePositions=new Float32Array(i*i*3),this.lineColors=new Float32Array(i*i*3);const s=Object(o.d)(new r.Color(this.options.color)),n=Object(o.d)(new r.Color(this.options.backgroundColor));this.blending=s>n?"additive":"subtractive";const h=new r.BufferGeometry;h.addAttribute("position",new r.BufferAttribute(this.linePositions,3).setDynamic(!0)),h.addAttribute("color",new r.BufferAttribute(this.lineColors,3).setDynamic(!0)),h.computeBoundingSphere(),h.setDrawRange(0,0);const a=new r.LineBasicMaterial({vertexColors:r.VertexColors,blending:"additive"===this.blending?r.AdditiveBlending:null,transparent:!0});this.linesMesh=new r.LineSegments(h,a),this.cont.add(this.linesMesh);for(let i=0;i<=t;i++)for(let s=0;s<=t;s++){const o=0,n=(i-t/2)*e;let r=(s-t/2)*e;this.genPoint(n,o,r)}this.camera=new r.PerspectiveCamera(20,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const c=new r.AmbientLight(16777215,.75);this.scene.add(c),this.spot=new r.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot),this.cont2=new r.Group,this.cont2.position.set(0,15,0),this.scene.add(this.cont2);const l=new r.LineBasicMaterial({color:this.options.color2}),p=new r.Geometry;for(let t=0;t<80;t++){const t=Object(o.h)(18,24),e=t+Object(o.h)(1,6),i=Object(o.h)(-1,1),s=Math.sqrt(1-i*i),n=Object(o.h)(0,2*Math.PI),h=Math.sin(n)*s,a=Math.cos(n)*s;p.vertices.push(new r.Vector3(a*t,h*t,i*t)),p.vertices.push(new r.Vector3(a*e,h*e,i*e))}this.linesMesh2=new r.LineSegments(p,l),this.linesMesh2.position.set(0,0,0),this.cont2.add(this.linesMesh2);const u=new r.LineBasicMaterial({color:this.options.color2,linewidth:2}),d=new r.Geometry;d.vertices.push(new r.Vector3(0,30,0)),d.vertices.push(new r.Vector3(0,-30,0));for(let t=0;t<4;t++){let e=.15*Math.cos(t/4*Math.PI*2),i=.15*Math.sin(t/4*Math.PI*2),s=[17.9,12,8,5,3,2,1.5,1.1,.8,.6,.45,.3,.2,.1,.05,.03,.02,.01];for(let t=0;t<s.length;t++){let o=s[t],n=6*(t+1);d.vertices.push(new r.Vector3(e*n,o,i*n)),d.vertices.push(new r.Vector3(e*n,-o,i*n))}}this.linesMesh3=new r.LineSegments(d,u),this.linesMesh3.position.set(0,0,0),this.cont2.add(this.linesMesh3);const m=new r.LineBasicMaterial({color:this.options.color}),f=new r.SphereGeometry(18*this.options.size,18,14),w=new r.EdgesGeometry(f);this.sphere=new r.LineSegments(w,m),this.sphere.position.set(0,0,0),this.cont2.add(this.sphere),this.cont2.rotation.x=-.25}onUpdate(){let t;null!=this.helper&&this.helper.update(),null!=this.controls&&this.controls.update();const e=this.camera;Math.abs(e.tx-e.position.x)>.01&&(t=e.tx-e.position.x,e.position.x+=.02*t),Math.abs(e.ty-e.position.y)>.01&&(t=e.ty-e.position.y,e.position.y+=.02*t),n&&window.innerWidth<480?e.lookAt(new r.Vector3(-10,0,0)):n&&window.innerWidth<720?e.lookAt(new r.Vector3(-20,0,0)):e.lookAt(new r.Vector3(-40,0,0));let i=0,s=0,o=0;const h=new r.Color(this.options.backgroundColor),a=new r.Color(this.options.color),c=a.clone().sub(h);this.rayCaster&&this.rayCaster.setFromCamera(new r.Vector2(this.rcMouseX,this.rcMouseY),this.camera),this.linesMesh2&&(this.linesMesh2.rotation.z+=.002,this.linesMesh2.rotation.x+=8e-4,this.linesMesh2.rotation.y+=5e-4),this.sphere&&(this.sphere.rotation.y+=.002,this.linesMesh3.rotation.y-=.004);for(let t=0;t<this.points.length;t++){let e,n;const l=this.points[t],p=(n=this.rayCaster?this.rayCaster.ray.distanceToPoint(l.position):1e3).clamp(5,15);l.scale.z=(.25*(15-p)).clamp(1,100),l.scale.x=l.scale.y=l.scale.z,l.position.y=2*Math.sin(l.position.x/10+.01*this.t+l.position.z/10*.5);for(let n=t;n<this.points.length;n++){const t=this.points[n],p=l.position.x-t.position.x,u=l.position.y-t.position.y,d=l.position.z-t.position.z;if((e=Math.sqrt(p*p+u*u+d*d))<this.options.maxDistance){let n,p=2*(1-e/this.options.maxDistance);p=p.clamp(0,1),n="additive"===this.blending?new r.Color(0).lerp(c,p):h.clone().lerp(a,p),this.linePositions[i++]=l.position.x,this.linePositions[i++]=l.position.y,this.linePositions[i++]=l.position.z,this.linePositions[i++]=t.position.x,this.linePositions[i++]=t.position.y,this.linePositions[i++]=t.position.z,this.lineColors[s++]=n.r,this.lineColors[s++]=n.g,this.lineColors[s++]=n.b,this.lineColors[s++]=n.r,this.lineColors[s++]=n.g,this.lineColors[s++]=n.b,o++}}}return this.linesMesh.geometry.setDrawRange(0,2*o),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(t,e){const i=this.camera;i.oy||(i.oy=i.position.y,i.ox=i.position.x,i.oz=i.position.z);const s=Math.atan2(i.oz,i.ox),o=Math.sqrt(i.oz*i.oz+i.ox*i.ox),n=s+1.5*(t-.5)*(this.options.mouseCoeffX||1);i.tz=o*Math.sin(n),i.tx=o*Math.cos(n),i.ty=i.oy+80*(e-.5)*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=2*t-1,this.rcMouseY=2*-t+1}onRestart(){this.scene.remove(this.linesMesh),this.points=[]}}h.initClass(),e.default=s.a.register("GLOBE",h)}})}));

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/style.scss */ "./style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hoc_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hoc/layout */ "./hoc/layout.jsx");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/post */ "./components/post.jsx");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Zoom */ "./node_modules/react-reveal/Zoom.js");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vanta/dist/vanta.globe.min */ "./node_modules/vanta/dist/vanta.globe.min.js");
/* harmony import */ var vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/arvindnarayan/Desktop/website/pages/index.jsx";








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this));
    _this.state = {
      posts: [{
        title: 'Pranaa | Whole Food Delivery',
        desc: 'Pranaa is a exclusive food delivery app that is the online storefront of exclusive food products pranaa which is a based on Plant Based Whole Food which prootes wellness and healthy living',
        url: 'https://www.pranaafood.com',
        image: '/static/pranaa1.png',
        class: 'green'
      }, {
        title: 'Ad Builder by Verzon Media (yahoo!)',
        desc: "A desktop and PWA that is powering SMB's with advertisments and campaigns. This application makes creation of ads as easy and intuitive as possible.",
        url: 'http://ad.com',
        image: '/static/bitmap.png',
        class: 'red'
      }, {
        title: 'Verizon Media Native (yahoo!)',
        desc: 'A Hybrid App built on Android, iOS and as well as a PWA. This app helps advertisers with their Campaigns',
        url: 'https://play.google.com/store/apps/details?id=com.yahoo.mobile.client.android.gemini',
        image: '/static/2.png',
        class: 'blue'
      }, {
        title: 'Apollo Construct by Katerra',
        desc: "Apollo is a suite of applications designed to support building projects and teams from beginning to end.",
        url: 'https://apollo.katerra.com/',
        image: '/static/3.jpg',
        class: 'green'
      }, {
        title: 'Reeltime Coaching',
        desc: "ReelTime Coaching is the elite athlete development platform that connects athletes with top coaches on demand. Thats right we worked with Icecube!",
        url: 'http://beta.reeltimecoaching.com',
        image: '/static/4.jpg',
        class: 'yellow'
      }, {
        title: 'Palava Resident Portal',
        desc: "A Resident Portal for Lodha's my palava built as a PWA. This app helps residents with day to day stuff in and around palava",
        url: 'https://mypalava.in',
        image: '/static/5.png',
        class: 'blue'
      }]
    };
    _this.vantaRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(window);
      window.VANTA.GLOBE({
        el: "#infographic",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b28ca,
        color2: 0xe31717,
        size: 1.50,
        backgroundColor: 0xffffff
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_hoc_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default.a, {
        top: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "circle circle-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default.a, {
        left: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "circle circle-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default.a, {
        right: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "circle circle-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bottom: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "outline outline-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default.a, {
        right: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "outline outline-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_10___default.a, {
        left: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "outline outline-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        right: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "infographic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        right: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "I\u2019m Arvind,")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        right: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Fullstack Developer & Freelance UX Designer"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "I build apps end to end aka Design - Front-end - Backend and a little bit of Dev-Ops. ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), "I\u2019m from most coolest places on Earth aka Bengaluru. I have close to 3.5 years of experience in building truly scalable products. You can see me mostly working on Javascript in all forms and sizes. I\u2019m in love with React JS and have a love and hate relationship with Angular (first choice). I deal with massive SASS style sheets and colossal Redux architecture. I also love creating keyframe animation purely using CSS Keyframes.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }), "I prefer to work on super fast Node JS in backend with databases like MongoDB, Postgres, Redis and ElasticSearch and also consume services like kafka, Docker, Sentry and Nginix. My current curiosity with Architecting Microservices has shed some light on services like AWS / GCP and building at scale. I\u2019m a recent fan of Serverless services.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }), "I also consult firms on UX design. The Sketch is my choice of weapon, Sometimes I work with Illustrator and Photoshop for the finishing touches. I\u2019m a fan on negative spaces and minimalist UI.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), "I\u2019m keen on delivering the best User Experience on the products I work on that is my professional mission!", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), "I currently work at Cognitveclouds and a SDE-2. Feel free", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "mailto:thearvindnarayan@gmail.com?Subject=Hey%20Arvind",
        className: "mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "&nbsp Slide in a Mail &nbsp"), "regarding new opportunuties")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        bottom: true,
        cascade: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "link-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://dribbble.com/ImArvind",
        target: "_blank",
        className: "links dribble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "dribble"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/thearvindnarayan",
        target: "_blank",
        className: "links github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "github"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://medium.com/@thearvindnarayan",
        target: "_blank",
        className: "links medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "medium"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/thearvindnarayan/",
        target: "_blank",
        className: "links linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "linkedin"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        cascade: true,
        top: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "t-logo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://reactjs.org/",
        target: "_blank",
        className: "react tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://redux.js.org/",
        target: "_blank",
        className: "redux tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://nodejs.org/",
        target: "_blank",
        className: "node tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.ecma-international.org",
        target: "_blank",
        className: "js tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.sketch.com/",
        target: "_blank",
        className: "sketch tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://angular.io",
        target: "_blank",
        className: "angular tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://sass-lang.com/",
        target: "_blank",
        className: "sass tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://getbootstrap.com",
        target: "_blank",
        className: "boot tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.mongodb.com/",
        target: "_blank",
        className: "mongo tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://redis.io/",
        target: "_blank",
        className: "redis tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.elastic.co/products/elasticsearch",
        target: "_blank",
        className: "elastic tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.postgresql.org/",
        target: "_blank",
        className: "pg tech-logo bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "work-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, this.state.posts.map(function (p, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_post__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: p,
          i: i,
          key: 'post' + i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "foot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mine bg-assets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "luv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Made with \u2764\uFE0F by Arvind Narayan"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "sidenote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "Hosted in", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://surge.sh/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "&nbspSurge")), ". Code is licensed under ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "MIT"), " and available at", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/TheArvindNarayan/website",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "&nbspGithub")), ". All images/graphics are licensed under ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, "CC BY-SA")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "copy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "\xA92020 Arvind Narayan"))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.34be50a4faad19f47841.hot-update.js.map
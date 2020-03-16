(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cl-tabs/cl-tabs"],{

/***/ 79:
/*!***********************************************************!*\
  !*** E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cl-tabs.vue?vue&type=template&id=01df755f&scoped=true& */ 80);
/* harmony import */ var _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cl-tabs.vue?vue&type=script&lang=js& */ 82);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cl-tabs.vue?vue&type=style&index=0&id=01df755f&lang=scss&scoped=true& */ 87);
/* harmony import */ var _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01df755f",
  null,
  false,
  _cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/*!******************************************************************************************************!*\
  !*** E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue?vue&type=template&id=01df755f&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-tabs.vue?vue&type=template&id=01df755f&scoped=true& */ 81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_01df755f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 81:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue?vue&type=template&id=01df755f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 82:
/*!************************************************************************************!*\
  !*** E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-tabs.vue?vue&type=script&lang=js& */ 83);
/* harmony import */ var _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 84));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var sysWidth = uni.getSystemInfoSync().screenWidth;var _default2 =
{
  props: {
    tabBars: {
      type: Array,
      default: function _default() {return [];} },

    tabIndex: {
      type: Number,
      default: -1 },

    scale: { //放大倍数
      type: Number,
      default: 1 },

    type: { //类型fill文字被包含 float文字上浮 hang悬空
      type: String,
      default: 'default' },

    aniType: { //动画类型  extend
      type: String,
      default: 'default' },

    sliderColor: { //滑块颜色
      type: String,
      default: '#ff461f' },

    textColor: { //字体颜色
      type: String,
      default: 'black' },

    selectColor: { //选中字体颜色
      type: String,
      default: 'black' },

    sliderMargin: { //延长滑块
      type: Number,
      default: 0 },

    tabWidth: { //tab宽度
      type: String,
      default: '' },

    center: { //居中
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      animationData: {},
      largeAni: null,
      sliderAni: null,
      sliderAniEnd: null,
      animationSlider: {},
      sliderLeft: 0,
      sliderRight: 0,
      sliderWidth: 0, //滑块宽度
      sliderMove: 0, //滑块移动距离
      scrollInto: '',
      pos: 0,
      direction: 1 };

  },
  created: function created() {

    //放大动画
    this.largeAni = uni.createAnimation({ duration: 0 });
    //滑块动画
    this.sliderAni = uni.createAnimation({ duration: 0 });
    this.sliderAniEnd = uni.createAnimation({ duration: 100 });
  },
  mounted: function mounted() {

  },
  methods: {
    promise: function promise() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, time);
      });
      return promise;
    },
    getDataByEl: function getDataByEl(el) {var _this = this;
      var promise = new Promise(function (resolve, reject) {
        var tab = uni.createSelectorQuery().in(_this);
        tab.select(el).boundingClientRect();
        tab.exec( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(tabData) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                    resolve(tabData[0]);case 1:case "end":return _context.stop();}}}, _callee, this);}));return function (_x) {return _ref.apply(this, arguments);};}());

      });
      return promise;
    },
    //点击
    tapTab: function () {var _tapTab = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(index) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                this.$emit('tabChange', index);case 1:case "end":return _context2.stop();}}}, _callee2, this);}));function tapTab(_x2) {return _tapTab.apply(this, arguments);}return tapTab;}(),

    //触摸
    move: function move(dx) {
      //计算滑动index
      var ratio = dx / sysWidth;

      //计算率
      var yRatio = dx % sysWidth / sysWidth;

      //两边禁止
      if (this.tabIndex + ratio >= this.tabBars.length - 1 || this.tabIndex + ratio <= 0) return;


      if (this.aniType == 'extend') {
        this.extendAni(ratio, yRatio);
      } else if (this.aniType == 'default') {
        this.defaultAni(ratio, yRatio);
      } else if (this.aniType == 'movExtend') {
        this.movExtendAni(ratio, yRatio);

      }

      this.textAni(ratio, yRatio);



    },
    defaultAni: function defaultAni(ratio, yRatio) {
      var yR = Math.abs(yRatio * 2) > 1 ? 1 : yRatio * 2;
      var translateX = this.sliderMove * ratio;

      this.sliderAni.left(this.sliderLeft + translateX).step();
      this.animationSlider = this.sliderAni.export();

    },
    movExtendAni: function movExtendAni(ratio, yRatio) {
      var yR = Math.abs(yRatio * 2) > 1 ? 1 : yRatio * 2;
      var maxTranslateX = this.sliderMove / 2 * ratio / Math.abs(ratio);
      var translateX = Math.abs(this.sliderMove * ratio) > Math.abs(maxTranslateX) ? maxTranslateX : this.sliderMove * ratio;
      var width = this.sliderWidth + this.sliderMove * Math.floor(Math.abs(ratio)) + this.sliderMove * Math.abs(yR) - Math.abs(translateX);

      this.sliderAni.width(width).step();
      this.animationSlider = this.sliderAni.export();

      if (width + Math.abs(translateX) > this.sliderWidth + this.sliderMove) return;

      this.sliderAni.translateX(translateX).step();
      this.animationSlider = this.sliderAni.export();
      if (ratio < 0) {
        this.direction = -1;
        this.pos = sysWidth - this.sliderRight;
      } else if (ratio > 0) {
        this.direction = 1;
        this.pos = this.sliderLeft;
      }
    },
    extendAni: function extendAni(ratio, yRatio) {
      var yR = Math.abs(yRatio * 2) > 1 ? 1 : yRatio * 2;
      var width = this.sliderWidth + this.sliderMove * Math.floor(Math.abs(ratio)) + this.sliderMove * Math.abs(yR);
      if (ratio < 0) {
        this.direction = -1;
        this.pos = sysWidth - this.sliderRight;
      } else if (ratio > 0) {
        this.direction = 1;
        this.pos = this.sliderLeft;
      }

      this.sliderAni.width(width).step();
      this.animationSlider = this.sliderAni.export();
    },
    textAni: function textAni(ratio, yRatio) {
      //取到结果值
      var currentIndex = ratio > 0 ? Math.ceil(this.tabIndex + ratio) : Math.floor(this.tabIndex + ratio);

      var scale = this.scale + (1 - this.scale) * Math.abs(yRatio) < 1 ? 1 : this.scale + (1 - this.scale) * Math.abs(yRatio);

      if (yRatio != 0) {
        //复原
        this.largeAni.scale(scale).step();
        this.animationData[currentIndex - (ratio > 0 ? 1 : -1)] = this.largeAni.export();


        scale = 1 - (1 - this.scale) * Math.abs(yRatio) > this.scale ? this.scale : 1 - (1 - this.scale) * Math.abs(yRatio);
        //放大
        this.largeAni.scale(scale).step();
        this.animationData[currentIndex] = this.largeAni.export();
      }
    },
    reset: function () {var _reset = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(newVal, oldVal) {var res, tab, tabData;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!(
                this.aniType == 'movExtend' && oldVal != -1)) {_context3.next = 6;break;}
                if (newVal > oldVal) {
                  this.direction = -1;
                  this.pos = sysWidth - this.sliderRight - (newVal - oldVal) * this.sliderMove;
                } else if (newVal < oldVal) {
                  this.direction = 1;
                  this.pos = this.sliderLeft + (newVal - oldVal) * this.sliderMove;
                }_context3.next = 4;return (
                  this.promise());case 4:
                this.sliderAni.width(this.sliderMove / 2 + this.sliderWidth).translateX(0).step();

                this.animationSlider = this.sliderAni.export();case 6:_context3.next = 8;return (



                  this.getDataByEl('#tab-box'));case 8:res = _context3.sent;_context3.next = 11;return (
                  this.getDataByEl("#tab_".concat(this.tabIndex)));case 11:tab = _context3.sent;_context3.next = 14;return (
                  this.getDataByEl("#text_".concat(this.tabIndex)));case 14:tabData = _context3.sent;


                this.sliderLeft = tabData.left - res.left - this.sliderMargin / 2;
                this.sliderRight = tabData.right - res.left + this.sliderMargin / 2;
                this.sliderWidth = tabData.width + this.sliderMargin;
                //滑块移动距离
                this.sliderMove = tab.width;if (!(


                this.aniType == 'default')) {_context3.next = 26;break;}_context3.next = 22;return (
                  this.promise());case 22:
                this.sliderAni.left(this.sliderLeft).step();
                this.animationSlider = this.sliderAni.export();_context3.next = 33;break;case 26:if (!(
                this.aniType == 'extend' || this.aniType == 'movExtend')) {_context3.next = 33;break;}if (!(
                oldVal == -1)) {_context3.next = 30;break;}
                this.pos = this.sliderLeft;return _context3.abrupt("return");case 30:


                if (newVal > oldVal) {
                  this.direction = -1;
                  this.pos = sysWidth - this.sliderRight;
                } else if (newVal < oldVal) {
                  this.direction = 1;
                  this.pos = this.sliderLeft;
                }

                this.sliderAniEnd.width(this.sliderWidth).step();
                this.animationSlider = this.sliderAniEnd.export();case 33:case "end":return _context3.stop();}}}, _callee3, this);}));function reset(_x3, _x4) {return _reset.apply(this, arguments);}return reset;}() },







  watch: {
    tabBars: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        for (var i = 0; i < newVal.length; i++) {
          var a = {};
          a[i] = {};
          this.animationData = _objectSpread({}, this.animationData, a);
        }
      } },

    tabIndex: {
      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(newVal, oldVal) {var key, scrollTab;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:

                  for (key in this.animationData) {
                    if (key != this.tabIndex) {
                      this.largeAni.scale(1).step();
                      this.animationData[key] = this.largeAni.export();
                    } else {
                      this.largeAni.scale(this.scale).step();
                      this.animationData[this.tabIndex] = this.largeAni.export();
                    }
                  }_context4.next = 3;return (
                    this.promise());case 3:

                  this.reset(newVal, oldVal);_context4.next = 6;return (
                    this.promise(250));case 6:
                  scrollTab = newVal - 2 > 0 ? newVal - 2 : 0;
                  this.scrollInto = "tab_".concat(scrollTab);case 8:case "end":return _context4.stop();}}}, _callee4, this);}));function handler(_x5, _x6) {return _handler.apply(this, arguments);}return handler;}() } },



  computed: {
    sliderBgColor: function sliderBgColor() {
      return "background-color:".concat(this.sliderColor, ";width:").concat(this.sliderWidth, "px;");
    },
    sliderPosition: function sliderPosition() {
      var pos = this.direction > 0 ? "left:".concat(this.pos, "px;") : "right:".concat(this.pos, "px;");
      if (this.aniType == 'default') pos = '';
      return pos;
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 87:
/*!*********************************************************************************************************************!*\
  !*** E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue?vue&type=style&index=0&id=01df755f&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-tabs.vue?vue&type=style&index=0&id=01df755f&lang=scss&scoped=true& */ 88);
/* harmony import */ var _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_style_index_0_id_01df755f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 88:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/demo/shucheng-uni/components/cl-tabs/cl-tabs.vue?vue&type=style&index=0&id=01df755f&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/cl-tabs/cl-tabs.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cl-tabs/cl-tabs-create-component',
    {
        'components/cl-tabs/cl-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(79))
        })
    },
    [['components/cl-tabs/cl-tabs-create-component']]
]);

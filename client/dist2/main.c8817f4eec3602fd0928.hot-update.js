webpackHotUpdate("main",{

/***/ "./client/src/studentList.jsx":
/*!************************************!*\
  !*** ./client/src/studentList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _student_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.jsx */ \"./client/src/student.jsx\");\n\n\nvar StudentList = function StudentList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.list.map(function (block) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_student_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: block.name,\n      git: block.git,\n      key: block.name\n    });\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentList);\n\n//# sourceURL=webpack:///./client/src/studentList.jsx?");

/***/ })

})
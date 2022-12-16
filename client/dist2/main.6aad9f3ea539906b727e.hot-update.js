webpackHotUpdate("main",{

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _studentList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentList.jsx */ \"./client/src/studentList.jsx\");\n/* harmony import */ var _student_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student.jsx */ \"./client/src/student.jsx\");\n\n\n\nvar App = function App() {\n  var test = {\n    name: 'weeeeeee',\n    git: 'Ghasb001',\n    link: 'https://github.com/Ghasb001'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" RPP2209 Github \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_studentList_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    student: test,\n    git: test\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/src/app.jsx?");

/***/ }),

/***/ "./client/src/student.jsx":
/*!********************************!*\
  !*** ./client/src/student.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Student = function Student(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \" onClick=\", function () {\n    window.open(repo.url);\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\n\n//# sourceURL=webpack:///./client/src/student.jsx?");

/***/ }),

/***/ "./client/src/studentList.jsx":
/*!************************************!*\
  !*** ./client/src/studentList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar StudentList = function StudentList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Student List \"), props.student.name, \": \", props.student.git);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentList);\n\n// Students: {props.student.name}\n// {props.repos.map((repo, id) => <h4 onClick={() => {\n//     window.open(repo.url);\n//   }} key={repo.url + id}>{repo.name}</h4>)}\n\n//# sourceURL=webpack:///./client/src/studentList.jsx?");

/***/ })

})
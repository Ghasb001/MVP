webpackHotUpdate("main",{

/***/ "./client/src/studentList.jsx":
/*!************************************!*\
  !*** ./client/src/studentList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar StudentList = function StudentList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \" Student List \"), props.student.name, \": \", props.student.git, \" onClick=\", function () {\n    window.open(props.student.link);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentList);\n\n// Students: {props.student.name}\n// {props.repos.map((repo, id) => <h4 onClick={() => {\n//     window.open(repo.url);\n//   }} key={repo.url + id}>{repo.name}</h4>)}\n\n//# sourceURL=webpack:///./client/src/studentList.jsx?");

/***/ })

})
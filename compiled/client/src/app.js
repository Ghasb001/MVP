"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _studentList = _interopRequireDefault(require("./studentList.jsx"));
var _student = _interopRequireDefault(require("./student.jsx"));
var _helpers = _interopRequireDefault(require("./helpers.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var App = function App() {
  var cohortStudents = _helpers.default.students;
  var generate = function generate() {
    var randomName = cohortStudents[Math.floor(Math.random() * cohortStudents.length)];
    return randomName.name;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("h1", null, " RPP2209 Github "), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      alert(generate());
    }
  }, "Random Name Picker"), /*#__PURE__*/_react.default.createElement("div", {
    className: "classRoom"
  }, /*#__PURE__*/_react.default.createElement(_studentList.default, {
    list: cohortStudents,
    link: cohortStudents
  })));
};
var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHAiLCJjb2hvcnRTdHVkZW50cyIsIkhlbHBlcnMiLCJzdHVkZW50cyIsImdlbmVyYXRlIiwicmFuZG9tTmFtZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm5hbWUiLCJhbGVydCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdHVkZW50TGlzdCBmcm9tICcuL3N0dWRlbnRMaXN0LmpzeCc7XG5pbXBvcnQgU3R1ZGVudCBmcm9tICcuL3N0dWRlbnQuanN4JztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycy5qcyc7XG5cblxudmFyIEFwcCA9ICgpID0+IHtcbiAgdmFyIGNvaG9ydFN0dWRlbnRzID0gSGVscGVycy5zdHVkZW50cztcbiAgdmFyIGdlbmVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21OYW1lID0gY29ob3J0U3R1ZGVudHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29ob3J0U3R1ZGVudHMubGVuZ3RoKV07XG4gICAgcmV0dXJuIHJhbmRvbU5hbWUubmFtZTtcbiAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGgxPiBSUFAyMjA5IEdpdGh1YiA8L2gxPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoZ2VuZXJhdGUoKSlcbiAgICAgICAgfX0+UmFuZG9tIE5hbWUgUGlja2VyPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3NSb29tXCI+XG4gICAgICAgICAgPFN0dWRlbnRMaXN0IGxpc3Q9e2NvaG9ydFN0dWRlbnRzfSBsaW5rPXtjb2hvcnRTdHVkZW50c30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFtQztBQUFBO0FBQUE7QUFHbkMsSUFBSUEsR0FBRyxHQUFHLFNBQU5BLEdBQUcsR0FBUztFQUNkLElBQUlDLGNBQWMsR0FBR0MsZ0JBQU8sQ0FBQ0MsUUFBUTtFQUNyQyxJQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFlO0lBQ3pCLElBQUlDLFVBQVUsR0FBR0osY0FBYyxDQUFDSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR1AsY0FBYyxDQUFDUSxNQUFNLENBQUMsQ0FBQztJQUNsRixPQUFPSixVQUFVLENBQUNLLElBQUk7RUFDeEIsQ0FBQztFQUVDLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2xCLDREQUF5QixlQUN6QjtJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFLG1CQUFNO01BQ25DQyxLQUFLLENBQUNQLFFBQVEsRUFBRSxDQUFDO0lBQ25CO0VBQUUsd0JBQTRCLGVBQzlCO0lBQUssU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCLDZCQUFDLG9CQUFXO0lBQUMsSUFBSSxFQUFFSCxjQUFlO0lBQUMsSUFBSSxFQUFFQTtFQUFlLEVBQUUsQ0FDdEQsQ0FDRjtBQUVaLENBQUM7QUFBQSxlQUVjRCxHQUFHO0FBQUEifQ==
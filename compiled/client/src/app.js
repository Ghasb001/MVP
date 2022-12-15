"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _studentList = _interopRequireDefault(require("./studentList.jsx"));
var _student = _interopRequireDefault(require("./student.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var App = function App() {
  var test = {
    name: 'balls'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("h1", null, " RPP2209 Github "), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/_react.default.createElement(_student.default, {
    student: test
  })));
};
var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHAiLCJ0ZXN0IiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdHVkZW50TGlzdCBmcm9tICcuL3N0dWRlbnRMaXN0LmpzeCc7XG5pbXBvcnQgU3R1ZGVudCBmcm9tICcuL3N0dWRlbnQuanN4JztcblxuXG5cbnZhciBBcHAgPSAoKSA9PiB7XG5cbiAgdmFyIHRlc3QgPSB7XG4gICAgbmFtZTogJ2JhbGxzJ1xuICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8aDE+IFJQUDIyMDkgR2l0aHViIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICA8U3R1ZGVudCBzdHVkZW50PXt0ZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBb0M7QUFBQTtBQUFBO0FBSXBDLElBQUlBLEdBQUcsR0FBRyxTQUFOQSxHQUFHLEdBQVM7RUFFZCxJQUFJQyxJQUFJLEdBQUc7SUFDVEMsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUVDLG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2xCLDREQUF5QixlQUN6QjtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUN2Qiw2QkFBQyxnQkFBTztJQUFDLE9BQU8sRUFBRUQ7RUFBSyxFQUFHLENBQ3RCLENBQ0Y7QUFFWixDQUFDO0FBQUEsZUFFY0QsR0FBRztBQUFBIn0=
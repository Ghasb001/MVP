"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Student = function Student(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      window.open(props.link);
    }
  }, /*#__PURE__*/_react.default.createElement("h5", null, " ", props.name, ": ", props.git, " "));
};
var _default = Student;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHVkZW50IiwicHJvcHMiLCJ3aW5kb3ciLCJvcGVuIiwibGluayIsIm5hbWUiLCJnaXQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL3N0dWRlbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0dWRlbnQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4ocHJvcHMubGluaylcbiAgfX0+XG4gICAgPGg1PiB7cHJvcHMubmFtZX06IHtwcm9wcy5naXR9IDwvaDU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBSUMsS0FBSztFQUFBLG9CQUNwQjtJQUFLLE9BQU8sRUFBRSxtQkFBTTtNQUNsQkMsTUFBTSxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDO0lBQ3pCO0VBQUUsZ0JBQ0EsOENBQU1ILEtBQUssQ0FBQ0ksSUFBSSxRQUFJSixLQUFLLENBQUNLLEdBQUcsTUFBTyxDQUNoQztBQUFBLENBQ1A7QUFBQSxlQUVjTixPQUFPO0FBQUEifQ==
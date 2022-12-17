"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _student = _interopRequireDefault(require("./student.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StudentList = function StudentList(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, props.list.map(function (block) {
    return /*#__PURE__*/_react.default.createElement(_student.default, {
      name: block.name,
      git: block.git,
      key: block.name,
      link: block.link
    });
  }));
};
var _default = StudentList;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHVkZW50TGlzdCIsInByb3BzIiwibGlzdCIsIm1hcCIsImJsb2NrIiwibmFtZSIsImdpdCIsImxpbmsiXSwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL3N0dWRlbnRMaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0dWRlbnQgZnJvbSAnLi9zdHVkZW50LmpzeCc7XG5cblxuY29uc3QgU3R1ZGVudExpc3QgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAge3Byb3BzLmxpc3QubWFwKGJsb2NrID0+XG4gICAgICA8U3R1ZGVudCBuYW1lPXtibG9jay5uYW1lfSBnaXQ9e2Jsb2NrLmdpdH0ga2V5PXtibG9jay5uYW1lfSBsaW5rPXtibG9jay5saW5rfS8+XG4gICAgKSB9XG4gIDwvZGl2PlxuICApXG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRMaXN0OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFvQztBQUdwQyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLO0VBQUEsb0JBQ3hCLDBDQUNDQSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLEtBQUs7SUFBQSxvQkFDakIsNkJBQUMsZ0JBQU87TUFBQyxJQUFJLEVBQUVBLEtBQUssQ0FBQ0MsSUFBSztNQUFDLEdBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUFJO01BQUMsR0FBRyxFQUFFRixLQUFLLENBQUNDLElBQUs7TUFBQyxJQUFJLEVBQUVELEtBQUssQ0FBQ0c7SUFBSyxFQUFFO0VBQUEsRUFDaEYsQ0FDRztBQUFBLENBQ0w7QUFBQSxlQUVZUCxXQUFXO0FBQUEifQ==
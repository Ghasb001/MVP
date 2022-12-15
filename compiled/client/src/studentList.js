"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StudentList = function StudentList(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, " Student List "), "Students: ", props.name);
};
var _default = StudentList; // Students: {props.student.name}
// {props.repos.map((repo, id) => <h4 onClick={() => {
//     window.open(repo.url);
//   }} key={repo.url + id}>{repo.name}</h4>)}
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHVkZW50TGlzdCIsInByb3BzIiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvc3R1ZGVudExpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0dWRlbnRMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGg0PiBTdHVkZW50IExpc3QgPC9oND5cbiAgICBTdHVkZW50czoge3Byb3BzLm5hbWV9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50TGlzdDtcblxuLy8gU3R1ZGVudHM6IHtwcm9wcy5zdHVkZW50Lm5hbWV9XG4vLyB7cHJvcHMucmVwb3MubWFwKChyZXBvLCBpZCkgPT4gPGg0IG9uQ2xpY2s9eygpID0+IHtcbi8vICAgICB3aW5kb3cub3BlbihyZXBvLnVybCk7XG4vLyAgIH19IGtleT17cmVwby51cmwgKyBpZH0+e3JlcG8ubmFtZX08L2g0Pil9Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUEwQjtBQUUxQixJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLO0VBQUEsb0JBQ3hCLHVEQUNFLDBEQUF1QixnQkFDWkEsS0FBSyxDQUFDQyxJQUFJLENBQ2pCO0FBQUEsQ0FDUDtBQUFBLGVBRWNGLFdBQVcsRUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFBQSJ9
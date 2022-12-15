"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var StudentList = function StudentList(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, " Student List "), "Student: ", props.student.name, props.repos.map(function (repo, id) {
    return /*#__PURE__*/_react.default.createElement("h4", {
      onClick: function onClick() {
        window.open(repo.url);
      },
      key: repo.url + id
    }, repo.name);
  }));
};
var _default = RepoList;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdHVkZW50TGlzdCIsInByb3BzIiwic3R1ZGVudCIsIm5hbWUiLCJyZXBvcyIsIm1hcCIsInJlcG8iLCJpZCIsIndpbmRvdyIsIm9wZW4iLCJ1cmwiLCJSZXBvTGlzdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvc3R1ZGVudExpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0dWRlbnRMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGg0PiBTdHVkZW50IExpc3QgPC9oND5cbiAgICBTdHVkZW50OiB7cHJvcHMuc3R1ZGVudC5uYW1lfVxuICAgIHtwcm9wcy5yZXBvcy5tYXAoKHJlcG8sIGlkKSA9PiA8aDQgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbihyZXBvLnVybCk7XG4gICAgICB9fSBrZXk9e3JlcG8udXJsICsgaWR9PntyZXBvLm5hbWV9PC9oND4pfVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUmVwb0xpc3Q7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUEwQjtBQUUxQixJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLO0VBQUEsb0JBQ3hCLHVEQUNFLDBEQUF1QixlQUNiQSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxFQUMzQkYsS0FBSyxDQUFDRyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEVBQUU7SUFBQSxvQkFBSztNQUFJLE9BQU8sRUFBRSxtQkFBTTtRQUM5Q0MsTUFBTSxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksR0FBRyxDQUFDO01BQ3ZCLENBQUU7TUFBQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ksR0FBRyxHQUFHSDtJQUFHLEdBQUVELElBQUksQ0FBQ0gsSUFBSSxDQUFNO0VBQUEsRUFBQyxDQUN0QztBQUFBLENBQ1A7QUFBQSxlQUVjUSxRQUFRO0FBQUEifQ==
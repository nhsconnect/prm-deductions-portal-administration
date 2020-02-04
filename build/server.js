"use strict";

var _app = _interopRequireDefault(require("./app"));

var _logging = _interopRequireDefault(require("./config/logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(3000, function () {
  return _logging["default"].info('Listening on port 3000');
});
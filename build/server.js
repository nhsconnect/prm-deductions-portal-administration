"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config");

var _logging = _interopRequireDefault(require("./config/logging"));

_app["default"].listen(_config.portNumber, function () {
  return _logging["default"].info("Listening on port ".concat(_config.portNumber));
});
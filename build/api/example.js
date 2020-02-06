"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _logging = _interopRequireDefault(require("../config/logging"));

var router = _express["default"].Router();

router.get('/', function (req, res) {
  _logging["default"].info('example endpoint');

  res.send('hello world');
});
var _default = router;
exports["default"] = _default;
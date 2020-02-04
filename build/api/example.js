"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _logging = _interopRequireDefault(require("../config/logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  _logging["default"].info('example endpoint');

  res.sendStatus(200).send("hello world");
});
var _default = router;
exports["default"] = _default;
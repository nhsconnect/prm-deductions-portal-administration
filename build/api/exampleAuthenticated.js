"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../middleware/auth");

var _logging = _interopRequireDefault(require("../config/logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _auth.checkIsAuthenticated, function (req, res) {
  _logging["default"].info('authenticated successfully');

  res.sendStatus(200).send("hello world authenticated");
});
var _default = router;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsAuthenticated = void 0;

var _logging = _interopRequireDefault(require("../config/logging"));

var checkIsAuthenticated = function checkIsAuthenticated(req, res, next) {
  var validAuthorizationKeys = process.env.AUTHORIZATION_KEYS ? process.env.AUTHORIZATION_KEYS.split(',') : [];
  var authorizationKey = req.get('Authorization');

  if (!authorizationKey) {
    _logging["default"].info('Authorization key is undefined');

    res.sendStatus(401);
    return;
  }

  if (!validAuthorizationKeys.includes(authorizationKey)) {
    _logging["default"].info('Authorization is provided but not valid');

    res.sendStatus(403);
    return;
  }

  next();
};

exports.checkIsAuthenticated = checkIsAuthenticated;
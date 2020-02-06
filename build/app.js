"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHttpContext = _interopRequireDefault(require("express-http-context"));

var _expressWinston = require("express-winston");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _example = _interopRequireDefault(require("./api/example"));

var _exampleAuthenticated = _interopRequireDefault(require("./api/exampleAuthenticated"));

var _health = _interopRequireDefault(require("./api/health"));

var _logging = require("./config/logging");

var _swagger = _interopRequireDefault(require("./swagger.json"));

var app = (0, _express["default"])();
app.use(_expressHttpContext["default"].middleware);
app.use((0, _expressWinston.logger)(_logging.options));
app.use('/health', _health["default"]);
app.use('/example', _example["default"]);
app.use('/exampleAuthenticated', _exampleAuthenticated["default"]);
app.use('/swagger', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use((0, _expressWinston.errorLogger)(_logging.options)); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  res.status(500).json({
    error: err.message
  });
});
var _default = app;
exports["default"] = _default;
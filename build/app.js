"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressWinston = require("express-winston");

var _expressHttpContext = _interopRequireDefault(require("express-http-context"));

var _logging = require("./config/logging");

var _correlation = require("./middleware/correlation");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_expressHttpContext["default"].middleware);
app.use(_correlation.addCorrelationInfo);
app.use((0, _expressWinston.logger)(_logging.options));
app.get('/health', function (req, res) {
  res.sendStatus(200);
});
app.use('/example', example);
app.use('/exampleAuthenticated', exampleAuthenticated);
app.use('/swagger', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use((0, _expressWinston.errorLogger)(_logging.options)); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  res.status(500).json({
    error: err.message
  });
});
var _default = app;
exports["default"] = _default;
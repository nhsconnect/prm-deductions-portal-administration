"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.options = exports.obfuscateSecrets = void 0;

var _winston = require("winston");

var _traverse = _interopRequireDefault(require("traverse"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OBFUSCATED_VALUE = '********';
var SECRET_KEYS = ['passcode', 'data'];
var obfuscateSecrets = (0, _winston.format)(function (info) {
  var updated = (0, _lodash["default"])(info);
  (0, _traverse["default"])(updated).forEach(function () {
    if (SECRET_KEYS.includes(this.key)) this.update(OBFUSCATED_VALUE);
  });
  return updated;
});
exports.obfuscateSecrets = obfuscateSecrets;
var options = {
  level: 'debug',
  format: _winston.format.combine(_winston.format.timestamp(), _winston.format.json(), obfuscateSecrets()),
  transports: [new _winston.transports.Console({
    handleExceptions: true
  })]
};
exports.options = options;
var logger = (0, _winston.createLogger)(options);

logger.error = function (message, error) {
  logger.log('error', "".concat(message, ": ").concat(error.message), {
    error: error,
    stack: error.stack
  });
};

var _default = logger;
exports["default"] = _default;
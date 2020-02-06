"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.portNumber = exports["default"] = void 0;
var portNumber = 3000;
exports.portNumber = portNumber;
var config = {
  nodeEnv: process.env.NODE_ENV,
  url: process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test' ? "http://127.0.0.1:".concat(portNumber) : "http://".concat(process.env.NODE_ENV, ".generic-component.patient-deductions.nhs.uk")
};
var _default = config;
exports["default"] = _default;
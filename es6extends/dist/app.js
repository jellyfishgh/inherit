'use strict';

var _Sup = require('./Sup');

var _Sup2 = _interopRequireDefault(_Sup);

var _Sub = require('./Sub');

var _Sub2 = _interopRequireDefault(_Sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sup = new _Sup2.default("hello");

var sub = new _Sub2.default("hi", 20);

console.log(sup.toString());

console.log(sub.toString());
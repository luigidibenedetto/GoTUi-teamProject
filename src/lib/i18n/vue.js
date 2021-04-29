'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVueTranslationKeys = undefined;

var _uniq2 = require('lodash/fp/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _values2 = require('lodash/fp/values');

var _values3 = _interopRequireDefault(_values2);

var _pipe2 = require('lodash/fp/pipe');

var _pipe3 = _interopRequireDefault(_pipe2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * given a pages array, it goes through the graph built by their dependencies (vue components) and extract all the strings
 * attached to the `trans` property
 *
 * @param {Object[]} pages - vue pages array
 */
var getTranslationKeys = function getTranslationKeys(pages) {
  return pages.reduce(function (trans, comp) {
    comp.trans && trans.push.apply(trans, _toConsumableArray(comp.trans));
    trans.push.apply(trans, _toConsumableArray(getTranslationKeys((0, _values3.default)(comp.components))));
    return trans;
  }, []);
};

var getVueTranslationKeys = exports.getVueTranslationKeys = (0, _pipe3.default)(getTranslationKeys, _uniq3.default);
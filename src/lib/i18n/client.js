'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCache = exports.loadCache = undefined;
exports.trans = trans;

var _cache = require('./cache');

var _utils = require('./utils');

var cache = (0, _cache.getCache)();
/**
 * TDD: see /specs/services/i18n/indexSpec.js for translation use cases
 *
 */

var DEFAULT_OPTIONS = {};

/**
 *
 * @param {String} lang                       language string i.e. 'en'
 * @param {String} context                    context file i.e. 'messages'
 * @param {String} id                         string id i.e. 'event.duration.days'
 * @param {Object} [options]                  optional parameters
 * @param {Number} [options.num]              {0|1|2} for zero, single or several elements
 * @param {Object} [options.placeholders]     contains the values replaced in strings like 'purchase %count% products'
 * @param {String} [options.default]          returned value when wanted string is not found
 *
 * @returns {String} translation
 */
function trans(lang, context, id, options) {
  var opt = options || DEFAULT_OPTIONS;
  var translatable = void 0;

  if (opt.default) {
    if (opt.num) {
      var numStrings = (0, _utils.getStrings)(opt.default);
      switch (opt.num) {
        case 0:
          opt.default = numStrings[0];break;
        case 1:
          opt.default = numStrings[1];break;
        default:
          opt.default = numStrings[2];break;
      }
    }
    if (opt.placeholders) {
      opt.default = (0, _utils.replacePlaceholdersInString)(opt.default, opt.placeholders);
    }
  }

  if (cache[lang] && cache[lang][context] && cache[lang][context][id] !== undefined) {
    translatable = cache[lang][context][id];
    if (opt.num !== undefined) {
      translatable = translatable[opt.num];
    }
    if (opt.placeholders) {
      translatable = (0, _utils.replacePlaceholdersInString)(translatable, opt.placeholders);
    }
  }

  return translatable !== undefined ? translatable : opt.default || id;
}

exports.loadCache = _cache.loadCache;
exports.getCache = _cache.getCache;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getVueTranslationKeys = exports.loadCache = exports.getCache = exports.getVueI18nBundle = exports.trans = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _client = require('./client');

Object.defineProperty(exports, 'trans', {
    enumerable: true,
    get: function get() {
        return _client.trans;
    }
});
exports.getFilteredI18nBundle = getFilteredI18nBundle;
exports.load = load;

var _xliff2json = require('xliff2json');

var _xliff2json2 = _interopRequireDefault(_xliff2json);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mapValues2 = require('lodash/fp/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _pick2 = require('lodash/fp/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _utils = require('./utils');

var _cache = require('./cache');

var _vue = require('./vue');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOADING_XLIFF_MSG = '*** i18n *** loading and parsing xliff files';

/**
 * TDD: see /specs/services/i18n/indexSpec.js for translation use cases
 *
 */

var parser = new _xliff2json2.default();
var cache = (0, _cache.getCache)();

// from {en: {'label': 'hello'}} to =>    {website: {en: {'label': 'hello}}}
var addContextLayer = function addContextLayer(context) {
    return (0, _mapValues3.default)(function (langBundle) {
        return _defineProperty({}, context, langBundle);
    });
};

// from {en: {website: {'label': 'hello', 'content': 'world'}}} to =>    {en: {'label': 'hello', 'content': 'world'}}
var removeContextLayer = (0, _mapValues3.default)(function (module) {
    return module[Object.keys(module)[0]];
});

/**
 * pick just the translation related to the given keys. If keys is undefined, it is identity function.
 *
 * i.e:
 * from {en: {'label': 'hello', 'content': 'world'}} to =>    {en: {'label': 'hello}}
 * when keys are ['label']
 * @param keys
 */
var filterCache = function filterCache(keys) {
    return (0, _mapValues3.default)(function (module) {
        return keys ? (0, _pick3.default)(keys, module) : module;
    });
};

/**
 * returns the parsed translation bundle by reading the weblate xliff repository, according to the naming conventions.
 * If a language xliff is not found, then it returns empty object.
 * 
 * @param {String} folder 
 * @param {String} module 
 * @param {String} lang 
 * @param {String} mod 
 * @returns {Object} module bundle
 */
var parseFile = async function parseFile(folder, module, lang) {
    var mod = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var xliffPath = _path2.default.join(folder, module + '.' + lang + '.xliff');
    if (!_fs2.default.existsSync(xliffPath)) {
        return Promise.resolve({});
    }

    var input = _fs2.default.readFileSync(xliffPath, 'utf8');

    return new Promise(function (resolve, reject) {
        parser.parseXliff(input, function (xliffJson) {
            var units = xliffJson.xliff.file[0].body[0]['trans-unit'];
            units && units.forEach(function (item) {
                if (item.target[0].$ && item.target[0].$.state === 'translated') {
                    mod[item.$.resname] = (0, _utils.getStrings)(item.target[0]._);
                }
            });
            resolve(mod);
        });
    });
};

var parseFileAndLoad = async function parseFileAndLoad(folder, module, lang) {
    var langEntry = cache[lang] = cache[lang] || {},
        mod = langEntry[module] = langEntry[module] || {};
    return parseFile(folder, module, lang, mod);
};

/**
 * given a list of vue component (the application pages) builds and returns a i18n bundle to be handled by the app
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} module - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 * @param {Object[]} [pages] - vue components array (all the pages the app is defining)
 * @return {Promise.<Object>}
 */
var getVueI18nBundle = exports.getVueI18nBundle = function getVueI18nBundle(folder, module, langs) {
    var pages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    return getFilteredI18nBundle(folder, module, langs, (0, _vue.getVueTranslationKeys)(pages));
};

/**
 * given a list of keys builds and returns a i18n bundle filtered by them.
 * If they are not defined, the bundle will not be filtered.
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} module - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 * @param {String[]} [keys]
 * @return {Promise.<Object>}
 */
function getFilteredI18nBundle(folder, module, langs, keys) {
    return Promise.all(langs.map(function (lang) {
        return parseFile(folder, module, lang);
    })).then(function (mods) {
        return mods.reduce(function (bundle, mod, i) {
            return _extends({}, bundle, _defineProperty({}, langs[i], mod));
        }, {});
    }).then(filterCache(keys)).then(addContextLayer(module));
}

/**
 * loads in the inner cache the content of the xliff files contained in the given <folder>, for the given <files> and <languages>
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String[]} files - name of files (weblate projects) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} languages - languages prefix (i.e: ['it', 'uk'] )
 * @return {Promise.<>}
 */
function load(folder, files, languages) {
    var _this = this;

    console.time(LOADING_XLIFF_MSG);
    return Promise.all(files.map(function (res) {
        return Promise.all(languages.map(parseFileAndLoad.bind(_this, folder, res)));
    })).then(function () {
        console.time(LOADING_XLIFF_MSG);
    });
}

exports.getCache = _cache.getCache;
exports.loadCache = _cache.loadCache;
exports.getVueTranslationKeys = _vue.getVueTranslationKeys;
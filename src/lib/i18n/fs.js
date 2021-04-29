'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeSelectedTransToNewProject = exports.copyMissingUnitsToProject = exports.createNewLanguagesForProject = exports.createProject = exports.updateXliffsWithNewStrings = exports.getModuleKeys = exports.getFileList = exports.mergeAndWriteI18nBundle = exports.writeI18nBundle = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * TODO: to be migrated to weblate project because weblate-specific
                                                                                                                                                                                                                                                                   * (needs node syntax, no es6)
                                                                                                                                                                                                                                                                   */

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _pipe2 = require('lodash/fp/pipe');

var _pipe3 = _interopRequireDefault(_pipe2);

var _utils = require('./utils');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UID_SEPARATOR = '^^^';

var NO_STRINGS_FOUND = '\n*************************************************************************************************************************************\n        No string found: no need to push anything\n*************************************************************************************************************************************\n                ';

var printSummary = function printSummary(header) {
    return console.log('\n*************************************************************************************************************************************\n        ' + header + '\n        \n        NOTE: In order to push these changes, you need to commit and git push them:\n        \n        git -C src/services/i18n/translations add .\n        git -C src/services/i18n/translations commit -m \'[whatever]\'\n        git -C src/services/i18n/translations push origin master\n*************************************************************************************************************************************\n');
};

var writeJson = function writeJson(filePath, bundle) {
    return _fs2.default.writeFileSync(filePath, JSON.stringify(bundle));
};
var getFileName = (0, _pipe3.default)(function (path) {
    return path.split('/');
}, function (sliced) {
    return sliced[sliced.length - 1];
});
var getXliffPath = function getXliffPath(folder, module, lang) {
    return _path2.default.resolve(folder, [module, lang, 'xliff'].join('.'));
};

var getUniqueId = function getUniqueId(module, key) {
    return (0, _utils.md5)('' + module + UID_SEPARATOR + key);
};

var getLangContent = function getLangContent(bundle, lang) {
    return bundle[lang][Object.keys(bundle[lang])[0]];
};
// adds `$time` entry in the bundle for every language with the generation timestamp (to ease debug!)
var addTimeStampToBundle = function addTimeStampToBundle(bundle) {
    var buildTime = new Date().toISOString();
    Object.keys(bundle).forEach(function (lang) {
        return getLangContent(bundle, lang).$time = buildTime;
    });
};

var writeJsonWithTimeStamp = function writeJsonWithTimeStamp(bundle, path) {
    addTimeStampToBundle(bundle);
    writeJson(path, bundle);
};

var mergeBundles = function mergeBundles(base, specific, baseModuleName, specificModuleName) {
    return Object.keys(base).reduce(function (bundle, lang) {
        return _extends({}, bundle, _defineProperty({}, lang, _defineProperty({}, specificModuleName, _extends({}, base[lang][baseModuleName], specific[lang][specificModuleName]))));
    }, {});
};

/**
 * given a list of strings builds and writes a json i18n bundle to be handled by the app
 * If they are not defined, the bundle will not be filtered.
 *
 * @param {String} path - path of the file to be created (i.e: '/home/proj/testproj/i18nbundle.json')
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} module - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 * @param {Object[]} [keys] -
 *
 * @return {Promise.<Object>}
 */
var writeI18nBundle = exports.writeI18nBundle = async function writeI18nBundle(path, folder, module, langs, keys) {
    var bundle = await (0, _index.getFilteredI18nBundle)(folder, module, langs, keys);
    writeJsonWithTimeStamp(bundle, path);
};

/**
 * given a list of strings builds and writes a json i18n bundle to be handled by the app
 * If they are not defined, the bundle will not be filtered.
 * specificModule and baseModule are merged (specificModule will owerride baseModule).
 * The created JSON will have `specificModule` name inside.
 *
 * @param {String} path - path of the file to be created (i.e: '/home/proj/testproj/i18nbundle.json')
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} baseModule - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String} specificModule - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 * @param {Object[]} [keys] -
 *
 * @return {Promise.<Object>}
 */
var mergeAndWriteI18nBundle = exports.mergeAndWriteI18nBundle = async function mergeAndWriteI18nBundle(path, folder, baseModule, specificModule, langs, keys) {
    if (!baseModule) return writeI18nBundle(path, folder, specificModule, langs, keys);
    var baseBundle = await (0, _index.getFilteredI18nBundle)(folder, baseModule, langs, keys);
    var specificBundle = await (0, _index.getFilteredI18nBundle)(folder, specificModule, langs, keys);
    writeJsonWithTimeStamp(mergeBundles(baseBundle, specificBundle, baseModule, specificModule, baseModule, specificModule), path);
};

var parse = function parse(data) {
    return new Promise(function (resolve, reject) {
        var parser = new _xml2js2.default.Parser();
        parser.parseString(data, function (err, result) {
            return err ? reject(err) : resolve(result);
        });
    });
};

var readFile = function readFile(folder, module, lang) {
    return new Promise(function (resolve, reject) {
        var filePath = getXliffPath(folder, module, lang);
        console.log('read', filePath);
        _fs2.default.readFile(filePath, function (err, data) {
            return err ? reject(err) : resolve(data);
        });
    }).then(parse);
};

var addToTransUnits = function addToTransUnits(transUnits, module, key) {
    return transUnits.push({
        // {
        //     "$": {"id": "da39a3ee5e6b4b0d3255bfef95601890afd80709", "resname": ""},
        //     "source": [""],
        //     "target": [{"$": {"state": "new"}}]
        // }
        '$': { 'id': getUniqueId(module, key), 'resname': key },
        'source': [key],
        'target': [{ '$': { 'state': 'new' } }]
    });
};

var writeFile = function writeFile(folder, destModule, lang, obj) {
    return _fs2.default.writeFileSync(getXliffPath(folder, destModule, lang), new _xml2js2.default.Builder().buildObject(obj));
};

var getTransRoot = function getTransRoot(root) {
    return root.xliff.file[0].body[0] && root.xliff.file[0].body[0]['trans-unit'];
};
var setTransRoot = function setTransRoot(root, transUnits) {
    return root.xliff.file[0].body[0]['trans-unit'] = transUnits;
};

var getOrCreateTransRoot = function getOrCreateTransRoot(root) {
    var units = getTransRoot(root) || [];
    root.xliff.file[0].body[0] = { 'trans-unit': units };
    return units;
};
var emptyTransRoot = function emptyTransRoot(root) {
    root.xliff.file[0].body[0]['trans-unit'] = [];
    return root;
};

var getUnitKey = function getUnitKey(unit) {
    return unit.$.resname;
};
var redefineId = function redefineId(module) {
    return function (item) {
        return item.$.id = getUniqueId(module, getUnitKey(item));
    };
};
var redefineIds = function redefineIds(transUnits, module) {
    return transUnits.forEach(redefineId(module));
};
var copyUnit = function copyUnit(unit, transUnits, module) {
    transUnits.push(unit);
    redefineId(module)(unit);
};

var sumArray = function sumArray(arr) {
    return arr.reduce(function (acc, count) {
        return acc + count;
    }, 0);
};

/**
 * returns a promise that resolves the list of languages defined
 * for a given module or the list of all modules (if module param is not defined)
 * @param {String} folder 
 * @param {String} [module] 
 */
var getFileList = exports.getFileList = async function getFileList(folder, module) {
    return new Promise(function (resolve, reject) {
        _fs2.default.readdir(folder, function (err, files) {
            if (err) {
                reject(new Error('*getFileList()* Unable to scan directory: ' + err));
            }
            var matcher = new RegExp(module ? '^' + module + '.([^.]*).xliff$' : '^(.*?)\.[^\.]+.xliff$');
            var items = files.filter(function (name) {
                return matcher.test(name);
            }).map(function (name) {
                return matcher.exec(name)[1];
            });
            // remove duplicates
            resolve([].concat(_toConsumableArray(new Set(items))));
        });
    });
};

var getModuleKeys = exports.getModuleKeys = async function getModuleKeys(folder, module, lang) {
    var srcData = await readFile(folder, module, lang);
    var srcUnits = getTransRoot(srcData) || [];
    return srcUnits.map(getUnitKey);
};

/**
 * given a set of keys, it updates the xliff db with the strings that are not yet present
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} module - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 * @param {Object[]} [keys] -
 *
 * @return {Promise.<>}
 */
var updateXliffsWithNewStrings = exports.updateXliffsWithNewStrings = async function updateXliffsWithNewStrings(folder, module, langs, keys) {

    return Promise.all(langs.map(function (lang) {
        console.log('*** reading module ' + module + ', lang: ' + lang);

        var count = 0;
        return readFile(folder, module, lang).then(function (data) {
            var transUnits = getOrCreateTransRoot(data);
            var trans = transUnits.map(getUnitKey);

            keys.forEach(function (current) {
                if (trans.indexOf(current) === -1) {

                    addToTransUnits(transUnits, module, current);

                    console.log(lang + ': New string ==> ' + current);
                    count++;
                }
            });

            writeFile(folder, module, lang, data);
            console.log('>>> ' + getFileName(getXliffPath(folder, module, lang)) + ': ' + (count ? 'written ' + count + ' new strings' : 'no new string'));
            return count;
        });
    })).then(function (countArray) {
        if (sumArray(countArray)) {
            printSummary('        SUMMARY: ' + countArray[0] + ' strings added for ' + langs.length + ' languages');
        } else {
            console.log(NO_STRINGS_FOUND);
        }
    });
};

var transUnitContains = function transUnitContains(units, key) {
    return units && units.find(function (item) {
        return getUnitKey(item) === key;
    });
};

var getTransUnit = function getTransUnit(transUnits, key) {
    return transUnitContains(transUnits, key);
};

var getClone = function getClone(folder, module, lang) {
    return readFile(folder, module, lang).then(function (data) {
        data.xliff.file[0].$['target-language'] = lang;
        data.xliff.file[0].$['date'] = new Date().toISOString();
        return data;
    });
};

/**
 * creates a new empty project with all the listed langs
 *
 * @param {String} folder
 * @param {String} templateModule
 * @param {String} destModule
 * @param {Array<String>} langs
 * @returns {Promise<[any, any, any, any, any, any, any, any, any, any]>}
 */
var createProject = exports.createProject = function createProject(folder, templateModule, destModule, langs) {
    return Promise.all(langs.map(function (lang) {
        return getClone(folder, templateModule, 'us').then(emptyTransRoot).then(function (clone) {
            return writeFile(folder, destModule, lang, clone);
        });
    }));
};

/**
 * Clones `us` language creating new languages files
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} module - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 *
 * @return {Promise.<>}
 */
var createNewLanguagesForProject = exports.createNewLanguagesForProject = async function createNewLanguagesForProject(folder, module, langs) {
    return Promise.all(langs.map(function (lang) {
        return getClone(folder, module, 'us').then(function (clone) {
            return writeFile(folder, module, lang, clone);
        });
    }));
};

/**
 * adds new units in destUnits (one for each of the given keys) if not already present
 * trying to gather them from srcUnits
 *
 * @param srcUnits
 * @param destUnits
 * @param keys
 * @param destModule
 * @returns {{countNew: *, countTranslated: *}}
 */
var copyOrCreateUnits = function copyOrCreateUnits(srcUnits, destUnits, keys, destModule) {
    var oldLength = destUnits.length;
    var copied = 0;
    keys.forEach(function (key) {
        // if string is already present in dest module, do nothing.
        // if string is present in src module, copy it.
        // otherwise, create a new one
        var foundInDest = getTransUnit(destUnits, key);
        if (!foundInDest) {
            var foundInSrc = getTransUnit(srcUnits, key);
            if (!foundInSrc) {
                addToTransUnits(destUnits, destModule, key);
            } else {
                copyUnit(foundInSrc, destUnits, destModule);
                copied++;
            }
        }
    });

    return {
        countCopied: copied,
        countNew: destUnits.length - oldLength - copied
    };
};

/**
 * adds missing units from srcData to destData and returns missing units.
 *
 * @param srcData
 * @param destData
 * @param destModule
 * @returns {*}
 */
var copyMissingUnits = function copyMissingUnits(srcData, destData, destModule) {
    var srcUnits = getOrCreateTransRoot(srcData);
    var destUnits = getOrCreateTransRoot(destData);
    console.warn(srcUnits.length, destUnits.length);
    var toBeAdded = srcUnits.filter(function (unit) {
        return !transUnitContains(destUnits, getUnitKey(unit));
    });
    redefineIds(toBeAdded, destModule);
    destUnits.push.apply(destUnits, toBeAdded);
    return toBeAdded;
};

var copyMissingUnitsToProject = exports.copyMissingUnitsToProject = async function copyMissingUnitsToProject(folder, srcModule, destModule, langs) {
    return Promise.all(langs.map(function (lang) {
        console.log('*** reading module ' + srcModule + ', lang: ' + lang);
        return Promise.all([readFile(folder, srcModule, lang), readFile(folder, destModule, lang)]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                srcData = _ref2[0],
                destData = _ref2[1];

            var copied = copyMissingUnits(srcData, destData, destModule);
            writeFile(folder, destModule, lang, destData);
            console.log('>>> ' + getFileName(getXliffPath(folder, destModule, lang)) + ': copied ' + copied.length + ' strings');
            // copied.forEach(unit => console.log(`- ${getUnitKey(unit)}`))
        });
    }));
};

/**
 * given a set of keys, it creates or rewrite a project copying the translation of the source module
 * and adding the not-translated ones as `new trans units`
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String} srcModule - name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String} destModule name of file (weblate project) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} langs - languages prefix (i.e: ['it', 'uk'] )
 * @param {String[]} keys - the keys that have to be copied from srcModule to destModule (or created if not existing)
 * @param {Boolean} [integrateExisting = false] - it does not override the destModule but it integrates it with selected units
 * @return {Promise.<>}
 */
var writeSelectedTransToNewProject = exports.writeSelectedTransToNewProject = async function writeSelectedTransToNewProject(folder, srcModule, destModule, langs, keys) {
    var integrateExisting = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    return Promise.all(langs.map(async function (lang) {
        console.log('*** reading module ' + srcModule + ', lang: ' + lang);

        try {
            var srcData = await readFile(folder, srcModule, lang);
            var srcUnits = getTransRoot(srcData);
            var destData = integrateExisting ? await readFile(folder, destModule, lang) : srcData;
            if (!integrateExisting) {
                setTransRoot(destData, []);
            }
            var destUnits = getTransRoot(destData);

            var _copyOrCreateUnits = copyOrCreateUnits(srcUnits, destUnits, keys, destModule),
                countNew = _copyOrCreateUnits.countNew,
                countCopied = _copyOrCreateUnits.countCopied;

            writeFile(folder, destModule, lang, destData);

            console.log('>>> ' + getFileName(getXliffPath(folder, destModule, lang)) + ': copied ' + countCopied + ' strings and ' + countNew + ' new string added ');
            return countCopied;
        } catch (e) {
            console.warn('*** error in reading module ' + srcModule + ', cloning and filling from "us" version');
            return getClone(folder, srcModule, 'us');
        }
    })).then(function (countArray) {
        if (sumArray(countArray)) {
            printSummary('SUMMARY: ' + countArray[0] + ' strings written in the project ' + destModule + ' for ' + langs.length + ' languages');
        } else {
            console.log(NO_STRINGS_FOUND);
        }
    });
};
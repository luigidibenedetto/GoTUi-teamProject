'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCache = getCache;
exports.loadCache = loadCache;
var LOADING_CACHED = '*** i18n *** loading cached result';
var _cache = {};

function getCache() {
  return _cache;
}

function loadCache(cache, log) {
  if (log) {
    console.log(LOADING_CACHED);
  }
  for (var lang in cache) {
    // we merge languages in the cache, but also modules inside the language object
    if (cache.hasOwnProperty(lang)) {
      if (!_cache[lang]) {
        _cache[lang] = cache[lang];
      } else {
        for (var mod in cache[lang]) {
          _cache[lang][mod] = cache[lang][mod];
        }
      }
    }
  }
}
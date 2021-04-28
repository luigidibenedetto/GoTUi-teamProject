import { trans, getCache, loadCache } from '../lib/i18n';

export const I18N_MODULE_NAMESPACE = 'b2c-tui-fe'

function checkCache(language, namespace) {
  const cache = getCache();
  return cache && cache[language] && cache[language][namespace] !== undefined;
}

function getTranslate(language, namespace, bundle) {
  const hasCache = checkCache(language, namespace);
  if (!hasCache) {
    loadCache(bundle);
  }

  return (id, options) =>
    trans(language, namespace, id, options);
}

export const translateSelector = state => getTranslate(state.language, I18N_MODULE_NAMESPACE, state.i18nBundle)
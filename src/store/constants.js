import { Languages } from "../utils/static";

export const SELECT_CURRENCY = "SELECT_CURRENCY";

function CodeCurrency() {
  const valueCurrency = window.localStorage.getItem("GoTUI-Currency")
  if (valueCurrency) {
    return valueCurrency
  } else {
    return "GBP"
  }
}

function CodeLanguage() {
  let valueLanguage = window.location.pathname
  if (valueLanguage !== "/") {
    valueLanguage = Languages.find((language) => (window.location.pathname === ("/" + language.CODE))).LANGUAGE
  } else {
    valueLanguage = "en-GB"
    }
  return valueLanguage
}

function CodePath() {
  let valuePath = window.location.pathname
  if (window.location.pathname !== "/") {
    valuePath = window.location.pathname
  } else {
    valuePath = "/en"
    }
  return valuePath
}

export const defaultStore = {
  currency : CodeCurrency(),
  language : CodeLanguage(),
  path: CodePath(),
};
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
  const aryPath = window.location.pathname.split("/");

  let valueLanguage = aryPath[1]

  const Path = Languages.map((element) => (element.CODE))

  if (Path.includes(valueLanguage)) {
    valueLanguage = Languages.find((language) => (aryPath[1] === (language.CODE))).LANGUAGE
  } else {
    valueLanguage = "en-GB"
    }
  return valueLanguage
}

function CodePath() {
  const aryPath = window.location.pathname.split("/");
  const Path = Languages.map((element) => (element.CODE))
  
  let valuePath = "";

 if (Path.includes(aryPath[1])) {
    valuePath = window.location.pathname
  } else {
    aryPath[1] = "uk"
    window.location.pathname = aryPath.join("/");
    valuePath = "/uk"
  }
  return valuePath
}

export const defaultStore = {
  currency : CodeCurrency(),
  language : CodeLanguage(),
  path: CodePath(),
};
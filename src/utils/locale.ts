import GENERAL_CONFIG from "../config/general";
import { validateLocale } from "./validator";

export const getLocale = (locale?: string) => {
  const configString = localStorage.getItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME);
  if (configString && JSON.parse(configString).locale) {
    return JSON.parse(configString).locale;
  }
  if (locale && validateLocale(locale)) {
    return locale;
  }
  if (navigator?.language) {
    return navigator.language;
  }
  return GENERAL_CONFIG.DEFAULT_LOCALE;
};

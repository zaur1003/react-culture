import GENERAL_CONFIG from "../config/general";
import { CurrencyType } from "../types/types";
import { getLocale } from "./locale";

export const retrieveLocale = (): string => {
  const configString = localStorage.getItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME);
  if (!configString) return getLocale();
  const config = JSON.parse(configString);
  return config.locale ?? getLocale();
};

export const retrieveCurrency = (): CurrencyType => {
  const configString = localStorage.getItem(GENERAL_CONFIG.LOCAL_STORAGE_NAME);
  if (!configString) return GENERAL_CONFIG.DEFAULT_CURRENCY as CurrencyType;
  const config = JSON.parse(configString);
  return config.currency ?? (GENERAL_CONFIG.DEFAULT_CURRENCY as CurrencyType);
};

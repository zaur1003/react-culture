import { InitializerInterface } from "../types/types";
import { getLocale } from "./locale";

export const validateLocale = (locale?: string): boolean => {
  if (!locale) return false;
  try {
    const availableCanonicalLocales: string[] = (
      Intl as any
    ).getCanonicalLocales(locale);
    return availableCanonicalLocales.length > 0;
  } catch (err) {
    // Log error with logger
    return false;
  }
};

export const validateInitConfig = (config: InitializerInterface) => {
  if (!validateLocale(config?.locale)) {
    const locale = getLocale();
    Object.assign(config, { locale });
  }
  return config;
};

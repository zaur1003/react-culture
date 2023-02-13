import { retrieveCurrency, retrieveLocale } from "../utils/retrieve";

export const formatCurrency = (num?: number) => {
  if (!num) return "";
  const locale = retrieveLocale();
  const currency = retrieveCurrency();

  return num.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
};

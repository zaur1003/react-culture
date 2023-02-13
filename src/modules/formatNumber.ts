import { retrieveLocale } from "../utils/retrieve";

export const formatNumber = (num?: string | number) => {
  if (!num) return "";
  const locale = retrieveLocale();
  const convertedNumber = Number(num);
  if (Number.isNaN(convertedNumber)) return "";
  return convertedNumber.toLocaleString(locale);
};

import { retrieveLocale } from "../utils/retrieve";

export const formatNumber = (num?: string | number) => {
  if (!num) return NaN;
  const locale = retrieveLocale();
  const convertedNumber = Number(num);
  if (Number.isNaN(convertedNumber)) return NaN;
  return convertedNumber.toLocaleString(locale);
};

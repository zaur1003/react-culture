import { DateOptions } from "../types/types";
import { retrieveDateOptions, retrieveLocale } from "../utils/retrieve";

export const formatDate = (
  date: string | Date = new Date(),
  options?: DateOptions
): string => {
  const locale = retrieveLocale();
  const defaultDateOptions = retrieveDateOptions();
  const dateOptions = { ...defaultDateOptions, ...options };
  let dateParam = date instanceof Date ? date : new Date(date ?? "");
  console.log("debug--date", date);
  console.log("debug--dateParam", dateParam);

  if (isNaN(dateParam.getTime())) {
    // TODO use logger to let them know that date is invalid
    dateParam = new Date();
    console.log("debug--dateParam is invalid", dateParam);
  }
  console.log(
    "debug--dateParam toLocaleDateString",
    dateParam.toLocaleDateString(locale, dateOptions)
  );
  return dateParam.toLocaleDateString(locale, dateOptions);
};

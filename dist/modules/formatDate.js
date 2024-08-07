"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const retrieve_1 = require("../utils/retrieve");
const formatDate = (date = new Date(), options) => {
    const locale = (0, retrieve_1.retrieveLocale)();
    const defaultDateOptions = (0, retrieve_1.retrieveDateOptions)();
    const dateOptions = { ...defaultDateOptions, ...options };
    let dateParam = date instanceof Date ? date : new Date(date ?? "");
    console.log("debug--date", date);
    console.log("debug--dateParam", dateParam);
    if (!isNaN(dateParam.getTime())) {
        // TODO use logger to let them know that date is invalid
        dateParam = new Date();
        console.log("debug--dateParam is invalid", dateParam);
    }
    console.log("debug--dateParam toLocaleDateString", dateParam.toLocaleDateString(locale, dateOptions));
    return dateParam.toLocaleDateString(locale, dateOptions);
};
exports.formatDate = formatDate;
//# sourceMappingURL=formatDate.js.map
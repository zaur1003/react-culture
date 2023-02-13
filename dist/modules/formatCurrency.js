"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
const retrieve_1 = require("../utils/retrieve");
const formatCurrency = (num) => {
    if (!num)
        return "";
    const locale = (0, retrieve_1.retrieveLocale)();
    const currency = (0, retrieve_1.retrieveCurrency)();
    return num.toLocaleString(locale, {
        style: "currency",
        currency: currency,
    });
};
exports.formatCurrency = formatCurrency;
//# sourceMappingURL=formatCurrency.js.map
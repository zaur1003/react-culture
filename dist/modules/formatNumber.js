"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = void 0;
const retrieve_1 = require("../utils/retrieve");
const formatNumber = (num) => {
    if (!num)
        return "";
    const locale = (0, retrieve_1.retrieveLocale)();
    const convertedNumber = Number(num);
    if (Number.isNaN(convertedNumber))
        return "";
    return convertedNumber.toLocaleString(locale);
};
exports.formatNumber = formatNumber;
//# sourceMappingURL=formatNumber.js.map
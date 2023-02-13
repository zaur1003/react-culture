"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveCurrency = exports.retrieveLocale = void 0;
const general_1 = __importDefault(require("../config/general"));
const locale_1 = require("./locale");
const retrieveLocale = () => {
    const configString = localStorage.getItem(general_1.default.LOCAL_STORAGE_NAME);
    if (!configString)
        return (0, locale_1.getLocale)();
    const config = JSON.parse(configString);
    return config.locale ?? (0, locale_1.getLocale)();
};
exports.retrieveLocale = retrieveLocale;
const retrieveCurrency = () => {
    const configString = localStorage.getItem(general_1.default.LOCAL_STORAGE_NAME);
    if (!configString)
        return general_1.default.DEFAULT_CURRENCY;
    const config = JSON.parse(configString);
    return config.currency ?? general_1.default.DEFAULT_CURRENCY;
};
exports.retrieveCurrency = retrieveCurrency;
//# sourceMappingURL=retrieve.js.map
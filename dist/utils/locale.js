"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocale = void 0;
const general_1 = __importDefault(require("../config/general"));
const validator_1 = require("./validator");
const getLocale = (locale) => {
    const configString = localStorage.getItem(general_1.default.LOCAL_STORAGE_NAME);
    if (configString && JSON.parse(configString).locale) {
        return JSON.parse(configString).locale;
    }
    if (locale && (0, validator_1.validateLocale)(locale)) {
        return locale;
    }
    if (navigator?.language) {
        return navigator.language;
    }
    return general_1.default.DEFAULT_LOCALE;
};
exports.getLocale = getLocale;
//# sourceMappingURL=locale.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInitConfig = exports.validateLocale = void 0;
const locale_1 = require("./locale");
const validateLocale = (locale) => {
    if (!locale)
        return false;
    try {
        const availableCanonicalLocales = Intl.getCanonicalLocales(locale); // TODO: work on the way to support older / not rely on INTL
        return availableCanonicalLocales.length > 0;
    }
    catch (err) {
        // Log error with logger
        return false;
    }
};
exports.validateLocale = validateLocale;
const validateInitConfig = (config) => {
    if (!(0, exports.validateLocale)(config?.locale)) {
        const locale = (0, locale_1.getLocale)();
        Object.assign(config, { locale });
    }
    return config;
};
exports.validateInitConfig = validateInitConfig;
//# sourceMappingURL=validator.js.map
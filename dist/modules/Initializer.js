"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateConfigure = exports.main = void 0;
const general_1 = __importDefault(require("../config/general"));
const validator_1 = require("../utils/validator");
const main = (initConfig) => {
    const config = (0, validator_1.validateInitConfig)(initConfig);
    const configString = JSON.stringify(config);
    localStorage.setItem(general_1.default.LOCAL_STORAGE_NAME, configString);
};
exports.main = main;
const updateConfigure = (reInitConfig) => {
    const prevConfigString = localStorage.getItem(general_1.default.LOCAL_STORAGE_NAME) ?? "{}";
    const mainConfig = JSON.parse(prevConfigString);
    const config = (0, validator_1.validateInitConfig)(reInitConfig);
    Object.assign(mainConfig, config);
    const newConfigString = JSON.stringify(mainConfig);
    localStorage.removeItem(general_1.default.LOCAL_STORAGE_NAME);
    localStorage.setItem(general_1.default.LOCAL_STORAGE_NAME, newConfigString);
};
exports.updateConfigure = updateConfigure;
//# sourceMappingURL=Initializer.js.map
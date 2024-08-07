import * as Initializer from "./modules/Initializer";
import * as NumberFormatter from "./modules/formatNumber";
import * as CurrencyFormatter from "./modules/formatCurrency";
import * as DateFormatter from "./modules/formatDate";

/** Initializer */
export const InitializeCulture = Initializer.main;
export const UpdateCulture = Initializer.updateConfigure;

/** Formatters */
export const formatNumber = NumberFormatter.formatNumber;
export const formatCurrency = CurrencyFormatter.formatCurrency;
export const formatDate = DateFormatter.formatDate;

import * as Initializer from "./modules/Initializer";
import * as NumberFormatter from "./modules/formatNumber";
import * as CurrencyFormatter from "./modules/formatCurrency";

/** Initializer */
export const InitializeCulture = Initializer.main;
export const ReInitializeCulture = Initializer.reconfigure;

/** Formatters */
export const formatNumber = NumberFormatter.formatNumber;
export const formatCurrency = CurrencyFormatter.formatCurrency;

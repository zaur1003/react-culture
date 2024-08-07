/** Interfaces */
export type InitializerInterface = {
    locale?: string;
    calendar?: CalendarType;
    collation?: CollationType;
    currency?: CurrencyType;
    numberingSystem?: NumberingSystemType;
    dateOptions?: DateOptions;
};
export type DateOptions = {
    weekday?: "long" | "short" | "narrow";
    era?: "narrow" | "short" | "long";
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
    day?: "numeric" | "2-digit";
    hour?: "numeric" | "2-digit";
    minute?: "numeric" | "2-digit";
    second?: "numeric" | "2-digit";
    timeZoneName?: "short" | "long";
};
/** Types */
export type CalendarType = "buddhist" | "chinese" | "coptic" | "dangi" | "ethioaa" | "ethiopic" | "gregory" | "hebrew" | "indian" | "islamic" | "islamic-civil" | "islamic-rgsa" | "islamic-tbla" | "islamic-umalqura" | "iso8601" | "japanese" | "persian" | "roc";
export type CollationType = "compat" | "emoji" | "eor" | "phonebk" | "pinyin" | "reformed" | "searchjl" | "stroke" | "trad" | "unihan" | "zhuyin";
export type CurrencyType = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XDR" | "XOF" | "XPF" | "XSU" | "YER" | "ZAR" | "ZMW" | "ZWL";
export type NumberingSystemType = "adlm" | "ahom" | "arab" | "arabext" | "bali" | "beng" | "bhks" | "brah" | "cakm" | "cham" | "deva" | "diak" | "fullwide" | "gong" | "gonm" | "gujr" | "guru" | "hanidec" | "hmng" | "hmnp" | "java" | "kali" | "khmr" | "knda" | "lana" | "lanatham" | "laoo" | "latn" | "lepc" | "limb" | "mathbold" | "mathdbl" | "mathmono" | "mathsanb" | "mathsans" | "mlym" | "modi" | "mong" | "mroo" | "mtei" | "mymr" | "mymrshan" | "mymrtlng" | "newa" | "nkoo" | "olck" | "orya" | "osma" | "rohg" | "saur" | "segment" | "shrd" | "sind" | "sinh" | "sora" | "sund" | "takr" | "talu" | "tamldec" | "telu" | "thai" | "tibt" | "tirh" | "tnsa" | "vaii" | "wara" | "wcho";
export type UnitType = "acre" | "bit" | "byte" | "celsius" | "centimeter" | "day" | "degree" | "fahrenheit" | "fluid-ounce" | "foot" | "gallon" | "gigabit" | "gigabyte" | "gram" | "hectare" | "hour" | "inch" | "kilobit" | "kilobyte" | "kilogram" | "kilometer" | "liter" | "megabit" | "megabyte" | "meter" | "mile" | "mile-scandinavian" | "milliliter" | "millimeter" | "millisecond" | "minute" | "month" | "ounce" | "percent" | "petabyte" | "pound" | "second" | "stone" | "terabit" | "terabyte" | "week" | "yard" | "year";
//# sourceMappingURL=types.d.ts.map
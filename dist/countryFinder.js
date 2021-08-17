"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSymbolWithIsoCode = exports.getSymbolWithIsoNumber = exports.getCurrencyWithIsoNumber = exports.allCurrencies = exports.listNameAndId = exports.all = exports.continent = exports.name = exports.id = exports.countryCode = void 0;
var countries_1 = require("./data/countries");
var currencies_1 = require("./data/currencies");
/**
 * Find country by country iso2 or iso3 code
 * eg: US || us for USA
 *     ET || et || ETH || eth for Ethiopia
 * @param {string} code
 */
var countryCode = function (code) {
    code = code.toUpperCase();
    if (code.length == 2) {
        return countries_1.default.find(function (c) { return c.iso2 == code; });
    }
    else {
        return countries_1.default.find(function (c) { return c.iso3 == code; });
    }
};
exports.countryCode = countryCode;
/**
 * Find by using unique number id of a country
 * @param {number} id
 */
var id = function (id) { return countries_1.default.find(function (c) { return c.id == id; }); };
exports.id = id;
/**
 * Find by using country name
 * eg: Ethiopia
 * @param {string} name
 */
var name = function (name) {
    name = name.toLowerCase();
    return countries_1.default.find(function (c) { return c.name.toLowerCase() == name; });
};
exports.name = name;
/**
 * Finder countries by continent name
 * eg: Africa
 *     Asia
 * @param {string} continent
 * @returns {array} list of countries
 */
var continent = function (continent) {
    continent = continent.toLowerCase();
    return countries_1.default.filter(function (c) { return c.continent.toLowerCase() == continent; });
};
exports.continent = continent;
/**
 * A list of all available countries with the following parameters
 * @returns {array}
 *          list of all available countries
 */
var all = function () { return countries_1.default; };
exports.all = all;
/**
 * A list of all countries names and ID's
 * @returns {array}
 *          name & ID
 */
var listNameAndId = function () { return countries_1.default.map(function (c) { return ({
    id: c.id,
    name: c.name,
}); }); };
exports.listNameAndId = listNameAndId;
/**
 * A list of all available currencies with the following parameters
 * @returns {array}
 *          list of all available currencies
 */
var allCurrencies = function () { return currencies_1.default; };
exports.allCurrencies = allCurrencies;
/**
* Get currency based on ISO number
* @returns {array}
*          currency
*/
var getCurrencyWithIsoNumber = function (isoNumber) {
    return currencies_1.default.filter(function (c) { return c.iso.number == isoNumber; });
};
exports.getCurrencyWithIsoNumber = getCurrencyWithIsoNumber;
/**
 * Get symbol based on ISO number
 * @returns {string}
 *          currency symbol
 */
var getSymbolWithIsoNumber = function (isoNumber) {
    for (var i = 0; i < currencies_1.default.length; i++) {
        if (currencies_1.default[i].iso.number === isoNumber) {
            return currencies_1.default[i].units.major.symbol;
        }
    }
    return "No symbol found with " + isoNumber + ".";
};
exports.getSymbolWithIsoNumber = getSymbolWithIsoNumber;
/**
 * Get symbol based on ISO code
 * @returns {string}
 *          currency symbol
 */
var getSymbolWithIsoCode = function (isoCode) {
    for (var i = 0; i < currencies_1.default.length; i++) {
        if (currencies_1.default[i].iso.code === isoCode) {
            return currencies_1.default[i].units.major.symbol;
        }
    }
    return "No symbol found with " + isoCode + ".";
};
exports.getSymbolWithIsoCode = getSymbolWithIsoCode;
//# sourceMappingURL=countryFinder.js.map
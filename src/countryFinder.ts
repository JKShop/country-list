import countries from "./data/countries";
import currencies from "./data/currencies";

import { Country, Currency } from "./country.interface";

/**
 * Find country by country iso2 or iso3 code
 * eg: US || us for USA
 *     ET || et || ETH || eth for Ethiopia
 * @param {string} code
 */

export const countryCode = (code: string) => {
    code = code.toUpperCase();
    if (code.length == 2) {
        return countries.find((c) => c.iso2 == code);
    } else {
        return countries.find((c) => c.iso3 == code);
    }
};

/**
 * Find by using unique number id of a country
 * @param {number} id
 */
export const id = (id: number) => countries.find((c) => c.id == id);

/**
 * Find by using country name
 * eg: Ethiopia
 * @param {string} name
 */
export const name = (name: string) => {
    name = name.toLowerCase();
    return countries.find((c) => c.name.toLowerCase() == name);
};

/**
 * Finder countries by continent name
 * eg: Africa
 *     Asia
 * @param {string} continent
 * @returns {array} list of countries
 */
export const continent = (continent: string) => {
    continent = continent.toLowerCase();
    return countries.filter((c) => c.continent.toLowerCase() == continent);
};

/**
 * A list of all available countries with the following parameters
 * @returns {array}
 *          list of all available countries
 */

export const all = (): Array<any> => countries;

/**
 * A list of all countries names and ID's
 * @returns {array}
 *          name & ID
 */
export const listNameAndId = (): Array<any> => countries.map((c: Country) => ({
    id: c.id,
    name: c.name,
}));

/**
 * A list of all available currencies with the following parameters
 * @returns {array}
 *          list of all available currencies
 */

 export const allCurrencies = (): Array<any> => currencies;

 /**
 * Get currency based on ISO number
 * @returns {array}
 *          currency
 */

export const getCurrencyWithIsoNumber = (isoNumber: string) => {
    return currencies.filter((c) => c.iso.number == isoNumber);
};

/**
 * Get symbol based on ISO number
 * @returns {string}
 *          currency symbol
 */

 export const getSymbolWithIsoNumber = (isoNumber: string): string => {
    for (let i = 0; i < currencies.length; i++) {
        if (currencies[i].iso.number === isoNumber) {
            return currencies[i].units.major.symbol;
        }
    }

    return `No symbol found with ${isoNumber}.`;
};
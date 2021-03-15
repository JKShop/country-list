/**
 * Find country by country iso2 or iso3 code
 * eg: US || us for USA
 *     ET || et || ETH || eth for Ethiopia
 * @param {string} code
 */
export declare const countryCode: (code: string) => {
    id: number;
    name: string;
    iso2: string;
    /**
     * Find country by country iso2 or iso3 code
     * eg: US || us for USA
     *     ET || et || ETH || eth for Ethiopia
     * @param {string} code
     */
    iso3: string;
    continent: string;
    lat: number;
    long: number;
} | undefined;
/**
 * Find by using unique number id of a country
 * @param {number} id
 */
export declare const id: (id: number) => {
    id: number;
    name: string;
    iso2: string;
    /**
     * Find country by country iso2 or iso3 code
     * eg: US || us for USA
     *     ET || et || ETH || eth for Ethiopia
     * @param {string} code
     */
    iso3: string;
    continent: string;
    lat: number;
    long: number;
} | undefined;
/**
 * Find by using country name
 * eg: Ethiopia
 * @param {string} name
 */
export declare const name: (name: string) => {
    id: number;
    name: string;
    iso2: string;
    /**
     * Find country by country iso2 or iso3 code
     * eg: US || us for USA
     *     ET || et || ETH || eth for Ethiopia
     * @param {string} code
     */
    iso3: string;
    continent: string;
    lat: number;
    long: number;
} | undefined;
/**
 * Finder countries by continent name
 * eg: Africa
 *     Asia
 * @param {string} continent
 * @returns {array} list of countries
 */
export declare const continent: (continent: string) => {
    id: number;
    name: string;
    iso2: string;
    /**
     * Find country by country iso2 or iso3 code
     * eg: US || us for USA
     *     ET || et || ETH || eth for Ethiopia
     * @param {string} code
     */
    iso3: string;
    continent: string;
    lat: number;
    long: number;
}[];
/**
 * A list of all available countries with the following parameters
 * @returns {array}
 *          list of all available countries
 */
export declare const all: () => Array<any>;
/**
 * A list of all countries names and ID's
 * @returns {array}
 *          name & ID
 */
export declare const listNameAndId: () => Array<any>;
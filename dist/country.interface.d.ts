export interface Country {
    id: number;
    name: string;
    iso2: string;
    iso3: string;
    continent: string;
    lat: number;
    long: number;
}
export interface Currency {
    name: string;
    iso: ISO;
    units: Units;
    banknotes: Banknotes;
    coins: Banknotes;
}
export interface Banknotes {
    frequent: string[];
    rare: string[];
}
export interface ISO {
    code: string;
    number: string;
}
export interface Units {
    major: Major;
    minor: Minor;
}
export interface Major {
    name: string;
    symbol: string;
}
export interface Minor {
    name: string;
    symbol: string;
    majorValue: number;
}

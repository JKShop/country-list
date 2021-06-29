declare const currencies: ({
    name: string;
    iso: {
        code: string;
        number: string;
    };
    units: {
        major: {
            name: string;
            symbol: string;
        };
        minor: {
            name: string;
            symbol: string;
            majorValue: number;
        };
        minor2?: undefined;
    };
    banknotes: {
        frequent: string[];
        rare: string[];
    };
    coins: {
        frequent: string[];
        rare: string[];
    };
} | {
    name: string;
    iso: {
        code: string;
        number: string;
    };
    units: {
        major: {
            name: string;
            symbol: string;
        };
        minor: {
            name: string;
            symbol: string;
            majorValue: number;
        };
        minor2: {
            name: string;
            symbol: string;
            majorValue: number;
        };
    };
    banknotes: {
        frequent: string[];
        rare: string[];
    };
    coins: {
        frequent: string[];
        rare: never[];
    };
} | {
    name: string;
    iso: {
        code: string;
        number: string;
    };
    units: {
        major: {
            name: string;
            symbol: string;
        };
        minor: {
            name: string;
            symbol: string;
            majorValue: string;
        };
        minor2?: undefined;
    };
    banknotes: {
        frequent: string[];
        rare: never[];
    };
    coins: {
        frequent: string[];
        rare: never[];
    };
})[];
export default currencies;

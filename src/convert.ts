import countries from "./data/countries.ts";
import {Country} from "./country.interface.ts";

let JsonCountries = JSON.stringify(countries);

const write = Deno.writeTextFile("countries.json", JsonCountries);
write.then(() => console.log("File written to countries.txt"));

let SqlHeader = "INSERT INTO core_countries (id, name, iso2, iso3, continent, lat, long) VALUES";

countries.forEach((c: Country) => {
    console.log(c)
});
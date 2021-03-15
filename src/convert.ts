import countries from './data/countries';
import { Country } from './country.interface';

let Jsoncountries = JSON.stringify(countries);

// @ts-ignore
const Jsonwriter = Deno.writeTextFile("countries.json", Jsoncountries);
Jsonwriter.then(() => console.log("File written to countries.json"));

let Sqlcountries = "INSERT INTO core_countries (id, name, iso2, iso3, continent, latitude, longitude) VALUES\n";

countries.forEach((c: Country) => {
    Sqlcountries += `('${c.id}','${c.name}','${c.iso2}','${c.iso3}','${c.continent}','${c.lat}','${c.long}'),\n`;
});

Sqlcountries = Sqlcountries.slice(0, -2);
Sqlcountries += ";"

// @ts-ignore
const Sqlwriter = Deno.writeTextFile("countries.sql", Sqlcountries);
Sqlwriter.then(() => console.log("File written to countries.sql"));

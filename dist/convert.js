"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = require("./data/countries");
var Jsoncountries = JSON.stringify(countries_1.default);
// @ts-ignore
var Jsonwriter = Deno.writeTextFile("countries.json", Jsoncountries);
Jsonwriter.then(function () { return console.log("File written to countries.json"); });
var Sqlcountries = "INSERT INTO core_countries (id, name, iso2, iso3, continent, latitude, longitude) VALUES\n";
countries_1.default.forEach(function (c) {
    Sqlcountries += "('" + c.id + "','" + c.name + "','" + c.iso2 + "','" + c.iso3 + "','" + c.continent + "','" + c.lat + "','" + c.long + "'),\n";
});
Sqlcountries = Sqlcountries.slice(0, -2);
Sqlcountries += ";";
// @ts-ignore
var Sqlwriter = Deno.writeTextFile("countries.sql", Sqlcountries);
Sqlwriter.then(function () { return console.log("File written to countries.sql"); });
//# sourceMappingURL=convert.js.map
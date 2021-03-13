import { countries } from "./data/countries.ts";

let json_countries = JSON.stringify(countries);

const write = Deno.writeTextFile("countries.json", json_countries);
write.then(() => console.log("File written to countries.txt"));
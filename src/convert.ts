import countries from './data/countries';

let json_countries = JSON.stringify(countries);

// @ts-ignore
const write = Deno.writeTextFile('countries.json', json_countries);
// @ts-ignore
write.then(() => console.log('File written to countries.txt'));

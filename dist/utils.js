"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
// const readCountries = async (
//     fileName: string = "./data/countries.json"
// ): Promise<Array<Country>> => {
//     const countries: string = new TextDecoder("utf-8").decode(
//         await Deno.readFile(fileName)
//     );
//     return countries;
// };
var capitalize = function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
};
exports.capitalize = capitalize;
//# sourceMappingURL=utils.js.map
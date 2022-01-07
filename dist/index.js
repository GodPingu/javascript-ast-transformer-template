"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deobfuscate = void 0;
const parser_1 = require("@babel/parser");
const generator_1 = require("@babel/generator");
const strings_1 = require("./transformations/strings/strings");
function deobfuscate(source, config) {
    const ast = (0, parser_1.parse)(source);
    const transformations = [];
    if (config.doStringsTranformation) {
        transformations.push(new strings_1.default(ast));
    }
    transformations.forEach((tranformation) => tranformation.execute());
    return (0, generator_1.default)(ast).code;
}
exports.deobfuscate = deobfuscate;
//# sourceMappingURL=index.js.map
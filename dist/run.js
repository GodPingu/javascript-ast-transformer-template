"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const _1 = require(".");
const file = (0, fs_1.readFileSync)("input/test.js", "utf-8");
const config = {
    doStringsTranformation: true,
};
const deobfuscated = (0, _1.deobfuscate)(file, config);
(0, fs_1.writeFileSync)("output/test.deob.js", deobfuscated);
//# sourceMappingURL=run.js.map
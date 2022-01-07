import { readFileSync, writeFileSync } from "fs";
import { deobfuscate } from ".";
import { Config } from "./config";

const file = readFileSync("input/test.js", "utf-8");

const config: Config = {
  doStringsTranformation: true,
};

const deobfuscated = deobfuscate(file, config);

writeFileSync("output/test.deob.js", deobfuscated);

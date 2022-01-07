import { Config } from "./config";

import { parse } from "@babel/parser";
import generate from "@babel/generator";

import Transformation from "./transformations/transformation";
import StringsTransformation from "./transformations/strings/strings";

export function deobfuscate(source: string, config: Config): string {
  const ast = parse(source);

  const transformations: Array<Transformation> = [];

  if (config.doStringsTranformation) {
    transformations.push(new StringsTransformation(ast));
  }

  transformations.forEach((tranformation) => tranformation.execute());

  return generate(ast).code;
}

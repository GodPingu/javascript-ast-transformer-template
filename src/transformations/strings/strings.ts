import * as t from "@babel/types";
import traverse, { NodePath, Scope } from "@babel/traverse";

import Transformation from "../transformation";

export default class StringsTransformation extends Transformation {
  constructor(ast: t.File) {
    super("Strings", ast);
  }

  execute(): void {
    this.logger.info("Started transformation execution");

    const self = this;
    traverse(this.ast, {
      enter(path) {
        if (path.node.type === "StringLiteral") {
          path.node.value = self.transformString(path.node.value);
        }
      },
    });

    this.logger.info("Finished transformation execution");
  }

  transformString(toTransform: string): string {
    return toTransform + "_pingu";
  }
}

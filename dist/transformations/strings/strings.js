"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const traverse_1 = require("@babel/traverse");
const transformation_1 = require("../transformation");
class StringsTransformation extends transformation_1.default {
    constructor(ast) {
        super("Strings", ast);
    }
    execute() {
        this.logger.info("Started transformation execution");
        const self = this;
        (0, traverse_1.default)(this.ast, {
            enter(path) {
                if (path.node.type === "StringLiteral") {
                    path.node.value = self.transformString(path.node.value);
                }
            },
        });
        this.logger.info("Finished transformation execution");
    }
    transformString(toTransform) {
        return toTransform + "_pingu";
    }
}
exports.default = StringsTransformation;
//# sourceMappingURL=strings.js.map
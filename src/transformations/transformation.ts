import * as t from "@babel/types";

import * as winston from "winston";

export default abstract class Transformation {
  name: string;

  protected ast: t.File;

  protected logger: winston.Logger;

  constructor(name: string, ast: t.File) {
    this.name = name;
    this.ast = ast;

    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.cli(),
      defaultMeta: { service: this.name },
      transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.Console({
          level: "info",
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.label({ label: this.name, message: true }),
            winston.format.printf(({ level, message, timestamp }) => {
              return `${timestamp} ${level}:${message}`;
            })
          ),
        }),
        new winston.transports.File({
          filename: "error.log",
          level: "error",
          format: winston.format.json(),
        }),
        new winston.transports.File({
          filename: "combined.log",
          format: winston.format.json(),
        }),
      ],
    });
  }

  /**
   * Executes the transformation.
   */
  abstract execute(): void;
}

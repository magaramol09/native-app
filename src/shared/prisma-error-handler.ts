import { Prisma } from "@prisma/client";
import { Entities } from "./db/constant";
import { HttpException, HttpStatus } from "@nestjs/common";

export class PrismaErrorHandler {
  constructor() {}
  getError(error: Error, tableName: Entities) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      switch (error.code) {
        case "P2002":
          throw new HttpException(
            `There is a unique constraint violation, a new ${tableName} cannot be created with this ${error.meta.target[0]}`,
            409
          );
      }
  }
}
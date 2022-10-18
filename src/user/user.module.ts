import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UsersController } from "./user.controller";
import { PrismaRepo } from "src/shared/db/prisma.repo";
import { PrismaErrorHandler } from "src/shared/prisma-error-handler";
import { PrismaClient } from "@prisma/client";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaRepo,PrismaClient, PrismaErrorHandler],
})
export class UserModule {}
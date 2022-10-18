import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Entities } from "./constant";
import { PrismaErrorHandler } from "../prisma-error-handler";

@Injectable()
export class PrismaRepo {
  public repo;
  private currentTable:Entities;
  constructor(private Prisma: PrismaClient,private readonly PrismaError: PrismaErrorHandler) {}

  setEntities(Entities: Entities) {
    this.repo = this.Prisma[Entities];
    this.currentTable = Entities;
  }

  async insert<T>(data: any): Promise<T> {
    return this.repo
      .create({ data })
      .then((res) => {
        return res;
      })
      .catch((error:Error) => {
        this.PrismaError.getError(error,this.currentTable)
      });
  }

  async findOne<T>(id: string): Promise<T> {
    return this.repo
      .findUnique({ where: { id: id } })
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        this.PrismaError.getError(error, this.currentTable);
      });
  }

  async findMany<T>(): Promise<T> {
    return this.repo
      .findMany()
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        this.PrismaError.getError(error, this.currentTable);
      });
  }

  async update<T>(id: string, data: any): Promise<T> {
    return this.repo
      .findOne({ where: { id: id } })
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        this.PrismaError.getError(error, this.currentTable);
      });
  }

  async delete<T>(id: string): Promise<T> {
    return this.repo
      .delete({ where: { id: id } })
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        this.PrismaError.getError(error, this.currentTable);
      });
  }
}

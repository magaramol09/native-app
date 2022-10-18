import { Injectable } from "@nestjs/common";
import { Entities } from "src/shared/db/constant";
import { PrismaRepo } from "src/shared/db/prisma.repo";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { User } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private readonly PrismaRepo: PrismaRepo) {
    this.PrismaRepo.setEntities(Entities.users);
  }
  async create(UserDto: CreateUserDto): Promise<User> {
    return await this.PrismaRepo.insert(UserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.PrismaRepo.findMany();
  }

  async findOne(id: string): Promise<User> {
    return await this.PrismaRepo.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.PrismaRepo.update(id, updateUserDto);
  }

  async remove(id: string): Promise<User> {
    return await this.PrismaRepo.delete(id);
  }
}

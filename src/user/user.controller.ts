import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from "./user.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { User } from "@prisma/client";

@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto):Promise<User>{
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll():Promise<User[]>{
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string):Promise<User>{
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto):Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string):Promise<User> {
    return this.usersService.remove(id);
  }
}
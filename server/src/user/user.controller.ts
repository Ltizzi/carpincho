import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    @HttpCode(201)
    async createUser(@Body() userData:CreateUserDto) : Promise<User>{
        try{
            const user = await this.userService.createUser(userData)
            return user
        }catch(error){
            throw error
        }
    }

    @Get()
    async getUsers() : Promise<User[]>{
        try{
            const users = this.userService.getUsers()
            return users
        }catch(error){
            throw error
        }
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user-dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    try {
      const { username, email, password } = userData;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userModel.create({
        username,
        email,
        password: hashedPassword
      });
      return user;
    } catch (error) {
      throw error
    }
  }

  async getUsers() : Promise<User[]>{
    try{
        const user = this.userModel.find()
        return user
    }catch(error){
        throw error
    }
  }
}

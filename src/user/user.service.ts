import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user .interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModule: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const ahshPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = new this.UserModule({
        username: createUserDto.username,
        password: ahshPassword,
        email: createUserDto.email
      });

      await user.save();

    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    } 
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from './dto/loginDTO';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private JwtService: JwtService,
  ) {}
  async validateUser(loginDTO: LoginDTO): Promise<any> {
    // find user
    try {
      const user = await this.UserService.findOne(loginDTO.username);

      const isValidePassword = await bcrypt.compare(
        loginDTO.password,
        user.password,
      )
    // check password
      if (!isValidePassword) {
        throw new UnauthorizedException('Wrong password')
      }

    // generate JWT

      const payload = {
        username: user.username,
        id: user._id
      }

      return {
        access_token: this.JwtService.sign(payload)
      }
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: LoginDTO) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

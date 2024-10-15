import { Controller, Post, Body, Param, Delete, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/loginDTO';
import { UnauthorizedException } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Res() res: Response,
    @Req() req: Request,
    @Body() loginDTO: LoginDTO) {
    try {
      const token = await this.authService.validateUser(loginDTO);
      if (!token) {
        throw new UnauthorizedException();
      }
      res.cookie('access_token', token.access_token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });

      res.status(200).json({
        access_token: token.access_token,
        message: 'Login successful',
      });
      
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete('logout')
  remove(
    @Req() req: Request,
  )
    {

  }
}

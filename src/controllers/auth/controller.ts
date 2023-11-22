import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthUseCase } from 'src/framework/use-cases/auth';

@Controller('v1')
export class AuthController {
  constructor(private readonly authUsecase: AuthUseCase) {}

  @Post('login')
  async login(@Req() req: Request) {
    console.log(req.body);
    return {
      message: 'OK',
    };
  }

  @Post('register')
  async register(@Req() req: Request) {
    console.log(req.body);
    return {
      message: 'OK',
    };
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    console.log(req.body);
    return {
      message: 'OK',
    };
  }
}

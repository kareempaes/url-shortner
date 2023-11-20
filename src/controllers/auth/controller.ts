import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('v1')
export class AuthController {
  constructor() {}

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

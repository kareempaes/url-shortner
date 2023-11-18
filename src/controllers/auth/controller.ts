import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('v1')
export class AuthController {
  constructor() {}

  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.status(HttpStatus.OK).json({ message: 'OK' });
  }

  @Post('register')
  async register(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.status(HttpStatus.OK).json({ message: 'OK' });
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.status(HttpStatus.OK).json({ message: 'OK' });
  }
}

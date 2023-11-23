import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import {
  AuthLoginRequest,
  AuthRegisterRequest,
} from 'src/core/domain/dtos/auth';
import { AuthUseCase } from 'src/framework/use-cases/auth';

@Controller('v1')
export class AuthController {
  constructor(private readonly authUsecase: AuthUseCase) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() authLoginRequest: AuthLoginRequest) {
    console.log('Controller::AuthLoginRequst', authLoginRequest);

    const result = await this.authUsecase.login(authLoginRequest);

    if (result.isLeft()) {
      throw new HttpException(result.left(), HttpStatus.BAD_REQUEST);
    }

    return {
      message: 'OK',
    };
  }

  @Post('register')
  async register(@Body() authRegisterRequest: AuthRegisterRequest) {
    console.log('Controller::AuthRegisterRequest', authRegisterRequest);

    const result = await this.authUsecase.register(authRegisterRequest);

    if (result.isLeft()) {
      throw new HttpException(result.left(), HttpStatus.BAD_REQUEST);
    }

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

import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
} from '@nestjs/common';
import {
  AuthLoginRequest,
  AuthLogoutRequest,
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
      const left = result.left();
      throw new HttpException(left.message, left.status);
    }

    return result.right();
  }

  @Post('register')
  async register(@Body() authRegisterRequest: AuthRegisterRequest) {
    console.log('Controller::AuthRegisterRequest', authRegisterRequest);

    const result = await this.authUsecase.register(authRegisterRequest);

    if (result.isLeft()) {
      const left = result.left();
      throw new HttpException(left.message, left.status);
    }

    return result.right();
  }

  @Post('logout')
  async logout(@Body() authLogoutRequest: AuthLogoutRequest) {
    console.log('Controller::AuthLogoutRequest', authLogoutRequest);

    const result = await this.authUsecase.logout(authLogoutRequest);

    if (result.isLeft()) {
      const left = result.left();
      throw new HttpException(left.message, left.status);
    }

    return result.right();
  }
}

import { IAuth } from 'src/core/domain/entities/auth';

export class AuthLoginResponse {
  token: string;
  user: IAuth;
}

export class AuthRegisterResponse {
  token: string;
  user: IAuth;
}

export class AuthLogoutResponse {
  message: string;
}

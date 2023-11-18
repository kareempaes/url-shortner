import { IAuth } from 'src/core/domain/entities/auth';

export class AuthLoginResponse {
  token: string;
  user: IAuth;

  constructor(data: AuthLoginResponse) {
    Object.assign(this, data);
  }
}

export class AuthRegisterResponse {
  token: string;
  user: IAuth;

  constructor(data: AuthRegisterResponse) {
    Object.assign(this, data);
  }
}

export class AuthLogoutResponse {
  message: string;

  constructor(data: AuthLogoutResponse) {
    Object.assign(this, data);
  }
}

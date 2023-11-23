import { IUser } from '../../entities/user';

export interface IAuthLoginResponse {
  token: string;
  user: IUser;
}

export class AuthLoginResponse {
  token: string;
  user: IUser;

  private constructor(data: IAuthLoginResponse) {
    Object.assign(this, data);
  }
}

export interface IAuthRegisterResponse {
  token: string;
  user: IUser;
}

export class AuthRegisterResponse {
  token: string;
  user: IUser;

  constructor(data: IAuthRegisterResponse) {
    Object.assign(this, data);
  }
}

export interface IAuthLogoutResponse {
  message: string;
}

export class AuthLogoutResponse {
  message: string;

  constructor(data: IAuthLogoutResponse) {
    Object.assign(this, data);
  }
}

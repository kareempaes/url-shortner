import { IsNotEmpty, IsString } from 'class-validator';
export class AuthRegisterRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthLoginRequest {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthLogoutRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}

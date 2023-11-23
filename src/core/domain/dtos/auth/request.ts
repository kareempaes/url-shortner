import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class AuthRegisterRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthLoginRequest {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthLogoutRequest {
  @IsString()
  @IsNotEmpty()
  id: number;
}

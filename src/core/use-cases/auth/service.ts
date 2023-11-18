import { Either } from 'monet';
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthLogoutRequest,
  AuthLogoutResponse,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from 'src/core/domain/dtos/auth';

export abstract class AuthUseCase {
  abstract login(
    req: AuthLoginRequest,
  ): Promise<Either<Error, AuthLoginResponse>>;

  abstract logout(
    req: AuthLogoutRequest,
  ): Promise<Either<Error, AuthLogoutResponse>>;

  abstract register(
    req: AuthRegisterRequest,
  ): Promise<Either<Error, AuthRegisterResponse>>;
}

import { Either } from 'monet';
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from 'src/core/domain/dtos/auth';

export abstract class AuthUseCase {
  abstract login(
    req: AuthLoginRequest,
  ): Promise<Either<Error, AuthLoginResponse>>;

  abstract register(
    req: AuthRegisterRequest,
  ): Promise<Either<Error, AuthRegisterResponse>>;
  abstract logout(
    req: AuthLoginRequest,
  ): Promise<Either<Error, AuthLoginResponse>>;
}

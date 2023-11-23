import { Either } from 'monet';
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from 'src/core/domain/dtos/auth';
import { BaseException } from 'src/core/shared/errors';

export abstract class AuthUseCase {
  abstract login(
    req: AuthLoginRequest,
  ): Promise<Either<BaseException, AuthLoginResponse>>;

  abstract register(
    req: AuthRegisterRequest,
  ): Promise<Either<BaseException, AuthRegisterResponse>>;
  abstract logout(
    req: AuthLoginRequest,
  ): Promise<Either<BaseException, AuthLoginResponse>>;
}

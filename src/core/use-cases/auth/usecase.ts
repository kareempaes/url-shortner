import { Either } from 'monet';
import { AuthLoginRequest, AuthLoginResponse } from 'src/core/domain/dtos/auth';

export abstract class AuthUseCase {
  abstract login(
    req: AuthLoginRequest,
  ): Promise<Either<Error, AuthLoginResponse>>;
}

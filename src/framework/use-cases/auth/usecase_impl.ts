import { Either } from 'monet';
import { AuthLoginRequest, AuthLoginResponse } from 'src/core/domain/dtos/auth';
import { AuthRepository } from 'src/core/repositories/auth';
import { UserRepository } from 'src/core/repositories/user';
import { AuthUseCase } from 'src/core/use-cases/auth';

export class AuthUseCaseImpl implements AuthUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async login(
    request: AuthLoginRequest,
  ): Promise<Either<Error, AuthLoginResponse>> {
    const userResults = await this.userRepository.getUser({
      email: request.email,
    });

    if (userResults.isLeft()) {
      return Either.left(userResults.left());
    }

    const token = await this.authRepository.login(userResults.right());

    if (token.isLeft()) {
      return Either.left(token.left());
    }

    return Either.right(
      new AuthLoginResponse({
        token: token.right(),
        user: userResults.right(),
      }),
    );
  }
}

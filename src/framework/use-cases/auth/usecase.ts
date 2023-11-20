import { Either } from 'monet';
import { AuthLoginRequest, AuthLoginResponse } from 'src/core/domain/dtos/auth';
import { AuthUseCase } from './abstraction';
import { AuthRepository } from 'src/framework/repositories/auth/abstraction';
import { UserRepository } from 'src/framework/repositories/user/abstraction';

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

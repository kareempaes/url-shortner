import { Either } from 'monet';
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthLogoutRequest,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from 'src/core/domain/dtos/auth';
import { AuthUseCase } from './abstraction';
import { AuthRepository } from 'src/framework/repositories/auth/abstraction';
import { UserRepository } from 'src/framework/repositories/user/abstraction';
import { BaseException } from 'src/core/shared/errors';
import { User } from 'src/core/domain/entities/user';
import { BcryptService } from 'src/framework/services/bcrypt';

export class AuthUseCaseImpl implements AuthUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async register(
    req: AuthRegisterRequest,
  ): Promise<Either<BaseException, AuthRegisterResponse>> {
    const user = User.New(req);
    const hashedPassword = await this.bcryptService.hash(req.password);
    user.modify({ password: hashedPassword });
    const userResults = await this.userRepository.createUser(user);

    if (userResults.isLeft()) {
      return Either.left(userResults.left());
    }

    const token = await this.authRepository.login(userResults.right());

    if (token.isLeft()) {
      return Either.left(token.left());
    }

    return Either.right({
      token: token.right(),
      user: userResults.right(),
    });
  }

  async logout(
    req: AuthLogoutRequest,
  ): Promise<Either<BaseException, AuthLoginResponse>> {
    console.log(req);
    throw new Error('Method not implemented.');
  }

  async login(
    req: AuthLoginRequest,
  ): Promise<Either<BaseException, AuthLoginResponse>> {
    console.log(req);
    throw new Error('Method not implemented.');
    // const userResults = await this.userRepository.getUser({
    //   email: request.email,
    // });

    // if (userResults.isLeft()) {
    //   return Either.left(userResults.left());
    // }

    // const token = await this.authRepository.login(userResults.right());

    // if (token.isLeft()) {
    //   return Either.left(token.left());
    // }

    // return Either.right({
    //   token: token.right(),
    // });
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Either } from 'monet';
import { IUser } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/shared/errors';
import { AuthRepository } from './abstraction';

@Injectable()
export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly jwt: JwtService) {}

  async login(entity: IUser): Promise<Either<RepositoryException, string>> {
    const payload = { name: entity.name, sub: entity.id };
    const token = await this.jwt.sign(payload);

    if (!token) {
      return Either.left(new RepositoryException('Error signing token'));
    }

    return Either.right(token);
  }
}

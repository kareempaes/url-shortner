import { InjectRepository } from '@nestjs/typeorm';
import { Either } from 'monet';
import { IUser, User } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/domain/shared/errors';
import { UserRepository } from 'src/core/repositories/user';
import { UserModel } from './model';
import { Repository } from 'typeorm';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userModel: Repository<UserModel>,
  ) {}

  async getUser(id: number): Promise<Either<RepositoryException, IUser>> {
    const result = await this.userModel.findOneBy({ id });

    if (result) {
      return Either.right(User.New(result));
    }

    return Either.left(new RepositoryException('User not found'));
  }

  async createUser(entity: IUser): Promise<Either<RepositoryException, IUser>> {
    const user = await this.userModel.findOneBy({ email: entity.email });

    if (user) {
      return Either.left(new RepositoryException('User already exists'));
    }

    const result = await this.userModel.save(entity);

    return Either.right(User.New(result));
  }

  async updateUser(
    entity: Partial<IUser>,
  ): Promise<Either<RepositoryException, IUser>> {
    const user = await this.userModel.findOneBy({ id: entity.id });

    if (!user) {
      return Either.left(new RepositoryException('User not found'));
    }

    const result = await this.userModel.save(entity);

    return Either.right(User.New(result));
  }

  async deleteUser(id: number): Promise<Either<RepositoryException, string>> {
    const user = await this.userModel.findOneBy({ id });

    if (!user) {
      return Either.left(new RepositoryException('User not found'));
    }

    await this.userModel.delete({ id });

    return Either.right('success');
  }
}

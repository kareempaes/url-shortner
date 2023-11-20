import { InjectRepository } from '@nestjs/typeorm';
import { Either } from 'monet';
import { IUser, User } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/shared/errors';
import { UserModel } from './model';
import { Repository } from 'typeorm';
import { UserRepository } from './abstraction';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userModel: Repository<UserModel>,
  ) {}

  async getUser({
    id,
    email,
  }: {
    id?: number;
    email?: string;
  }): Promise<Either<RepositoryException, IUser>> {
    const result = await this.userModel.findOne({
      where: { id, email },
    });

    if (result) {
      return Either.right(User.New(result));
    }

    return Either.left(RepositoryException.New('User not found'));
  }

  async createUser(entity: IUser): Promise<Either<RepositoryException, IUser>> {
    const user = await this.userModel.findOneBy({ email: entity.email });

    if (user) {
      return Either.left(RepositoryException.New('User already exists'));
    }

    const result = await this.userModel.save(entity);

    return Either.right(User.New(result));
  }

  async updateUser(
    entity: Partial<IUser>,
  ): Promise<Either<RepositoryException, IUser>> {
    const user = await this.userModel.findOneBy({ id: entity.id });

    if (!user) {
      return Either.left(RepositoryException.New('User not found'));
    }

    const result = await this.userModel.save(entity);

    return Either.right(User.New(result));
  }

  async deleteUser(id: number): Promise<Either<RepositoryException, string>> {
    const user = await this.userModel.findOneBy({ id });

    if (!user) {
      return Either.left(RepositoryException.New('User not found'));
    }

    await this.userModel.delete({ id });

    return Either.right('success');
  }
}

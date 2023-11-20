import { Either } from 'monet';
import { IUser } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/shared/errors';

export abstract class UserRepository {
  abstract getUser({
    id,
    email,
  }: {
    id?: number;
    email?: string;
  }): Promise<Either<RepositoryException, IUser>>;

  abstract createUser(
    entity: IUser,
  ): Promise<Either<RepositoryException, IUser>>;

  abstract updateUser(
    entity: Partial<IUser>,
  ): Promise<Either<RepositoryException, IUser>>;

  abstract deleteUser(id: number): Promise<Either<RepositoryException, string>>;
}

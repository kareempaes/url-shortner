import { Either } from 'monet';
import { IUser } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/domain/shared/errors';

export abstract class UserRepository {
  abstract getUser(): Promise<Either<RepositoryException, IUser>>;
  abstract updateUser(): Promise<Either<RepositoryException, IUser>>;
  abstract createUser(): Promise<Either<RepositoryException, IUser>>;
  abstract deleteUser(): Promise<Either<RepositoryException, void>>;
}

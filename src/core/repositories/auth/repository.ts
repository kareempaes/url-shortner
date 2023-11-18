import { Either } from 'monet';
import { IAuth } from 'src/core/domain/entities/auth';
import { IUser } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/domain/shared/errors';

export abstract class AuthRepository {
  abstract login({
    email,
    password,
  }: IAuth): Promise<Either<RepositoryException, string>>;

  abstract register({
    email,
    name,
    password,
  }: IUser): Promise<Either<RepositoryException, string>>;

  abstract logout({ id }: IUser): Promise<Either<RepositoryException, void>>;
}

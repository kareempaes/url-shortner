import { Either } from 'monet';
import { IUser } from 'src/core/domain/entities/user';
import { RepositoryException } from 'src/core/shared/errors';

export abstract class AuthRepository {
  abstract login(entity: IUser): Promise<Either<RepositoryException, string>>;
}

import { Either } from 'monet';
import { IURL } from 'src/core/domain/entities/url/entity';
import { RepositoryException } from 'src/core/shared/errors';

export abstract class URLRepository {
  abstract findByURL(): Promise<Either<RepositoryException, IURL>>;
  abstract findByShortURL(): Promise<Either<RepositoryException, IURL>>;
  abstract createURL(): Promise<Either<RepositoryException, IURL>>;
  abstract updateURL(): Promise<Either<RepositoryException, IURL>>;
  abstract deleteURL(): Promise<Either<RepositoryException, string>>;
}

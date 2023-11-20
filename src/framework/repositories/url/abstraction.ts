import { Either } from 'monet';
import { IURL } from 'src/core/domain/entities/url/entity';
import { RepositoryException } from 'src/core/shared/errors';

export abstract class URLRepository {
  abstract findByURL(url: string): Promise<Either<RepositoryException, IURL>>;

  abstract findByShortURL(
    url: string,
  ): Promise<Either<RepositoryException, IURL>>;

  abstract createURL(entity: IURL): Promise<Either<RepositoryException, IURL>>;
  abstract updateURL(entity: IURL): Promise<Either<RepositoryException, IURL>>;
  abstract deleteURL(id: string): Promise<Either<RepositoryException, string>>;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { URLModel } from './model';
import { URLRepository } from './abstraction';
import { Repository } from 'typeorm';
import { Either } from 'monet';
import { RepositoryException } from 'src/core/shared/errors';
import { IURL, URL } from 'src/core/domain/entities/url/entity';

@Injectable()
export class URLRepositoryImpl implements URLRepository {
  constructor(
    @InjectRepository(URLModel) private readonly urlModel: Repository<URLModel>,
  ) {}
  findByShortURL(url: string): Promise<Either<RepositoryException, IURL>> {
    console.log(url);
    throw new Error('Method not implemented.');
  }
  createURL(entity: IURL): Promise<Either<RepositoryException, IURL>> {
    console.log(entity);
    throw new Error('Method not implemented.');
  }
  updateURL(entity: IURL): Promise<Either<RepositoryException, IURL>> {
    console.log(entity);
    throw new Error('Method not implemented.');
  }
  deleteURL(id: string): Promise<Either<RepositoryException, string>> {
    console.log(id);
    throw new Error('Method not implemented.');
  }

  async findByURL(url: string): Promise<Either<RepositoryException, IURL>> {
    const result = await this.urlModel.findOne({
      where: { url },
    });

    if (!result) {
      return Either.left(RepositoryException.New('URL not found'));
    }

    return Either.right(URL.New(result));
  }
}

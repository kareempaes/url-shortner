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

  async createURL(entity: IURL): Promise<Either<RepositoryException, IURL>> {
    const url = await this.urlModel.findOne({ where: { url: entity.url } });

    if (url) {
      return Either.left(RepositoryException.New('URL already exists'));
    }

    const result = await this.urlModel.save(entity);

    if (!result) {
      return Either.left(RepositoryException.New('Error creating URL'));
    }

    return Either.right(URL.New(result));
  }

  async updateURL(entity: IURL): Promise<Either<RepositoryException, IURL>> {
    if (!entity.id) {
      return Either.left(RepositoryException.New('URL ID not found'));
    }

    const result = await this.urlModel.save(entity);

    if (!result) {
      return Either.left(RepositoryException.New('Error updating URL'));
    }

    return Either.right(URL.New(result));
  }

  async deleteURL(id: string): Promise<Either<RepositoryException, string>> {
    const result = this.urlModel.delete(id);
    if (!result) {
      return Either.left(RepositoryException.New('Error deleting URL'));
    }

    return Either.right('URL deleted');
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

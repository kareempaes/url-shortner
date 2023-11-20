import { Injectable } from '@nestjs/common';

@Injectable()
export class URLRepositoryImpl {
  constructor() {}

  async findByURL(url: string) {}
  async findByShortURL(shortURL: string) {}
}

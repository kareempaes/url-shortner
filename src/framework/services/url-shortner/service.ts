import { configService } from 'src/configuration/database';
import { URLShortnerService } from './abstract';
import { nanoid } from 'nanoid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class URLShortnerServiceImpl implements URLShortnerService {
  constructor() {}

  shortenURL(): string {
    const id = nanoid();
    return `${configService.getValue('SHORT_URL_BASE')}/${id}`;
  }
}

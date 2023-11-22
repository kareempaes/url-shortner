import { configService } from 'src/configuration/database';
import { URLShortnerService } from './abstract';
import { nanoid } from 'nanoid';
export class URLShortnerServiceImpl implements URLShortnerService {
  constructor() {}

  async shortenURL(url: string): Promise<string> {
    const id = nanoid();
    const shortenedURL = `${configService.getValue('SHORT_URL_BASE')}/${id}`;
    return url;
  }
}

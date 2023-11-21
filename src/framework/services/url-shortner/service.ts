import { URLShortnerService } from './abstract';

export class URLShortnerServiceImpl implements URLShortnerService {
  constructor() {}

  async shortenURL(url: string): Promise<string> {
    return url;
  }
}

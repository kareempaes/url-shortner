export abstract class URLShortnerService {
  abstract shortenURL(url: string): Promise<string>;
}

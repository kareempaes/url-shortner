import { Module } from '@nestjs/common';
import { BcryptServiceImpl } from './bcrypt';
import { URLShortnerServiceImpl } from './url-shortner';

@Module({
  imports: [],
  providers: [BcryptServiceImpl, URLShortnerServiceImpl],
  exports: [BcryptServiceImpl, URLShortnerServiceImpl],
})
export class ServiceModule {}

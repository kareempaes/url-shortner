import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repositories/module';

@Module({
  imports: [RepositoryModule],
  providers: [],
  exports: [],
})
export class UseCaseModule {}

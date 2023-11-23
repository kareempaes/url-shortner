import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repositories/module';
import { ServiceModule } from '../services/module';
import { AuthUseCaseImpl } from './auth';

@Module({
  imports: [RepositoryModule, ServiceModule],
  providers: [AuthUseCaseImpl],
  exports: [AuthUseCaseImpl],
})
export class UseCaseModule {}

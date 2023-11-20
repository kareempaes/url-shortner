import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user';
import { UserRepositoryImpl } from './user';
import { AuthRepositoryImpl } from './auth';
import { URLModel, URLRepositoryImpl } from './url';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel, URLModel])],
  providers: [UserRepositoryImpl, AuthRepositoryImpl, URLRepositoryImpl],
  exports: [UserRepositoryImpl, AuthRepositoryImpl, URLRepositoryImpl],
})
export class RepositoryModule {}

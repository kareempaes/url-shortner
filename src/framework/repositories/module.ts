import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user';
import { UserRepositoryImpl } from './user';
import { AuthRepositoryImpl } from './auth';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserRepositoryImpl, AuthRepositoryImpl],
  exports: [UserRepositoryImpl, AuthRepositoryImpl],
})
export class RepositoryModule {}

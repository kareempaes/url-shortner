import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth';
import { configService } from 'src/configuration/database';
import { URLController } from 'src/controllers/url/controller';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AuthController, URLController],
  providers: [],
})
export class AppModule {}

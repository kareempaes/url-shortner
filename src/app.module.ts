import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}

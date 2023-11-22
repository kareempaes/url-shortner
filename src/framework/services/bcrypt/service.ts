import { Injectable } from '@nestjs/common';
import { BcryptService } from './abstract';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptServiceImpl implements BcryptService {
  constructor() {}

  async hash(password: string): Promise<string> {
    const rounds = 10;
    const salt = await bcrypt.genSalt(rounds);
    return await bcrypt.hash(password, salt);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}

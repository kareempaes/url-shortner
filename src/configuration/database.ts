import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

dotenv.config();

export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, throwOnMissing = true) {
    const value = this.env[key];

    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode !== 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    const port = parseInt(this.getValue('POSTGRES_PORT') as string);
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: port,
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: ['dist/framework/repositories/**/*.model.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/framework/database/migrations/*.js'],
      ssl: this.isProduction(),
    };
  }
}

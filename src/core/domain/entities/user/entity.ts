import { IAuth } from '../auth/entity';
import { IClaims } from './claims';

export interface IUser extends IAuth {
  id?: number | undefined;
  name: string;
  claims?: IClaims;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User implements IUser {
  readonly id?: number | undefined;
  readonly name: string;
  readonly email: string;
  readonly claims?: IClaims;
  readonly password?: string | undefined;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;

  private constructor(obj: IUser) {
    Object.assign(this, obj);
  }

  modify(obj: Partial<IUser>): User {
    return User.New({
      ...this,
      ...obj,
    });
  }

  static New(obj: IUser): User {
    return new this(obj);
  }

  static fromJSON(json: string): User {
    return this.New(JSON.parse(json));
  }
}

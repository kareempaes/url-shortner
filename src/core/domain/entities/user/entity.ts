import { IAuth } from '../auth/entity';

export interface IUser extends IAuth {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User implements IUser {
  readonly name: string;
  readonly id?: string | undefined;
  readonly email: string;
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

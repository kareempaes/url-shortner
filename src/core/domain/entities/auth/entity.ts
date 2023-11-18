export interface IAuth {
  email: string;
  password?: string;
}

export class Auth implements IAuth {
  readonly email: string;
  readonly password?: string;

  private constructor(obj: IAuth) {
    Object.assign(this, obj);
  }

  modify(obj: Partial<IAuth>): Auth {
    return Auth.New({
      ...this,
      ...obj,
    });
  }

  static New(obj: IAuth): Auth {
    return new this(obj);
  }

  static fromJSON(json: string): Auth {
    return this.New(JSON.parse(json));
  }
}

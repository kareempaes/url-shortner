export interface IAuth {
  email: string;
  password: string;
}

export class Auth implements IAuth {
  readonly email: string;
  readonly password: string;

  constructor(obj: IAuth) {
    Object.assign(this, obj);
  }

  validate(): boolean {
    return true;
  }

  toJSON(): string {
    return JSON.stringify(this);
  }

  static New(obj: IAuth): Auth {
    return new this(obj);
  }

  static fromJSON(json: string): Auth {
    return new this(JSON.parse(json));
  }
}

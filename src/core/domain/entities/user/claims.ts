import { Role } from 'src/core/shared/constants';

export interface IClaims {
  role: Role;
  iat: number;
  exp: number;
}

export class Claims implements IClaims {
  readonly role: Role;
  readonly iat: number;
  readonly exp: number;

  private constructor(obj: IClaims) {
    Object.assign(this, obj);
  }

  modify(obj: Partial<IClaims>): Claims {
    return Claims.New({
      ...this,
      ...obj,
    });
  }

  static New(obj: IClaims): Claims {
    return new this(obj);
  }

  static fromJSON(json: string): Claims {
    return this.New(JSON.parse(json));
  }
}

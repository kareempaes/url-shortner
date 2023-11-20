export interface IURL {
  id?: number;
  url: string;
  shortUrl: string;
  count: number;
  createdAt: Date;
  updatedAt: Date;
}

export class URL implements IURL {
  readonly id?: number;
  readonly url: string;
  readonly count: number;
  readonly shortUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  private constructor(obj: IURL) {
    Object.assign(this, obj);
  }

  modify(obj: Partial<IURL>): URL {
    return URL.New({
      ...this,
      ...obj,
    });
  }

  static New(obj: IURL): URL {
    return new this(obj);
  }

  static fromJSON(json: string): URL {
    return this.New(JSON.parse(json));
  }
}

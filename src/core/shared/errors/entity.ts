export class RepositoryException extends Error {
  status: number;

  private constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'RepositoryException';
    this.status = status;
    this.stack = new Error().stack;
  }

  static New(message: string): RepositoryException {
    return new RepositoryException(message);
  }
}

export class EntityException extends Error {
  status: number;

  private constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'EntityException';
    this.status = status;
    this.stack = new Error().stack;
  }

  static New(message: string): EntityException {
    return new EntityException(message);
  }
}

export class UseCaseException extends Error {
  status: number;

  private constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'UseCaseException';
    this.status = status;
    this.stack = new Error().stack;
  }

  static New(message: string): UseCaseException {
    return new UseCaseException(message);
  }
}

export class ControllerException extends Error {
  status: number;

  private constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'ControllerException';
    this.status = status;
    this.stack = new Error().stack;
  }

  static New(message: string): ControllerException {
    return new ControllerException(message);
  }
}

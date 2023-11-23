export class BaseException extends Error {
  name: string;
  status: number;
  stack?: string;

  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'BaseException';
    this.status = status;
    this.stack = new Error().stack;
  }
}

export class RepositoryException extends BaseException {
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

export class EntityException extends BaseException {
  private constructor(message: string, status: number = 500, stack?: string) {
    super(message);
    this.name = 'EntityException';
    this.status = status;
    this.stack = stack;
  }

  static New(message: string): EntityException {
    return new EntityException(message);
  }
}

export class UseCaseException extends BaseException {
  private constructor(message: string, status: number = 500, stack?: string) {
    super(message);
    this.name = 'UseCaseException';
    this.status = status;
    this.stack = stack;
  }

  static New(message: string): UseCaseException {
    return new UseCaseException(message);
  }
}

export class ControllerException extends Error {
  status: number;

  private constructor(message: string, status: number = 500, stack?: string) {
    super(message);
    this.name = 'ControllerException';
    this.status = status;
    this.stack = stack;
  }

  static New(message: string): ControllerException {
    return new ControllerException(message);
  }
}

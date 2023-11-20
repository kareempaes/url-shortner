export class RepositoryException extends Error {
  private constructor(message: string) {
    super(message);
    this.name = 'RepositoryException';
  }

  static New(message: string): RepositoryException {
    return new RepositoryException(message);
  }
}

export class EntityException extends Error {
  private constructor(message: string) {
    super(message);
    this.name = 'EntityException';
  }

  static New(message: string): EntityException {
    return new EntityException(message);
  }
}

export class UseCaseException extends Error {
  private constructor(message: string) {
    super(message);
    this.name = 'UseCaseException';
  }

  static New(message: string): UseCaseException {
    return new UseCaseException(message);
  }
}

export class ControllerException extends Error {
  private constructor(message: string) {
    super(message);
    this.name = 'ControllerException';
  }

  static New(message: string): ControllerException {
    return new ControllerException(message);
  }
}

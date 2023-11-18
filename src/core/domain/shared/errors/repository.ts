export class RepositoryException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryException';
  }
}

export class EntityException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EntityException';
  }
}

export class UseCaseException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UseCaseException';
  }
}

export class ControllerException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ControllerException';
  }
}

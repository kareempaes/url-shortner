export class RepositoryException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryException';
  }
}

export class RepositoryNotFoundException extends RepositoryException {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryNotFoundException';
  }
}

export class RepositoryNotCreatedException extends RepositoryException {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryNotCreatedException';
  }
}

export class RepositoryNotUpdatedException extends RepositoryException {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryNotUpdatedException';
  }
}

export class RepositoryNotDeletedException extends RepositoryException {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryNotDeletedException';
  }
}

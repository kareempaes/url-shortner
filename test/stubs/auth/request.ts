import {
  AuthLoginRequest,
  AuthRegisterRequest,
} from 'src/core/domain/dtos/auth';

export const AuthRegisterRequestStub = (): AuthRegisterRequest => ({
  email: 'test@example.com',
  name: 'test testerson',
  password: 'testtesttest',
});

export const AuthLoginRequestStub = (): AuthLoginRequest => ({
  email: 'test@example.com',
  password: 'testtesttest',
});

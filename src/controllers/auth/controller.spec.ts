import { AuthLoginRequest, AuthLoginResponse } from 'src/core/domain/dtos/auth';
import { AuthController } from './controller';
import { AuthUseCase } from 'src/framework/use-cases/auth';
import { AuthLoginRequestStub } from 'test/stubs/auth';

const mockAuthUseCase = jest.fn<AuthUseCase, []>(() => ({
  login: jest.fn(),
  logout: jest.fn(),
  register: jest.fn(),
}));

jest.mock('src/framework/use-cases/auth', () => ({
  AuthUseCase: mockAuthUseCase,
}));

describe('Authentication Controller', () => {
  let controller: AuthController;
  let authUsecase: AuthUseCase;
  let authLoginRequest: AuthLoginRequest;
  let authLoginResponst: AuthLoginResponse;
  let authRegisterRequest: AuthRegisterRequest;
  let authRegisterResponse: AuthRegisterResponse;

  beforeAll(() => {
    authUsecase = new mockAuthUseCase();
    controller = new AuthController(authUsecase);
  });

  beforeEach(() => {
    jest.clearAllMocks();

    authLoginRequest = AuthLoginRequestStub();
  });

  it('should return auth response object', () => {
    expect(controller).toBeDefined();
  });
});

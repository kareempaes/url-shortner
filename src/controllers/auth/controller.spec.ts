import { AuthController } from './controller';
import { AuthUseCase } from 'src/framework/use-cases/auth';

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

  beforeAll(() => {
    authUsecase = new mockAuthUseCase();
    controller = new AuthController(authUsecase);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

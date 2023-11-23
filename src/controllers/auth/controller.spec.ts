import { AuthController } from './controller';
import { AuthUseCase } from 'src/framework/use-cases/auth';
describe('Authentication Controller', () => {
  let controller: AuthController;
  let authUsecase: AuthUseCase;

  beforeAll(() => {});

  beforeEach(() => {
    controller = new AuthController(authUsecase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

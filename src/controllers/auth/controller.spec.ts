import { AuthController } from './controller';
import { AuthUseCase } from 'src/framework/use-cases/auth';
import { Test } from '@nestjs/testing';
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthLogoutRequest,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from 'src/core/domain/dtos/auth';
import { Role } from 'src/core/shared/constants';
import { Right } from 'monet';

const user = {
  email: 'test@example.com',
  password: 'testtesttest',
  name: 'test testerson',
  claims: { role: 'USER' as Role, iat: 0, exp: 0 },
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Request Stubs
const AuthRegisterRequestStub = (): AuthRegisterRequest => ({
  email: 'test@example.com',
  name: 'test testerson',
  password: 'testtesttest',
});

const AuthLoginRequestStub = (): AuthLoginRequest => ({
  email: 'test@example.com',
  password: 'testtesttest',
});

const AuthLogoutRequestStub = (): AuthLogoutRequest => ({
  id: 1234567,
});

// Response Stubs
const AuthRegisterResponseStub = (): AuthRegisterResponse => ({
  token: 'test',
  user: user,
});

const AuthLoginResponseStub = (): AuthLoginResponse => ({
  token: 'somerandomtokenijusttypedoutforfun',
  user: user,
});

const AuthLogoutResponseStub = () => ({
  message: 'Successfully logged out',
});

describe('Authentication Controller', () => {
  let controller: AuthController;
  beforeEach(async () => {
    const moduleRef = Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthUseCase,
          useValue: {
            login: jest.fn().mockResolvedValue(Right(AuthLoginResponseStub())),
            logout: jest
              .fn()
              .mockResolvedValue(Right(AuthLogoutResponseStub())),
            register: jest
              .fn()
              .mockResolvedValue(Right(AuthRegisterResponseStub())),
          },
        },
      ],
    }).compile();

    controller = (await moduleRef).get(AuthController);
  });

  it('/POST Login Success', async () => {
    const response = await controller.login(AuthLoginRequestStub());
    console.log(response);
    expect(response).toEqual(AuthLoginResponseStub());
  });

  it('/POST Logout Failure', async () => {
    const response = await controller.logout(AuthLogoutRequestStub());
    expect(response).toEqual(AuthLogoutResponseStub());
  });

  it('/POST Register Success', async () => {
    const response = await controller.register(AuthRegisterRequestStub());
    expect(response).toEqual(AuthRegisterResponseStub());
  });
});

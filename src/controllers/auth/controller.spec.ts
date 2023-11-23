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
import { Left, Right } from 'monet';
import {
  EntityException,
  RepositoryException,
  UseCaseException,
} from 'src/core/shared/errors';
import { HttpException } from '@nestjs/common';

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

const EntityExceptionStub = (): EntityException => ({
  name: 'EntityException',
  message: 'Test',
  status: 500,
});

const RepositoryExceptionStub = (): RepositoryException => ({
  name: 'RepositoryException',
  message: 'Test',
  status: 500,
});

const UseCaseExceptionStub = (): UseCaseException => ({
  name: 'UseCaseException',
  message: 'Test',
  status: 500,
});

describe('Authentication Controller', () => {
  let controllerSuccess: AuthController;
  let controllerFailure: AuthController;

  beforeAll(async () => {
    const moduleSuccess = Test.createTestingModule({
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

    const moduleFailure = Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthUseCase,
          useValue: {
            login: jest.fn().mockResolvedValue(Left(EntityExceptionStub())),
            logout: jest
              .fn()
              .mockResolvedValue(Left(RepositoryExceptionStub())),
            register: jest.fn().mockResolvedValue(Left(UseCaseExceptionStub())),
          },
        },
      ],
    }).compile();

    controllerSuccess = (await moduleSuccess).get(AuthController);
    controllerFailure = (await moduleFailure).get(AuthController);
  });

  it('/POST Login', async () => {
    const value = await controllerSuccess.login(AuthLoginRequestStub());
    expect(value).toEqual(AuthLoginResponseStub());

    expect(
      (await controllerFailure).login(AuthLoginRequestStub()),
    ).rejects.toThrow(new HttpException(EntityExceptionStub().message, 500));
  });

  it('/POST Logout', async () => {
    const value = await controllerSuccess.logout(AuthLogoutRequestStub());
    expect(value).toEqual(AuthLogoutResponseStub());

    expect(
      (await controllerFailure).logout(AuthLogoutRequestStub()),
    ).rejects.toThrow(
      new HttpException(RepositoryExceptionStub().message, 500),
    );
  });

  it('/POST Register Success', async () => {
    const value = await controllerSuccess.register(AuthRegisterRequestStub());
    expect(value).toEqual(AuthRegisterResponseStub());

    expect(
      (await controllerFailure).register(AuthRegisterRequestStub()),
    ).rejects.toThrow(new HttpException(UseCaseExceptionStub().message, 500));
  });
});

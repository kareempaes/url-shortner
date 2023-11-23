import {
  AuthLoginResponse,
  AuthRegisterResponse,
} from 'src/core/domain/dtos/auth';
import { Role } from 'src/core/shared/constants';

const user = {
  email: 'test@example.com',
  password: 'testtesttest',
  name: 'test testerson',
  claims: { role: 'USER' as Role, iat: 0, exp: 0 },
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const AuthRegisterResponseStub = (): AuthRegisterResponse => ({
  token: 'test',
  user: user,
});

export const AuthLoginResponseStub = (): AuthLoginResponse => ({
  token: 'somerandomtokenijusttypedoutforfun',
  user: user,
});

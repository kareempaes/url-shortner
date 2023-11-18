import { IAuth, IUser } from 'src/core/domain/entities';

export abstract class AuthRepository {
  abstract login({ email, password }: IAuth): Promise<IUser>;
  abstract register({ email, name, password }: IUser): Promise<IUser>;
  abstract logout({ id }: IUser): Promise<null>;
}

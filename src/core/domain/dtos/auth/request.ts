import { IAuth } from 'src/core/domain/entities/auth';

export interface IAuthRequest {
  params: any;
  queries: any;
  data: IAuth;
}

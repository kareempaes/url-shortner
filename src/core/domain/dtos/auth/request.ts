import { IAuth } from 'src/core/domain/entities';

export interface IAuthRequest {
  params: any;
  queries: any;
  data: IAuth;
}

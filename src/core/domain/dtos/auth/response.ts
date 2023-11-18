import { IAuth } from 'src/core/domain/entities';

export interface IAuthRequest {
  metaData: any;
  data: IAuth;
}

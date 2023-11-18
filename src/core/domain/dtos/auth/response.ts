import { IAuth } from 'src/core/domain/entities/auth';

export interface IAuthRequest {
  metaData: any;
  data: IAuth;
}

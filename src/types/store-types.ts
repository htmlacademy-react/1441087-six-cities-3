import { NameSpace } from '../const/store-const';
import { store } from '../store';
import { AuthorizationStatusType, RequestStatusType } from './api-types';
import { Values } from './common-types';
import { CurrentUser } from './user-types';

export type AppDispatch = typeof store.dispatch;

export type NameSpaceType = Values<typeof NameSpace>;

export type UserSlice = {
  authStatus: AuthorizationStatusType;
  authRequestStatus: RequestStatusType;
  currentUser: CurrentUser | null;
};


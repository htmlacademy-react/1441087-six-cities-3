import { createSlice } from '@reduxjs/toolkit';
import { UserSlice } from '../../types/store-types';
import { AuthorizationStatus, RequestStatus } from '../../const/api-const';
import { NameSpace } from '../../const/store-const';
import { checkAuth, login, logout } from '../api-actions';
import { dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const/app-const';

const initialState: UserSlice = {
  authStatus: AuthorizationStatus.Unknown,
  authRequestStatus: RequestStatus.Idle,
  currentUser: null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.currentUser = null;
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.pending, (state) => {
        state.authRequestStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.currentUser = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.authRequestStatus = RequestStatus.Success;
        redirectToRoute(AppRoute.Root);
      })
      .addCase(login.rejected, (state) => {
        state.authRequestStatus = RequestStatus.Failed;
      })
      .addCase(logout.fulfilled, (state) => {
        dropToken();
        state.currentUser = null;
        state.authStatus = AuthorizationStatus.NoAuth;
        redirectToRoute(AppRoute.Root);
      });
  },
});

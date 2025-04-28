import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthData, CurrentUser } from '../../../types/user-types';
import { APIRoute } from '../../../const/api-const';

export const checkAuth = createAsyncThunk<
  CurrentUser,
  undefined,
  { extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const response = await api.get<CurrentUser>(APIRoute.Login);
  return response.data;
});

export const login = createAsyncThunk<CurrentUser, AuthData, { extra: AxiosInstance }>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const response = await api.post<CurrentUser>(APIRoute.Login, {
      email,
      password,
    });
    return response.data;
  }
);

export const logout = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '../types/state';
import { OfferFull, OfferPreviews } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserAuth } from '../types/user';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import {
  redirectToRoute,
  requireAuthorization,
} from './action';
import { dropToken, saveToken } from '../services/token';
import { State } from '../store/reducer';
import { Reviews } from '../types/review';

const getOfferPreviews = createAsyncThunk<
  OfferPreviews,
  undefined,
  { extra: AxiosInstance }
>('offer/getOfferPreviews', async (_arg, { extra: api }) => {
  const response = await api.get<OfferPreviews>(APIRoute.Offers);
  return response.data;
});

const getOfferFull = createAsyncThunk<
  OfferFull,
  string,
  { extra: AxiosInstance }
>('offer/getOfferFull', async (offerId, { extra: api }) => {
  const response = await api.get<OfferFull>(`${APIRoute.Offers}/${offerId}`);
  return response.data;
});

const getReviews = createAsyncThunk<
  Reviews,
  string,
  { extra: AxiosInstance }
>('review/getReviews', async (offerId, { extra: api }) => {
  const response = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
  return response.data;
});

const getNearOfferPreviews = createAsyncThunk<
  OfferPreviews,
  string,
  { extra: AxiosInstance }
>('offer/getNearOfferPreviews', async (offerId, { extra: api }) => {
  const response = await api.get<OfferPreviews>(`${APIRoute.Offers}/${offerId}/nearby`);
  return response.data;
});

const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserAuth>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Root));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export {
  getOfferPreviews,
  getOfferFull,
  getReviews,
  getNearOfferPreviews,
  loginAction,
  logoutAction,
  checkAuthAction,
};

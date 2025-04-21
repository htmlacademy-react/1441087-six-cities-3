import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '../types/state';
import { OfferFull, OfferPreviews } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { CurrentUser } from '../types/user';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import {
  redirectToRoute,
  requireAuthorization,
} from './action';
import { dropToken } from '../services/token';
import { State } from '../store/reducer';
import { NewReview, Review, Reviews } from '../types/review';

const postLogin = createAsyncThunk<
  CurrentUser,
  AuthData,
  { extra: AxiosInstance }
>(
  'user/postLogin',
  async ({ login: email, password }, { extra: api }) => {
    const response = await api.post<CurrentUser>(APIRoute.Login, { email, password });
    return response.data;
  }
);

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

const postReview = createAsyncThunk<
  Review,
  {offerId: string; review: NewReview},
  { extra: AxiosInstance }
>(
  'review/postReview',
  async ({offerId, review}, { extra: api }) => {
    const response = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, review);
    return response.data;
  }
);

export {
  postLogin,
  getOfferPreviews,
  getOfferFull,
  getReviews,
  getNearOfferPreviews,
  logoutAction,
  checkAuthAction,
  postReview,
};

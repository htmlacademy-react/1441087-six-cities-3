import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch } from '../types/state';
import { OfferFull, OfferPreviews } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserAuth } from '../types/user';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import {
  loadNearOfferPreviews,
  loadOfferFull,
  loadOfferPreviews,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  setNearOfferPreviewsLoadingStatus,
  setOfferFullLoadingStatus,
  setOfferPreviewsLoadingStatus,
  setReviewsLoadingStatus,
} from './action';
import { dropToken, saveToken } from '../services/token';
import { State } from '../store/reducer';
import { Reviews } from '../types/review';

const loadOfferPreviewsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/loadOfferPreviews', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOfferPreviewsLoadingStatus(true));
  const { data } = await api.get<OfferPreviews>(APIRoute.Offers);
  dispatch(loadOfferPreviews(data));
  dispatch(setOfferPreviewsLoadingStatus(false));
});

const loadOfferFullAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/loadOfferFull', async (offerId, { dispatch, extra: api }) => {
  dispatch(setOfferFullLoadingStatus(true));
  const { data } = await api.get<OfferFull>(`${APIRoute.Offers}/${offerId}`);
  dispatch(loadOfferFull(data));
  dispatch(setOfferFullLoadingStatus(false));
});

const loadReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('review/loadReviews', async (offerId, { dispatch, extra: api }) => {
  dispatch(setReviewsLoadingStatus(true));
  const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
  dispatch(loadReviews(data));
  dispatch(setReviewsLoadingStatus(false));
});

const loadNearOfferPreviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/loadNearOfferPreviews', async (offerId, { dispatch, extra: api }) => {
  dispatch(setNearOfferPreviewsLoadingStatus(true));
  const { data } = await api.get<OfferPreviews>(`${APIRoute.Offers}/${offerId}/nearby`);
  dispatch(loadNearOfferPreviews(data));
  dispatch(setNearOfferPreviewsLoadingStatus(false));
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
  loadOfferPreviewsAction,
  loadOfferFullAction,
  loadReviewsAction,
  loadNearOfferPreviewsAction,
  loginAction,
  logoutAction,
  checkAuthAction,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OfferPreviews } from '../../../types/offer-types';
import { APIRoute } from '../../../const/api-const';

export const getOffersPreviews = createAsyncThunk<
  OfferPreviews,
  undefined,
  { extra: AxiosInstance }
>('offers/getOfferPreviews', async (_arg, { extra: api }) => {
  const response = await api.get<OfferPreviews>(APIRoute.Offers);
  return response.data;
});

export const getFavoriteOffers = createAsyncThunk<
  OfferPreviews,
  undefined,
  { extra: AxiosInstance }
>('offers/getFavoriteOffers', async (_arg, { extra: api }) => {
  const response = await api.get<OfferPreviews>(APIRoute.Favorite);
  return response.data;
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { OfferFull, OfferPreviews } from '../../../types/offer-types';
import { APIRoute } from '../../../const/api-const';
import { NewReview, Review, Reviews } from '../../../types/review-types';

export const getOfferFull = createAsyncThunk<
  OfferFull,
  string,
  { extra: AxiosInstance }
>('offer/getOfferFull', async (offerId, { extra: api }) => {
  const response = await api.get<OfferFull>(`${APIRoute.Offers}/${offerId}`);
  return response.data;
});

export const getNearOfferPreviews = createAsyncThunk<
  OfferPreviews,
  string,
  { extra: AxiosInstance }
>('offer/getNearOfferPreviews', async (offerId, { extra: api }) => {
  const response = await api.get<OfferPreviews>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  return response.data;
});

export const getReviews = createAsyncThunk<Reviews, string, { extra: AxiosInstance }>(
  'fullOffer/getReviews',
  async (offerId, { extra: api }) => {
    const response = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    return response.data;
  }
);

export const postReview = createAsyncThunk<
  Review,
  { offerId: string; review: NewReview },
  { extra: AxiosInstance }
>('fullOffer/postReview', async ({ offerId, review }, { extra: api }) => {
  const response = await api.post<Review>(
    `${APIRoute.Reviews}/${offerId}`,
    review
  );
  return response.data;
});

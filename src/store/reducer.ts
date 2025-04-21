import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setCity,
  setSortOption,
} from './action';
import { AuthorizationStatus, AuthorizationStatusType, CITIES, RequestStatus, RequestStatusType } from '../const';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { OfferFull, OfferPreviews } from '../types/offer';
import { Values } from '../types/common';
import { Reviews } from '../types/review';
import { getNearOfferPreviews, getOfferFull, getOfferPreviews, getReviews } from './api-actions';

type State = {
  authorizationStatus: AuthorizationStatusType;
  city: Values<typeof CITIES>;
  sortOption: SortOptionType;

  offerPreviews: OfferPreviews;
  offerPreviewsStatus: RequestStatusType;

  offerFull: OfferFull | null;
  offerFullStatus: RequestStatusType;

  nearOfferPreviews: OfferPreviews;
  nearOfferPreviewsStatus: RequestStatusType;

  reviews: Reviews;
  reviewsStatus: RequestStatusType;
};

const initialState: State = {
  authorizationStatus: AuthorizationStatus.Unknown,
  city: CITIES.Paris,
  sortOption: SortOption[0],

  offerPreviews: [],
  offerPreviewsStatus: RequestStatus.Idle,

  offerFull: null,
  offerFullStatus: RequestStatus.Idle,

  reviews: [],
  reviewsStatus: RequestStatus.Idle,

  nearOfferPreviews: [],
  nearOfferPreviewsStatus: RequestStatus.Idle,
};

type ReducerType = ReturnType<typeof reducer>;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(getOfferPreviews.pending, (state) => {
      state.offerPreviewsStatus = RequestStatus.Loading;
    })
    .addCase(getOfferPreviews.fulfilled, (state, action) => {
      state.offerPreviews = action.payload;
      state.offerPreviewsStatus = RequestStatus.Success;
    })
    .addCase(getOfferPreviews.rejected, (state) => {
      state.offerPreviewsStatus = RequestStatus.Failed;
    })
    .addCase(getOfferFull.pending, (state) => {
      state.offerFullStatus = RequestStatus.Loading;
    })
    .addCase(getOfferFull.fulfilled, (state, action) => {
      state.offerFull = action.payload;
      state.offerFullStatus = RequestStatus.Success;
    })
    .addCase(getOfferFull.rejected, (state) => {
      state.offerFullStatus = RequestStatus.Failed;
    })
    .addCase(getReviews.pending, (state) => {
      state.reviewsStatus = RequestStatus.Loading;
    })
    .addCase(getReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.reviewsStatus = RequestStatus.Success;
    })
    .addCase(getReviews.rejected, (state) => {
      state.reviewsStatus = RequestStatus.Failed;
    })
    .addCase(getNearOfferPreviews.pending, (state) => {
      state.nearOfferPreviewsStatus = RequestStatus.Loading;
    })
    .addCase(getNearOfferPreviews.fulfilled, (state, action) => {
      state.nearOfferPreviews = action.payload;
      state.nearOfferPreviewsStatus = RequestStatus.Success;
    })
    .addCase(getNearOfferPreviews.rejected, (state) => {
      state.nearOfferPreviewsStatus = RequestStatus.Failed;
    });
});

export type { State, ReducerType };
export { reducer };

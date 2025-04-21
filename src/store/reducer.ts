import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setCity,
  setSortOption,
  loadOfferPreviews,
  setOfferPreviewsLoadingStatus,
  loadOfferFull,
  setOfferFullLoadingStatus,
  loadNearOfferPreviews,
  setNearOfferPreviewsLoadingStatus,
  loadReviews,
  setReviewsLoadingStatus,
} from './action';
import { AuthorizationStatus, AuthorizationStatusType, CITIES } from '../const';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { OfferFull, OfferPreviews } from '../types/offer';
import { Values } from '../types/common';
import { Reviews } from '../types/review';
import { sortReviewsDate } from '../utils/reviews-utils';

type State = {
  authorizationStatus: AuthorizationStatusType;
  city: Values<typeof CITIES>;
  sortOption: SortOptionType;

  offerPreviews: OfferPreviews;
  isOfferPreviewsLoading: boolean;

  offerFull: OfferFull | null;
  isOfferFullLoading: boolean;

  nearOfferPreviews: OfferPreviews;
  isNearOfferPreviewsLoading: boolean;

  reviews: Reviews;
  isReviewsLoading: boolean;
};

const initialState: State = {
  authorizationStatus: AuthorizationStatus.Unknown,
  city: CITIES.Paris,
  sortOption: SortOption[0],

  offerPreviews: [],
  isOfferPreviewsLoading: false,

  offerFull: null,
  isOfferFullLoading: false,

  nearOfferPreviews: [],
  isNearOfferPreviewsLoading: false,

  reviews: [],
  isReviewsLoading: false,
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
    .addCase(loadOfferPreviews, (state, action) => {
      state.offerPreviews = action.payload;
    })
    .addCase(setOfferPreviewsLoadingStatus, (state, action) => {
      state.isOfferPreviewsLoading = action.payload;
    })
    .addCase(loadOfferFull, (state, action) => {
      state.offerFull = action.payload;
    })
    .addCase(setOfferFullLoadingStatus, (state, action) => {
      state.isOfferFullLoading = action.payload;
    })
    .addCase(loadNearOfferPreviews, (state, action) => {
      state.nearOfferPreviews = action.payload.slice(0, 3);
    })
    .addCase(setNearOfferPreviewsLoadingStatus, (state, action) => {
      state.isNearOfferPreviewsLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      sortReviewsDate(action.payload);
      state.reviews = action.payload.slice(0, 10);
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    });
});

export type { State, ReducerType };
export { reducer };

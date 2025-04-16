import { createReducer } from '@reduxjs/toolkit';
import {
  setCity,
  setSortOption,
  loadOfferPreviews,
  requireAuthorization,
  setOfferPreviewsLoadingStatus,
  loadOfferFull,
} from './action';
import { AuthorizationStatus, AuthorizationStatusType, CITIES } from '../const';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { OfferFull, OfferPreviews } from '../types/offer';
import { Values } from '../types/common';

type State = {
  city: Values<typeof CITIES>;
  sortOption: SortOptionType;
  offerPreviews: OfferPreviews;
  offerFull: OfferFull | null;
  isOfferPreviewsLoading: boolean;
  authorizationStatus: AuthorizationStatusType;
};

const initialState: State = {
  city: CITIES.Paris,
  sortOption: SortOption[0],
  offerPreviews: [],
  offerFull: null,
  isOfferPreviewsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

type ReducerType = ReturnType<typeof reducer>;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(loadOfferPreviews, (state, action) => {
      state.offerPreviews = action.payload;
    })
    .addCase(loadOfferFull, (state, action) => {
      state.offerFull = action.payload;
    })
    .addCase(setOfferPreviewsLoadingStatus, (state, action) => {
      state.isOfferPreviewsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export type { State, ReducerType };
export { reducer };

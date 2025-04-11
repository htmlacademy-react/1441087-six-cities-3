import { createReducer } from '@reduxjs/toolkit';
import { setCity, setSortOption, loadOfferPreviews, requireAuthorization } from './action';
import { AuthorizationStatus, AuthorizationStatusType, CITIES } from '../const';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { OfferPreviews } from '../types/offer';

const initialState = {
  city: CITIES.Paris,
  sortOption: SortOption[0] as SortOptionType,
  offerPreviews: [] as OfferPreviews,
  authorizationStatus: AuthorizationStatus.Unknown as AuthorizationStatusType,
};

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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };

import { createReducer } from '@reduxjs/toolkit';
import { setCity, setSortOption, loadOfferPreviews } from './action';
import { CITIES } from '../const';
import { SortOptionType } from '../components/sort/types';
import { getMockOfferPreviews } from '../mock/offer-previews-mock';
import { SortOption } from '../components/sort/const';

const allOfferPreviews = getMockOfferPreviews();

const initialState = {
  city: CITIES.Paris,
  sortOption: SortOption[0] as SortOptionType,
  offerPreviews: allOfferPreviews,
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
    });
});

export { reducer };

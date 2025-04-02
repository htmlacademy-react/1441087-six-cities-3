import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { setCity, getCurrentCityOffers, setSort } from './action';
import { CITIES, SortType } from '../const';
import { getMockOfferPreviews } from '../mock/offer-previews-mock';
import { getCityOffers } from '../utils/city-utils';

const allOfferPreviews = getMockOfferPreviews();

const initialState: State = {
  city: CITIES.Paris,
  sortType: SortType.Popular,
  offerPreviews: getCityOffers(CITIES.Paris, allOfferPreviews),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(getCurrentCityOffers, (state) => {
      state.offerPreviews = getCityOffers(state.city, allOfferPreviews);
    });
});

export { reducer };

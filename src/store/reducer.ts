import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { setCity } from './action';
import { CITIES } from '../const';

const initialState: State = {
  city: CITIES.Paris,
  offerPreviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
});

export { reducer };

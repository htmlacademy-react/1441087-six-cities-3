import { createReducer } from '@reduxjs/toolkit';
import { setCity, setSortOption } from './action';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { Values } from '../types/common-types';
import { CITIES } from '../const/app-const';

type State = {
  city: Values<typeof CITIES>;
  sortOption: SortOptionType;
};

const initialState: State = {
  city: CITIES.Paris,
  sortOption: SortOption[0],
};

type ReducerType = ReturnType<typeof reducer>;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    });
});

export type { State, ReducerType };
export { reducer };

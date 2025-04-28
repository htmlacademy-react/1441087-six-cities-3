import { createReducer } from '@reduxjs/toolkit';
import { setSortOption } from './action';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';

type State = {
  sortOption: SortOptionType;
};

const initialState: State = {
  sortOption: SortOption[0],
};

type ReducerType = ReturnType<typeof reducer>;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    });
});

export type { State, ReducerType };
export { reducer };

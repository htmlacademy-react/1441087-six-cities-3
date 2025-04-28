import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitySlice } from '../../types/store-types';
import { NameSpace } from '../../const/store-const';
import { CITIES } from '../../const/app-const';
import { City } from '../../types/app-types';

const initialState: CitySlice = {
  city: CITIES.Paris,
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
  },
});

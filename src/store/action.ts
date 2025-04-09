import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';

const setCity = createAction('city/setCity', (city: City) => ({
  payload: city,
}));

const setSortOption = createAction(
  'city/setSortOption',
  (sortOption: SortOptionType) => ({
    payload: sortOption,
  })
);

export { setCity, setSortOption };

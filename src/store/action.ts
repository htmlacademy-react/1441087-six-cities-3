import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortType } from '../const';

const setCity = createAction('city/setCity', (city: City) => ({
  payload: city,
}));

const setSort = createAction('sort/setSort', (sortType: typeof SortType[keyof typeof SortType]) => ({
  payload: sortType,
}));

const getCurrentCityOffers = createAction('offer/getCurrentCityOffers');

export { setCity, setSort, getCurrentCityOffers };

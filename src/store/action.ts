import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';
import { OfferPreviews } from '../types/offer';

const setCity = createAction<City>('city/setCity');
const setSortOption = createAction<SortOptionType>('offer/setSortOption');
const loadOfferPreviews = createAction<OfferPreviews>('offer/loadOfferPreviews');

export { setCity, setSortOption, loadOfferPreviews };

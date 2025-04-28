import { createAction } from '@reduxjs/toolkit';
import { SortOptionType } from '../components/sort/types';
import { AppRouteType, City } from '../types/app-types';

const redirectToRoute = createAction<AppRouteType>('app/redirectToRoute');
const setCity = createAction<City>('city/setCity');
const setSortOption = createAction<SortOptionType>('offer/setSortOption');

export { redirectToRoute, setCity, setSortOption };

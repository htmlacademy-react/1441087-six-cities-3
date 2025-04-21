import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';
import { AppRouteType, AuthorizationStatusType } from '../const';

const redirectToRoute = createAction<AppRouteType>('app/redirectToRoute');
const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');
const setCity = createAction<City>('city/setCity');
const setSortOption = createAction<SortOptionType>('offer/setSortOption');

export {
  redirectToRoute,
  requireAuthorization,
  setCity,
  setSortOption,
};

import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';
import { OfferFull, OfferPreviews } from '../types/offer';
import { AppRouteType, AuthorizationStatusType } from '../const';

const redirectToRoute = createAction<AppRouteType>('app/redirectToRoute');

const setCity = createAction<City>('city/setCity');

const setSortOption = createAction<SortOptionType>('offer/setSortOption');
const loadOfferPreviews = createAction<OfferPreviews>('offer/loadOfferPreviews');
const loadOfferFull = createAction<OfferFull>('offer/loadOfferFull');
const setOfferPreviewsLoadingStatus = createAction<boolean>('offer/setOfferPreviewsLoadingStatus');

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

export {
  redirectToRoute,
  setCity,
  setSortOption,
  loadOfferPreviews,
  loadOfferFull,
  setOfferPreviewsLoadingStatus,
  requireAuthorization
};

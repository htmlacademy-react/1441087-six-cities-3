import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';
import { OfferFull, OfferPreviews } from '../types/offer';
import { AppRouteType, AuthorizationStatusType } from '../const';
import { Reviews } from '../types/review';

const redirectToRoute = createAction<AppRouteType>('app/redirectToRoute');

const setCity = createAction<City>('city/setCity');

const setSortOption = createAction<SortOptionType>('offer/setSortOption');
const loadOfferPreviews = createAction<OfferPreviews>('offer/loadOfferPreviews');
const setOfferPreviewsLoadingStatus = createAction<boolean>('offer/setOfferPreviewsLoadingStatus');
const loadOfferFull = createAction<OfferFull>('offer/loadOfferFull');
const loadNearOfferPreviews = createAction<OfferPreviews>('offer/loadNearOfferPreviews');

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

const loadReviews = createAction<Reviews>('review/loadReviews');

export {
  redirectToRoute,
  setCity,
  setSortOption,
  loadOfferPreviews,
  loadOfferFull,
  loadNearOfferPreviews,
  setOfferPreviewsLoadingStatus,
  requireAuthorization,
  loadReviews,
};

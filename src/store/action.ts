import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortOptionType } from '../components/sort/types';
import { OfferFull, OfferPreviews } from '../types/offer';
import { AppRouteType, AuthorizationStatusType } from '../const';
import { Reviews } from '../types/review';

const redirectToRoute = createAction<AppRouteType>('app/redirectToRoute');
const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');
const setCity = createAction<City>('city/setCity');
const setSortOption = createAction<SortOptionType>('offer/setSortOption');

const loadOfferPreviews = createAction<OfferPreviews>('offer/loadOfferPreviews');
const setOfferPreviewsLoadingStatus = createAction<boolean>('offer/setOfferPreviewsLoadingStatus');

const loadOfferFull = createAction<OfferFull>('offer/loadOfferFull');
const setOfferFullLoadingStatus = createAction<boolean>('offer/setOfferFullLoadingStatus');

const loadNearOfferPreviews = createAction<OfferPreviews>('offer/loadNearOfferPreviews');
const setNearOfferPreviewsLoadingStatus = createAction<boolean>('offer/setNearOfferPreviewsLoadingStatus');

const loadReviews = createAction<Reviews>('review/loadReviews');
const setReviewsLoadingStatus = createAction<boolean>('review/setReviewsLoadingStatus');


export {
  redirectToRoute,
  requireAuthorization,
  setCity,
  setSortOption,
  loadOfferPreviews,
  setOfferPreviewsLoadingStatus,
  loadOfferFull,
  setOfferFullLoadingStatus,
  loadNearOfferPreviews,
  setNearOfferPreviewsLoadingStatus,
  loadReviews,
  setReviewsLoadingStatus,
};

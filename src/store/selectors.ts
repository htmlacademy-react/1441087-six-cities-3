import { AuthorizationStatus } from '../const';
import { State } from './reducer';

const selectAuthorizationStatus = (state: State) => state.authorizationStatus;
const selectIsUserLoggedIn = (state: State) => state.authorizationStatus === AuthorizationStatus.Auth;
const selectCity = (state: State) => state.city;
const selectSortOption = (state: State) => state.sortOption;

const selectOfferPreviews = (state: State) => state.offerPreviews;
const selectOfferPreviewsLoadingStatus = (state: State) => state.isOfferPreviewsLoading;

const selectOfferFull = (state: State) => state.offerFull;
const selectOfferFullLoadingStatus = (state: State) => state.isOfferFullLoading;

const selectNearOfferPreviews = (state: State) => state.nearOfferPreviews;
const selectNearOfferPreviewsLoadingStatus = (state: State) => state.isNearOfferPreviewsLoading;

const selectReviews = (state: State) => state.reviews;
const selectReviewsLoadingStatus = (state: State) => state.isReviewsLoading;


export {
  selectAuthorizationStatus,
  selectIsUserLoggedIn,
  selectCity,
  selectSortOption,
  selectOfferPreviews,
  selectOfferPreviewsLoadingStatus,
  selectOfferFull,
  selectOfferFullLoadingStatus,
  selectNearOfferPreviews,
  selectNearOfferPreviewsLoadingStatus,
  selectReviews,
  selectReviewsLoadingStatus,
};

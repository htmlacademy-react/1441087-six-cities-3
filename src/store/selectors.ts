import { AuthorizationStatus } from '../const';
import { State } from './reducer';

const selectAuthorizationStatus = (state: State) => state.authorizationStatus;
const selectIsUserLoggedIn = (state: State) => state.authorizationStatus === AuthorizationStatus.Auth;
const selectCity = (state: State) => state.city;
const selectSortOption = (state: State) => state.sortOption;

const selectOfferPreviews = (state: State) => state.offerPreviews;
const selectOfferPreviewsStatus = (state: State) => state.offerPreviewsStatus;

const selectOfferFull = (state: State) => state.offerFull;
const selectOfferFullStatus = (state: State) => state.offerFullStatus;

const selectNearOfferPreviews = (state: State) => state.nearOfferPreviews;
const selectNearOfferPreviewsStatus = (state: State) => state.nearOfferPreviewsStatus;

const selectReviews = (state: State) => state.reviews;
const selectReviewsStatus = (state: State) => state.reviewsStatus;


export {
  selectAuthorizationStatus,
  selectIsUserLoggedIn,
  selectCity,
  selectSortOption,
  selectOfferPreviews,
  selectOfferPreviewsStatus,
  selectOfferFull,
  selectOfferFullStatus,
  selectNearOfferPreviews,
  selectNearOfferPreviewsStatus,
  selectReviews,
  selectReviewsStatus,
};

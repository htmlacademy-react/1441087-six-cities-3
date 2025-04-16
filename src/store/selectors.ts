import { AuthorizationStatus } from '../const';
import { State } from './reducer';

const selectCity = (state: State) => state.city;
const selectSortOption = (state: State) => state.sortOption;
const selectOfferPreviews = (state: State) => state.offerPreviews;
const selectOfferPreviewsLoadingStatus = (state: State) => state.isOfferPreviewsLoading;
const selectOfferFull = (state: State) => state.offerFull;
const selectAuthorizationStatus = (state: State) => state.authorizationStatus;
const selectIsUserLoggedIn = (state: State) => state.authorizationStatus === AuthorizationStatus.Auth;
const selectReviews = (state: State) => state.reviews;

export {
  selectCity,
  selectSortOption,
  selectOfferPreviews,
  selectOfferPreviewsLoadingStatus,
  selectOfferFull,
  selectAuthorizationStatus,
  selectIsUserLoggedIn,
  selectReviews,
};

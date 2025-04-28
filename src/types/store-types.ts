import { NameSpace } from '../const/store-const';
import { store } from '../store';
import { AuthorizationStatusType, RequestStatusType } from './api-types';
import { Values } from './common-types';
import { OfferFull, OfferPreviews } from './offer-types';
import { Reviews } from './review-types';
import { CurrentUser } from './user-types';

export type AppDispatch = typeof store.dispatch;

export type NameSpaceType = Values<typeof NameSpace>;

export type UserSlice = {
  authStatus: AuthorizationStatusType;
  authRequestStatus: RequestStatusType;
  currentUser: CurrentUser | null;
};

export type OfferSlice = {
  offerPreviews: OfferPreviews;
  offerPreviewsStatus: RequestStatusType;

  offerFull: OfferFull | null;
  offerFullStatus: RequestStatusType;

  nearOfferPreviews: OfferPreviews;
  nearOfferPreviewsStatus: RequestStatusType;

  favoriteOfferPreviews: OfferPreviews;
  favoriteOfferPreviewsStatus: RequestStatusType;
};

export type ReviewSlice = {
  reviews: Reviews;
  reviewsStatus: RequestStatusType;

  postReviewStatus: RequestStatusType;
};

import { NEAR_OFFERS_COUNT } from '../../../const/offer-const';
import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';

export const selectOfferFull = (state: State) => state[NameSpace.FullOffer].offerFull;
export const selectOfferFullStatus = (state: State) => state[NameSpace.FullOffer].offerFullStatus;

export const selectNearOfferPreviews = (state: State) => state[NameSpace.FullOffer].nearOfferPreviews.slice(0, NEAR_OFFERS_COUNT);
export const selectNearOfferPreviewsStatus = (state: State) => state[NameSpace.FullOffer].nearOfferPreviewsStatus;

export const selectReviews = (state: State) => state[NameSpace.FullOffer].reviews;
export const selectReviewsStatus = (state: State) => state[NameSpace.FullOffer].reviewsStatus;

export const selectPostReviewStatus = (state: State) => state[NameSpace.FullOffer].postReviewStatus;

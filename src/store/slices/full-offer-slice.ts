import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/store-const';
import { FullOfferSlice } from '../../types/store-types';
import { RequestStatus } from '../../const/api-const';
import { sortReviewsDate } from '../../utils/reviews-utils';
import {
  getOfferFull,
  getNearOfferPreviews,
  getReviews,
  postReview,
} from '../api-actions';

const initialState: FullOfferSlice = {
  offerFull: null,
  offerFullStatus: RequestStatus.Idle,

  nearOfferPreviews: [],
  nearOfferPreviewsStatus: RequestStatus.Idle,

  reviews: [],
  reviewsStatus: RequestStatus.Idle,

  postReviewStatus: RequestStatus.Idle,
};

export const fullOfferSlice = createSlice({
  name: NameSpace.FullOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOfferFull.pending, (state) => {
        state.offerFullStatus = RequestStatus.Loading;
      })
      .addCase(getOfferFull.fulfilled, (state, action) => {
        state.offerFull = action.payload;
        state.offerFullStatus = RequestStatus.Success;
      })
      .addCase(getOfferFull.rejected, (state) => {
        state.offerFullStatus = RequestStatus.Failed;
      })
      .addCase(getNearOfferPreviews.pending, (state) => {
        state.nearOfferPreviewsStatus = RequestStatus.Loading;
      })
      .addCase(getNearOfferPreviews.fulfilled, (state, action) => {
        state.nearOfferPreviews = action.payload.slice(0, 3);
        state.nearOfferPreviewsStatus = RequestStatus.Success;
      })
      .addCase(getNearOfferPreviews.rejected, (state) => {
        state.nearOfferPreviewsStatus = RequestStatus.Failed;
      })
      .addCase(getReviews.pending, (state) => {
        state.reviewsStatus = RequestStatus.Loading;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = sortReviewsDate(action.payload);
        state.reviewsStatus = RequestStatus.Success;
      })
      .addCase(getReviews.rejected, (state) => {
        state.reviewsStatus = RequestStatus.Failed;
      })
      .addCase(postReview.pending, (state) => {
        state.postReviewStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
        state.postReviewStatus = RequestStatus.Success;
      })
      .addCase(postReview.rejected, (state) => {
        state.postReviewStatus = RequestStatus.Failed;
      });
  },
});

export const fullOfferReducer = fullOfferSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const/api-const';
import { NameSpace } from '../../const/store-const';
import { ReviewSlice } from '../../types/store-types';
import { getReviews, postReview } from '../api-actions';
import { sortReviewsDate } from '../../utils/reviews-utils';

const initialState: ReviewSlice = {
  reviews: [],
  reviewsStatus: RequestStatus.Idle,

  postReviewStatus: RequestStatus.Idle,
};

export const reviewSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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

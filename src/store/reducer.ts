import { createReducer } from '@reduxjs/toolkit';
import { setCity, setSortOption } from './action';
import { SortOptionType } from '../components/sort/types';
import { SortOption } from '../components/sort/const';
import { Values } from '../types/common-types';
import { Reviews } from '../types/review-types';
import { getReviews, postReview } from './api-actions';
import { sortReviewsDate } from '../utils/reviews-utils';
import { RequestStatusType } from '../types/api-types';
import { CITIES } from '../const/app-const';
import { RequestStatus } from '../const/api-const';

type State = {
  city: Values<typeof CITIES>;
  sortOption: SortOptionType;

  reviews: Reviews;
  reviewsStatus: RequestStatusType;

  postReviewStatus: RequestStatusType;
};

const initialState: State = {
  city: CITIES.Paris,
  sortOption: SortOption[0],

  reviews: [],
  reviewsStatus: RequestStatus.Idle,

  postReviewStatus: RequestStatus.Idle,
};

type ReducerType = ReturnType<typeof reducer>;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
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
});

export type { State, ReducerType };
export { reducer };

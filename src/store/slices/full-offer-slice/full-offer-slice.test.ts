import { RequestStatus } from '../../../const/api-const';
import { NewReview, Review } from '../../../types/review-types';
import {
  getMockOfferFull,
  getMockOfferPreviews,
  getMockReviews,
} from '../../../utils/mock-utils';
import { fullOfferActions, fullOfferReducer } from './full-offer-slice';

describe('Full Offer Slice', () => {
  const initialState = {
    offerFull: null,
    offerFullStatus: RequestStatus.Idle,
    nearOfferPreviews: [],
    nearOfferPreviewsStatus: RequestStatus.Idle,
    reviews: [],
    reviewsStatus: RequestStatus.Idle,
    postReviewStatus: RequestStatus.Idle,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = initialState;

    const result = fullOfferReducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with undefined state and empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = initialState;

    const result = fullOfferReducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('Get Full Offer', () => {
    it('should set "offerFullStatus" to "Loading" with "getOfferFull.pending"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Loading,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getOfferFull.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "offerFullStatus" to "Success" and fill in offerFull with "getOfferFull.fulfilled"', () => {
      const mockOfferFull = getMockOfferFull();
      const expectedState = {
        offerFull: mockOfferFull,
        offerFullStatus: RequestStatus.Success,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getOfferFull.fulfilled(mockOfferFull, '', '', '')
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "offerFullStatus" to "Failed" with "getOfferFull.rejected"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Failed,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getOfferFull.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Get Near Offer Previews', () => {
    it('should set "nearOfferPreviewsStatus" to "Loading" with "getNearOfferPreviews.pending"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Loading,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getNearOfferPreviews.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "nearOfferPreviewsStatus" to "Success" and fill in nearOfferPreviews with "getOfferFull.fulfilled"', () => {
      const mockOfferPreviews = getMockOfferPreviews();
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: mockOfferPreviews,
        nearOfferPreviewsStatus: RequestStatus.Success,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getNearOfferPreviews.fulfilled(
          mockOfferPreviews,
          '',
          '',
          ''
        )
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "nearOfferPreviewsStatus" to "Failed" with "getNearOfferPreviews.rejected"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Failed,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getNearOfferPreviews.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Get Reviews', () => {
    it('should set "reviewsStatus" to "Loading" with "getReviews.pending"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Loading,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getReviews.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "reviewsStatus" to "Success" and fill in reviews with "getReviews.fulfilled"', () => {
      const mockReviews = getMockReviews();
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: mockReviews,
        reviewsStatus: RequestStatus.Success,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getReviews.fulfilled(mockReviews, '', '', '')
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "reviewsStatus" to "Failed" with "getReviews.rejected"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Failed,
        postReviewStatus: RequestStatus.Idle,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.getReviews.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('Post Review', () => {
    it('should set "postReviewStatus" to "Loading" with "postReview.pending"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Loading,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.postReview.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "postReviewStatus" to "Success" and fill in review with "postReview.fulfilled"', () => {
      const mockReview: Review = getMockReviews()[0];
      const mockNewReview: NewReview = {
        rating: mockReview.rating,
        comment: mockReview.comment,
      };
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [mockReview],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Success,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.postReview.fulfilled(
          mockReview,
          '',
          {
            offerId: 'q1w2e3',
            review: mockNewReview,
          },
          ''
        )
      );

      expect(result).toEqual(expectedState);
    });

    it('should set "postReviewStatus" to "Failed" with "postReview.rejected"', () => {
      const expectedState = {
        offerFull: null,
        offerFullStatus: RequestStatus.Idle,
        nearOfferPreviews: [],
        nearOfferPreviewsStatus: RequestStatus.Idle,
        reviews: [],
        reviewsStatus: RequestStatus.Idle,
        postReviewStatus: RequestStatus.Failed,
      };

      const result = fullOfferReducer(
        undefined,
        fullOfferActions.postReview.rejected
      );

      expect(result).toEqual(expectedState);
    });
  });
});

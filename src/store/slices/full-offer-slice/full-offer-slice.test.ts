import { RequestStatus } from '../../../const/api-const';
import { fullOfferReducer } from './full-offer-slice';

describe('Full Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      offerFull: null,
      offerFullStatus: RequestStatus.Idle,

      nearOfferPreviews: [],
      nearOfferPreviewsStatus: RequestStatus.Idle,

      reviews: [],
      reviewsStatus: RequestStatus.Idle,

      postReviewStatus: RequestStatus.Idle,
    };
    const expectedState = initialState;

    const result = fullOfferReducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});

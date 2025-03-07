import { Review } from '../../types';
import { getMockAuthStatus } from '../../mock/auth-status';
import { isUserLoggedIn } from '../../utils';
import OfferReviewItem from './offer-review-item';
import ReviewForm from '../review-form';

type OfferReviewsProps = {
  reviews: Review[];
};

const isLoggedIn = isUserLoggedIn(getMockAuthStatus());

export default function OfferReviews({
  reviews,
}: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {isLoggedIn ? <ReviewForm /> : null}
    </section>
  );
}

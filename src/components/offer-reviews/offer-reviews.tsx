import { Review } from '../../types';
import ReviewItem from '../review-item/review-item';
import OfferReviewCreate from '../offer-review-create/offer-review-create';

type OfferReviewsProps = {
  reviews: Review[];
};

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
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <OfferReviewCreate />
    </section>
  );
}

import { Review } from '../../types/review';
import { isUserLoggedIn } from '../../utils/app-utils';
import OfferReviewItem from './offer-review-item';
import ReviewForm from '../review-form';
import useAppSelector from '../../hooks/use-app-selector';
import { selectAuthorizationStatus } from '../../store/selectors';

type OfferReviewsProps = {
  reviews: Review[];
};

function OfferReviews(props: OfferReviewsProps): JSX.Element {
  const { reviews } = props;
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isLoggedIn = isUserLoggedIn(authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
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

export default OfferReviews;

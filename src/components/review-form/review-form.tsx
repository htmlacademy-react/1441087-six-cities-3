import { FormEvent, useState } from 'react';
import { ReviewChangeHandler } from '../../types/review';
import {
  MIN_REVIEW_LENGTH,
  MAN_REVIEW_LENGTH,
  RatingOption,
} from '../../const';
import ReviewRatingStar from './review-rating-star';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { postReview } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offerId = '' } = useParams();
  const [review, setReview] = useState({
    comment: '',
    rating: 0,
  });

  const handleCommentChange: ReviewChangeHandler = (evt): void => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: value });
  };

  const handleRatingChange: ReviewChangeHandler = (evt): void => {
    const { name, value } = evt.currentTarget;
    setReview({ ...review, [name]: Number(value) });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReview({ offerId, review }));
  };

  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="comment">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.values(RatingOption).map(({ value, title }) => (
          <ReviewRatingStar
            key={value}
            value={value}
            title={title}
            onChange={handleRatingChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={review.comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            !review.rating ||
            review.comment.length < MIN_REVIEW_LENGTH ||
            review.comment.length > MAN_REVIEW_LENGTH
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

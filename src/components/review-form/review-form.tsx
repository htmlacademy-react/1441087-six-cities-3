import { useState } from 'react';
import ReviewRatingStar from './review-rating-star';

function ReviewForm(): JSX.Element {
  const [reviewDraft, setReviewDraft] = useState({
    comment: '',
    rating: 0,
  });

  const ratingStars = [5, 4, 3, 2, 1];

  const handleUpdateReviewRating = (rating: number): void => {
    setReviewDraft({
      comment: reviewDraft.comment,
      rating: rating,
    });
  };

  const handleUpdateReviewComment = (comment: string): void => {
    setReviewDraft({
      comment: comment,
      rating: reviewDraft.rating,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item) => (
          <ReviewRatingStar
            key={item}
            order={item}
            onChange={handleUpdateReviewRating}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={reviewDraft.comment}
        onChange={(evt) => handleUpdateReviewComment(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

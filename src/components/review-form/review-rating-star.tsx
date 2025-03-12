type ReviewRatingStarProps = {
  order: number;
  onChange: (rating: number) => void;
};

function ReviewRatingStar(props: ReviewRatingStarProps): JSX.Element {
  const order = props.order;
  const handleUpdateReviewRating = props.onChange;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={order}
        id={`${order}-stars`}
        type="radio"
        onChange={() => handleUpdateReviewRating(order)}
      />
      <label
        htmlFor={`${order}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStar;

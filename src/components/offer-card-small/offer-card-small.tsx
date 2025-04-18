import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offer';
import { AppRoute } from '../../const';
import { getCapitalizedString } from '../../utils/common-utils';
import { getRatingWidth } from '../../utils/offer-utils';

type OfferCardProps = {
  offerPreview: OfferPreview;
};

function OfferCardSmall(props: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isPremium,
    isFavorite,
    previewImage,
    rating,
  } = props.offerPreview;
  const offerLink = AppRoute.Offer.replace(':offerId', id);

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{getCapitalizedString(type)}</p>
      </div>
    </article>
  );
}

export default OfferCardSmall;

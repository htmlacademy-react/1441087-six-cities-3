import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getCapitalizedString, getRatingWidth } from '../../utils';
import { OfferPreview } from '../../types';

type PlaceCardProps = {
  offerPreview: OfferPreview;
};

function PlaceCardMedium(props: PlaceCardProps): JSX.Element {
  const { id, title, type, price, isPremium, previewImage, rating } =
    props.offerPreview;
  const offerLink = AppRoute.Offer.replace(':id', id);

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
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

export default PlaceCardMedium;

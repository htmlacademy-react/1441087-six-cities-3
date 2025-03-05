import { OfferPreview } from '../../types';
import PlaceCardSmall from '../../components/place-card-small/place-card-small';

type FavoriteLocationItemProps = {
  city: string;
  offerPreviews: OfferPreview[];
};

export default function FavoriteLocationItem({
  city,
  offerPreviews,
}: FavoriteLocationItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offerPreviews.map((offerPreview) => (
          <PlaceCardSmall key={offerPreview.id} offerPreview={offerPreview} />
        ))}
      </div>
    </li>
  );
}

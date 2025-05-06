import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const/app-const';
import { offersActions } from '../../store/slices/offers-slice/offers-slice';
import { OfferPreviews } from '../../types/offer-types';
import useAppDispatch from '../../hooks/use-app-dispatch';
import OfferCardSmall from '../offer-card-small';

type FavoriteListItemProps = {
  cityName: string;
  offerPreviews: OfferPreviews;
};

function FavoriteListItem(props: FavoriteListItemProps): JSX.Element {
  const { cityName, offerPreviews } = props;
  const dispatch = useAppDispatch();

  const handleCityClick = () => {
    dispatch(offersActions.setCity(CITIES[cityName]));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Root}
            onClick={handleCityClick}
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offerPreviews.map((offerPreview) => (
          <OfferCardSmall key={offerPreview.id} offerPreview={offerPreview} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteListItem;

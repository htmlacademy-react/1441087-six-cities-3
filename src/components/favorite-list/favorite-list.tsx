import { CITIES } from '../../const';
import { OfferPreview } from '../../types';
import { getCitiesWithFavorites, getCityFavorites } from '../../utils';
import FavoriteLocationItem from '../../components/favorite-location-item/favorite-location-item';

type FavoriteListProps = {
  offerPreviews: OfferPreview[];
};

export default function FavoriteList({
  offerPreviews,
}: FavoriteListProps): JSX.Element {
  const citiesWithFavorites = getCitiesWithFavorites(CITIES, offerPreviews);

  return (
    <ul className="favorites__list">
      {citiesWithFavorites.map((city) => (
        <FavoriteLocationItem
          key={city}
          city={city}
          offerPreviews={getCityFavorites(city, offerPreviews)}
        />
      ))}
    </ul>
  );
}

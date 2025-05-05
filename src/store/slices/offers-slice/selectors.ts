import { NameSpace } from '../../../const/store-const';
import { State } from '../../../types/store-types';
import { sortOfferPreviews } from '../../../components/sort/utils';
import { getCityOffers } from '../../../utils/city-utils';

export const selectCity = (state: State) => state[NameSpace.Offers].city;
export const selectSortOption = (state: State) => state[NameSpace.Offers].sortOption;

export const selectOfferPreviews = (state: State) => state[NameSpace.Offers].offerPreviews;
export const selectOfferPreviewsStatus = (state: State) => state[NameSpace.Offers].offerPreviewsStatus;

export const selectFavoriteOfferPreviews = (state: State) => state[NameSpace.Offers].favoriteOfferPreviews;
export const selectFavoriteOfferPreviewsStatus = (state: State) => state[NameSpace.Offers].favoriteOfferPreviewsStatus;

export const selectMainOffers = (state: State) => {
  const currentCity = state[NameSpace.Offers].city;
  const currentSortOption = state[NameSpace.Offers].sortOption;
  const allOfferPreviews = state[NameSpace.Offers].offerPreviews;

  let offerPreviews = getCityOffers(currentCity, allOfferPreviews);
  offerPreviews = sortOfferPreviews(offerPreviews, currentSortOption);

  return offerPreviews;
};

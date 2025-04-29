import { sortOfferPreviews } from '../components/sort/utils';
import { offersSelectors } from '../store/slices/offers-slice/offers-slice';
import { OfferPreviews } from '../types/offer-types';
import { getCityOffers } from '../utils/city-utils';
import useAppSelector from './use-app-selector';

type ResultMainOfferPreviews = [OfferPreviews, number]

const useMainOfferPreviews = (): ResultMainOfferPreviews => {
  const currentCity = useAppSelector(offersSelectors.selectCity);
  const currentSortOption = useAppSelector(offersSelectors.selectSortOption);
  const allOfferPreviews = useAppSelector(offersSelectors.selectOfferPreviews);

  let offerPreviews = getCityOffers(currentCity, allOfferPreviews);
  offerPreviews = sortOfferPreviews(offerPreviews, currentSortOption);

  const countOfferPreviews = offerPreviews.length;

  return [offerPreviews, countOfferPreviews];
};

export default useMainOfferPreviews;

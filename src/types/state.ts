import { store } from '../store';
import { City } from './city';
import { OfferPreview } from './offer';
import { SortType } from '../const';

type State = {
  city: City;
  sortType: typeof SortType[keyof typeof SortType];
  offerPreviews: OfferPreview[];
};

type AppDispatch = typeof store.dispatch;

export type { State, AppDispatch };

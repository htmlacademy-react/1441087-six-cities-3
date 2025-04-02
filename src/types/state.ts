import { store } from '../store';
import { City } from './city';
import { OfferPreview } from './offer';

type State = {
  city: City;
  offerPreviews: OfferPreview[];
};

type AppDispatch = typeof store.dispatch;

export type { State, AppDispatch };

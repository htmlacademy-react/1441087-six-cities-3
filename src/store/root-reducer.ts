import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/store-const';
import { fullOfferReducer } from './slices/full-offer-slice';
import { offersReducer } from './slices/offers-slice';
import { userReducer } from './slices/user-slice';

export const rootReducer = combineReducers({
  [NameSpace.FullOffer]: fullOfferReducer,
  [NameSpace.Offers]: offersReducer,
  [NameSpace.User]: userReducer,
});

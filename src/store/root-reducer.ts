import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/store-const';
import citySlice from './city-slice';
import userSlice from './user-slice';
import offerSlice from './offer-slice';
import reviewSlice from './review-slice';

export const rootReducer = combineReducers({
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Review]: reviewSlice.reducer,
});

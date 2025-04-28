import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/store-const';
import { OffersSlice } from '../../types/store-types';
import { RequestStatus } from '../../const/api-const';
import { CITIES } from '../../const/app-const';
import { City } from '../../types/app-types';
import { SortOption } from '../../components/sort/const';
import { SortOptionType } from '../../components/sort/types';
import {
  getOfferPreviews,
  getFavoriteOffers,
} from '../api-actions';

const initialState: OffersSlice = {
  city: CITIES.Paris,
  sortOption: SortOption[0],

  offerPreviews: [],
  offerPreviewsStatus: RequestStatus.Idle,

  favoriteOfferPreviews: [],
  favoriteOfferPreviewsStatus: RequestStatus.Idle,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setSortOption(state, action: PayloadAction<SortOptionType>) {
      state.sortOption = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOfferPreviews.pending, (state) => {
        state.offerPreviewsStatus = RequestStatus.Loading;
      })
      .addCase(getOfferPreviews.fulfilled, (state, action) => {
        state.offerPreviews = action.payload;
        state.offerPreviewsStatus = RequestStatus.Success;
      })
      .addCase(getOfferPreviews.rejected, (state) => {
        state.offerPreviewsStatus = RequestStatus.Failed;
      })
      .addCase(getFavoriteOffers.pending, (state) => {
        state.favoriteOfferPreviewsStatus = RequestStatus.Loading;
      })
      .addCase(getFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOfferPreviews = action.payload;
        state.favoriteOfferPreviewsStatus = RequestStatus.Success;
      })
      .addCase(getFavoriteOffers.rejected, (state) => {
        state.favoriteOfferPreviewsStatus = RequestStatus.Failed;
      });
  },
});

export const offersReducer = offersSlice.reducer;

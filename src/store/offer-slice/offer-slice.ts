import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/store-const';
import { OfferSlice } from '../../types/store-types';
import { RequestStatus } from '../../const/api-const';
import {
  getOfferPreviews,
  getOfferFull,
  getNearOfferPreviews,
  getFavoriteOffers,
} from '../api-actions';

const initialState: OfferSlice = {
  offerPreviews: [],
  offerPreviewsStatus: RequestStatus.Idle,

  offerFull: null,
  offerFullStatus: RequestStatus.Idle,

  nearOfferPreviews: [],
  nearOfferPreviewsStatus: RequestStatus.Idle,

  favoriteOfferPreviews: [],
  favoriteOfferPreviewsStatus: RequestStatus.Idle,
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
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
      .addCase(getOfferFull.pending, (state) => {
        state.offerFullStatus = RequestStatus.Loading;
      })
      .addCase(getOfferFull.fulfilled, (state, action) => {
        state.offerFull = action.payload;
        state.offerFullStatus = RequestStatus.Success;
      })
      .addCase(getOfferFull.rejected, (state) => {
        state.offerFullStatus = RequestStatus.Failed;
      })
      .addCase(getNearOfferPreviews.pending, (state) => {
        state.nearOfferPreviewsStatus = RequestStatus.Loading;
      })
      .addCase(getNearOfferPreviews.fulfilled, (state, action) => {
        state.nearOfferPreviews = action.payload.slice(0, 3);
        state.nearOfferPreviewsStatus = RequestStatus.Success;
      })
      .addCase(getNearOfferPreviews.rejected, (state) => {
        state.nearOfferPreviewsStatus = RequestStatus.Failed;
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

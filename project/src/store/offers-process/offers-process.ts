import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, City } from '../../const';
import { OffersProcess } from '../../types/state';
import {
  fetchOffersAction,
  fetchСurrentOffer,
  fetchNearbyOffers,
} from '../api-action';

const initialState: OffersProcess = {
  currentCity: City.Paris,
  offers: [],
  offersInCurrentCity: [],
  currentOffer: null,
  nearbyOffers: [],
  isDataLoading: false,
  hasError: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.currentCity = action.payload;
    },
    setOffersInCurrentCity: (state, action) => {
      state.offersInCurrentCity = state.offers.filter((offer) => offer.city.name === action.payload);
    },
    sortOffersPopular: (state) => {
      state.offersInCurrentCity = state.offers.filter((offer) => offer.city.name === state.currentCity);
    },
    sortOffersPriceLowToHigh: (state) => {
      state.offersInCurrentCity = state.offersInCurrentCity.sort((a, b) => a.price - b.price);
    },
    sortOffersPriceHighToLow: (state) => {
      state.offersInCurrentCity = state.offersInCurrentCity.sort((a, b) => b.price - a.price);
    },
    sortOffersTopRatedFirst: (state) => {
      state.offersInCurrentCity = state.offersInCurrentCity.sort((a, b) => b.rating - a.rating);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersInCurrentCity = action.payload.filter((offer) => offer.city.name === City.Paris);
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchСurrentOffer.pending, (state) => {
        state.isDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchСurrentOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchСurrentOffer.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.isDataLoading = false;
      });
  }
});

export const {
  changeCity,
  setOffersInCurrentCity,
  sortOffersPopular,
  sortOffersPriceLowToHigh,
  sortOffersPriceHighToLow,
  sortOffersTopRatedFirst
} = offersProcess.actions;

import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setOffersInCurrentCity,
  sortOffersPopular,
  sortOffersPriceLowToHigh,
  sortOffersPriceHighToLow,
  sortOffersTopRatedFirst,
  loadOffers,
  loadCurrentOffer,
  loadComments,
  loadNearbyOffers,
  setIsDataLoading,
  requireAuthorization,
  setUserData,
} from './action';
import { City, AuthorizationStatus } from '../const';
import { Offers, Offer, Reviews } from '../types';
import { UserData } from '../types/user-data';


type InitialState = {
  city: City;
  isDataLoading: boolean;
  offers: Offers;
  offersInCurrentCity: Offers;
  currentOffer: Offer | null;
  nearbyOffers: Offers;
  comments: Reviews;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

const initialState: InitialState = {
  city: City.Paris,
  isDataLoading: false,
  offers: [],
  offersInCurrentCity: [],
  currentOffer: null,
  nearbyOffers: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersInCurrentCity, (state, action) => {
      state.offersInCurrentCity = state.offers.filter((offer) => offer.city.name === action.payload);
    })
    .addCase(sortOffersPopular, (state) => {
      state.offersInCurrentCity = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(sortOffersPriceLowToHigh, (state) => {
      state.offersInCurrentCity.sort((a, b) => a.price - b.price);
    })
    .addCase(sortOffersPriceHighToLow, (state) => {
      state.offersInCurrentCity.sort((a, b) => b.price - a.price);
    })
    .addCase(sortOffersTopRatedFirst, (state) => {
      state.offersInCurrentCity.sort((a, b) => b.rating - a.rating);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setIsDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

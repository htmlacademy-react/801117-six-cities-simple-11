import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setOffersInCurrentCity,
  sortOffersPopular,
  sortOffersPriceLowToHigh,
  sortOffersPriceHighToLow,
  sortOffersTopRatedFirst,
  loadOffers,
  setIsOffersDataLoading,
  requireAuthorization,
  setUserData,
} from './action';
import { City, AuthorizationStatus } from '../const';
import { Offers } from '../types';
import { UserData } from '../types/user-data';


type InitialState = {
  city: City;
  isOffersDataLoading: boolean;
  offers: Offers;
  offersInCurrentCity: Offers;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

const initialState: InitialState = {
  city: City.Paris,
  isOffersDataLoading: false,
  offers: [],
  offersInCurrentCity: [],
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
    .addCase(setIsOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffersInCurrentCity } from './action';
import { City } from '../const';
import { offers, TOffer } from '../mooks/offers';

type TInitialState = {
  city: City;
  offers: TOffer[];
  offersInCurrentCity: TOffer[] | [];
}

const initialState: TInitialState = {
  city: City.Paris,
  offers,
  offersInCurrentCity: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersInCurrentCity, (state, action) => {
      state.offersInCurrentCity = offers.filter((offer) => offer.city.name === action.payload);
    });
});

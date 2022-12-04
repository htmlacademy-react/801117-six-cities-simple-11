import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';

export const changeCity = createAction<City>('city/changeCity');

export const setOffersInCurrentCity = createAction<City>('city/setOffersInCurrentCity');

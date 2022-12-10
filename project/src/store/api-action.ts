import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { loadOffers, setOffersInCurrentCity, setIsOffersDataLoading } from './action';
import { Offers } from '../types';
import { APIRoute, City } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsOffersDataLoading(true));
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setIsOffersDataLoading(false));
    dispatch(setOffersInCurrentCity(City.Paris));
  },
);

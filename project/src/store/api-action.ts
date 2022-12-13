import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {
  loadOffers,
  loadCurrentOffer,
  loadNearbyOffers,
  loadComments,
  setOffersInCurrentCity,
  setIsDataLoading,
  requireAuthorization,
  setUserData,
  redirectToRoute,
} from './action';
import { saveToken, dropToken } from '../services/token';
import { Offers, Offer, Reviews } from '../types';
import { APIRoute, AppRoute, City, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setIsDataLoading(false));
    dispatch(setOffersInCurrentCity(City.Paris));
  },
);

export const fetchСurrentOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchСurrentOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setIsDataLoading(true));
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadCurrentOffer(data));
      dispatch(setIsDataLoading(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchNearbyOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId}${APIRoute.NearbyOffers}`);
    dispatch(loadNearbyOffers(data));
    dispatch(setIsDataLoading(false));
  },
);

export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadComments(data));
    dispatch(setIsDataLoading(false));
  },
);

type ReviewData = {
  offerId: string;
  rating: number;
  comment: string;
}

export const sendComment = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({ offerId, rating, comment }, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    const { data } = await api.post<Reviews>(`${APIRoute.Comments}/${offerId}`, { rating, comment});
    dispatch(loadComments(data));
    dispatch(setIsDataLoading(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password}, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  },
);

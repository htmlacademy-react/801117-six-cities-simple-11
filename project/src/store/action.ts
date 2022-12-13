import { createAction } from '@reduxjs/toolkit';
import { City, AuthorizationStatus, AppRoute } from '../const';
import { Offers, Offer, Reviews } from '../types';
import { UserData } from '../types/user-data';

export const changeCity = createAction<City>('city/changeCity');
export const setOffersInCurrentCity = createAction<City>('city/setOffersInCurrentCity');

export const sortOffersPopular = createAction('sorting/sortOffersPopular');
export const sortOffersPriceLowToHigh = createAction('sorting/sortOffersPriceLowToHigh');
export const sortOffersPriceHighToLow = createAction('sorting/sortOffersPriceHighToLow');
export const sortOffersTopRatedFirst = createAction('sorting/sortOffersTopRatedFirst');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadCurrentOffer = createAction<Offer>('data/loadCurrentOffer');
export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');
export const loadComments = createAction<Reviews>('data/loadComments');
export const setIsDataLoading = createAction<boolean>('data/setIsDataLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
export const setUserData = createAction<UserData | null>('user/setUserData');

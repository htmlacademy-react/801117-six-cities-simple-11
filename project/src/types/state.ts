import { store } from '../store';
import { Offers, Offer, Reviews } from '../types';
import { City, AuthorizationStatus } from '../const';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type OffersProcess= {
  currentCity: City;
  offers: Offers;
  offersInCurrentCity: Offers;
  currentOffer: Offer | null;
  nearbyOffers: Offers;
  isDataLoading: boolean;
  hasError: boolean;
};

export type ReviewProcces = {
  comments: Reviews;
  isDataLoading: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

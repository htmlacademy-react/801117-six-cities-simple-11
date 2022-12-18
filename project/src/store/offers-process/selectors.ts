import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { City } from '../../const';
import { Offers, Offer } from '../../types';

export const getCurrentCity = (state: State): City => state[NameSpace.Offers].currentCity;
export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersInCurrentCity = (state: State): Offers => state[NameSpace.Offers].offersInCurrentCity;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;

import { OfferCity, ratingStar } from './types';

export const MAX_LENGTH_COMMENT = 300;
export const MIN_LENGTH_COMMENT = 50;
export const MAX_COUNT_RENDER_REVIEW = 10;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '*',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  NearbyOffers = '/nearby',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CITIES: OfferCity[] = [
  {
    name: City.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: City.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: City.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
  {
    name: City.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: City.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: City.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  }
];

export const ratingStars: ratingStar[] = [
  {
    stars: 5,
    title: 'perfect',
  },
  {
    stars: 4,
    title: 'good',
  },
  {
    stars: 3,
    title: 'not bad',
  },
  {
    stars: 2,
    title: 'badly',
  },
  {
    stars: 1,
    title: 'terribly',
  },
];

export enum WidthForRating {
  oneStar = 20,
  twoStar = 40,
  threeStar = 60,
  fourStar = 80,
  fiveStar = 100,
}


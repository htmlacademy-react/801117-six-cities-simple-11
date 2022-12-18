import { StatusCodes } from 'http-status-codes';
import { OfferCity, ratingStar } from './types';

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '/*',
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

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Review = 'REVIEW',
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

export const SORTING_TYPES: Record<string, string> = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

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

export enum CommentParam {
  MinLength = 50,
  MaxLength = 300,
}

export enum OfferParam {
  MaxCountPhotos = 6,
  MaxCountRenderReview = 10,
}

export const TILE_LAYER_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

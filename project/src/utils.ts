import { AxiosResponse } from 'axios';
import { WidthForRating, SORTING_TYPES, StatusCodeMapping } from './const';
import {
  sortOffersPopular,
  sortOffersPriceLowToHigh,
  sortOffersPriceHighToLow,
  sortOffersTopRatedFirst
} from './store/offers-process/offers-process';


export const getRaitingOfferInStars = (rating: number): number => {
  if (rating > 5) {
    return WidthForRating.fiveStar;
  }

  switch (Math.round(rating)) {
    case 1:
      return WidthForRating.oneStar;
    case 2:
      return WidthForRating.twoStar;
    case 3:
      return WidthForRating.threeStar;
    case 4:
      return WidthForRating.fourStar;
    case 5:
      return WidthForRating.fiveStar;

    default:
      return WidthForRating.oneStar;
  }
};

export const getActionForSort = (sortingType: string) => {
  switch(sortingType) {
    case SORTING_TYPES.PRICE_LOW_TO_HIGH:
      return sortOffersPriceLowToHigh;
    case SORTING_TYPES.PRICE_HIGH_TO_LOW:
      return sortOffersPriceHighToLow;
    case SORTING_TYPES.TOP_RATED_FIRST:
      return sortOffersTopRatedFirst;
    default:
      return sortOffersPopular;
  }
};

export const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const getWordWithCaptialLetter = (word: string): string =>
  word[0].toUpperCase() + word.slice(1);

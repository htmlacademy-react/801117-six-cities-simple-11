import { WidthForRating } from './const';

export const getRaitingOfferInStars = (rating: number): number => {
  if (rating > 5) {
    return WidthForRating.fiveStar;
  }

  switch(Math.round(rating)) {
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

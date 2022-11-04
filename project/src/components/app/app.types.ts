export enum WidthForRating {
  oneStar = 20,
  twoStar = 40,
  threeStar = 60,
  fourStar = 80,
  fiveStar = 100,
}

export enum PlaceCardType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private room',
}

export interface PlaceCard {
  id: string;
  img: string;
  isPremium: boolean;
  price: number;
  name: string;
  type: PlaceCardType;
  rating: WidthForRating;
}

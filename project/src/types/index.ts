export type OfferHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferCity = {
  location: Location;
  name: string;
}

export type Offer = {
  id: number;
  title: string;
  images: string[];
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  type: string;
}

export type Offers = Offer[];

type ReviewUser = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: number;
  user: ReviewUser;
  comment: string;
  date: string;
  rating: number;

};

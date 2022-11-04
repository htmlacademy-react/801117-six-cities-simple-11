import { WidthForRating, PlaceCardType, PlaceCard } from './app.types';

export const placeCards: PlaceCard[] = [
  {
    id: '1',
    img: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: PlaceCardType.Apartment,
    rating: WidthForRating.fiveStar,
  },
  {
    id: '2',
    img: 'img/room.jpg',
    isPremium: false,
    price: 80,
    name: 'Wood and stone place',
    type: PlaceCardType.PrivateRoom,
    rating: WidthForRating.fourStar,
  },
  {
    id: '3',
    img: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    name: 'Canal View Prinsengracht',
    type: PlaceCardType.Apartment,
    rating: WidthForRating.threeStar,
  },
  {
    id: '4',
    img: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: PlaceCardType.Apartment,
    rating: WidthForRating.fiveStar,
  },
  {
    id: '5',
    img: 'img/studio-01.jpg',
    isPremium: true,
    price: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: PlaceCardType.PrivateRoom,
    rating: WidthForRating.oneStar,
  },
];

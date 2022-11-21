type TOfferHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type TOfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TOfferCity = {
  location: TOfferLocation;
  name: string;
}

export type TOffer = {
  id: number;
  title: string;
  images: string[];
  bedrooms: number;
  city: TOfferCity;
  description: string;
  goods: string[];
  host: TOfferHost;
  isPremium: boolean;
  location: TOfferLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  type: string;
}

export const offers: TOffer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max'
    },
    id: 1,
    images: [
      'img/room.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/room-small.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Kitchen',
      'Fridge',
      'Wi-Fi',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    id: 2,
    images: [
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-03.jpg',
    price: 80,
    rating: 3.8,
    title: 'Wood and stone place',
    type: 'Private room',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Washing machine',
      'Coffee machine',
      'Dishwasher'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    id: 3,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
    ],
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: 'img/room-small.jpg',
    price: 132,
    rating: 2.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Kitchen',
      'Fridge',
      'Wi-Fi',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Kitchen',
      'Baby seat',
      'Cabel TV',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max'
    },
    id: 4,
    images: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 7,
    previewImage: 'img/apartment-small-03.jpg',
    price: 180,
    rating: 1.2,
    title: 'Wood and stone place',
    type: 'Private room',
  },
];

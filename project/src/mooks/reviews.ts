type TReviewUser = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TReview = {
  id: number;
  user: TReviewUser;
  comment: string;
  date: string;
  rating: number;

};

export const reviews: TReview[] = [
  {
    id: 1,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Angelina'
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Nov 19 2022 13:51:37 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 4,
  },
  {
    id: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Oliver.conner'
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Nov 29 2022 12:52:37 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 2,
  },
  {
    id: 3,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Oct 19 2022 15:31:37 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 3,
  },
  {
    id: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max'
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Sep 9 2022 13:51:37 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 1,
  }
];

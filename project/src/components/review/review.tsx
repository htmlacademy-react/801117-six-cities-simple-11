import { FC } from 'react';
import { Review as ReviewType } from '../../types';
import { getRaitingOfferInStars } from '../../utils';

type ReviewProps = {
  review: ReviewType;
}

const Review: FC<ReviewProps> = ({ review }) => {
  const {
    user,
    comment,
    date,
    rating,
  } = review;

  const currentDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRaitingOfferInStars(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={currentDate.toLocaleDateString('fr-CA')}>
          {currentDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
        </time>
      </div>
    </li>
  );
};

export default Review;

import { FC } from 'react';
import cn from 'classnames';
import { Offer } from '../../types';
import { getRaitingOfferInStars } from '../../utils';
import ReviewList from '../review-list/review-list';

type RoomInfoProps = {
  offer: Offer;
}

const RoomInfo:FC<RoomInfoProps> = ({ offer }) => {
  const {
    bedrooms,
    isPremium,
    title,
    rating,
    type,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {isPremium && (
          <div className="property__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {title}
          </h1>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: `${getRaitingOfferInStars(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {type}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
          </li>
          <li className="property__feature property__feature--adults">
            Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">&euro;{price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {goods.map((item) => (
              <li className="property__inside-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className={cn(
              'property__avatar-wrapper',
              {'property__avatar-wrapper--pro': host.isPro},
              'user__avatar-wrapper',
            )}
            >
              <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
            </div>
            <span className="property__user-name">
              {host.name}
            </span>
            {host.isPro && (
              <span className="property__user-status">
              Pro
              </span>
            )}
          </div>
          <div className="property__description">
            <p className="property__text">
              {description}
            </p>
          </div>
        </div>
        <ReviewList />
      </div>
    </div>
  );};

export default RoomInfo;

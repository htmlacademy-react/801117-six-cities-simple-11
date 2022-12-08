import { FC } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { Offer, Offers } from '../../types';
import { reviews } from '../../mooks/reviews';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';
import { getRaitingOfferInStars } from '../../utils';
import { city } from '../../mooks/city';

type RoomPageProps = {
  offers: Offers;
}

const RoomPage:FC<RoomPageProps> = ({ offers }) => {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === Number(id)) as Offer;

  const points = offers.map((item) => {
    const { location } = item;
    return {
      id: item.id,
      ...location,
    };
  });

  const {
    images,
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
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="property__image-wrapper" key={`image-${i}`}>
                <img className="property__image" src={image} alt="studio" />
              </div>))}
          </div>
        </div>
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
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li className="property__inside-item" key={`goods-${i}`}>
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
            <ReviewList reviews={reviews} />
          </div>
        </div>
        <section className="property__map map">
          <Map
            city={city}
            points={points}
            selectedPointsId={Number(id)}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offers.filter((item) => item.id !== Number(id)).map((item) => <OfferCard key={item.id} offer={item} />)}
          </div>
        </section>
      </div>
    </main>

  );};

export default RoomPage;

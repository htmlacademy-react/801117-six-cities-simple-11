import { FC, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import { getRaitingOfferInStars, getWordWithCaptialLetter } from '../../utils';

type OfferCardProps = {
  offer: Offer;
  onMouseOver?: (offer: Offer) => void;
}

const OfferCard:FC<OfferCardProps> = ({ offer, onMouseOver }) => {
  const {
    id,
    images,
    isPremium,
    price,
    title,
    type,
    rating,
  } = offer;

  const handleOfferCardMouseOver = () => {
    if (onMouseOver) {
      onMouseOver(offer);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [offer]);

  return (
    <article className="cities__card place-card" onMouseOver={handleOfferCardMouseOver}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRaitingOfferInStars(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getWordWithCaptialLetter(type)}</p>
      </div>
    </article>
  );
};

export default memo(OfferCard);

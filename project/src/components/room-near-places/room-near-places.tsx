import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import OfferCard from '../offer-card/offer-card';

const RoomNearPlaces:FC = () => {
  const offers = useAppSelector((state) => state.nearbyOffers);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((item) => (
            <OfferCard
              key={item.id}
              offer={item}
            />))}
        </div>
      </section>
    </div>
  );};

export default RoomNearPlaces;

import { FC } from 'react';
import { Offers } from '../../types';
import OfferCard from '../offer-card/offer-card';

type RoomNearPlacesProps = {
  nearbyOffers: Offers;
}

const RoomNearPlaces:FC<RoomNearPlacesProps> = ({ nearbyOffers }) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((item) => (
          <OfferCard
            key={item.id}
            offer={item}
          />))}
      </div>
    </section>
  </div>
);

export default RoomNearPlaces;

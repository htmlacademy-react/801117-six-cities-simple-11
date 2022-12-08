import { FC, useState } from 'react';
import Sorting from '../sorting/sorting';
import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
import Map from '../map/map';
import { Offers, Offer } from '../../types';
import { city } from '../../mooks/city';

type OfferCardListProps = {
  offers: Offers;
};

const OfferCardList:FC<OfferCardListProps> = () => {
  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);

  const currentCity = useAppSelector((state) => state.city);
  const offersInCurrentCity = useAppSelector((state) => state.offersInCurrentCity);

  const handleOfferCardMauseOver = (offer: Offer) => {
    setActiveOfferCardId(offer.id);
  };

  const points = offersInCurrentCity.map((offer: Offer) => {
    const { location, id } = offer;
    return {
      id,
      ...location,
    };
  });

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersInCurrentCity.length} places to stay in {currentCity}</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {offersInCurrentCity.map((item: Offer) => <OfferCard key={item.id} offer={item} onMouseOver={handleOfferCardMauseOver} />)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              city={city}
              points={points}
              selectedPointsId={activeOfferCardId}
            />
          </section>

        </div>
      </div>
    </div>
  );
};

export default OfferCardList;

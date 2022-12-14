import { FC, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Offers, Offer, Location } from '../../types';
import { CITIES } from '../../const';
import Loader from '../loader/loader';
import Sorting from '../sorting/sorting';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';

type OfferCardListProps = {
  offers: Offers;
};

const OfferCardList:FC<OfferCardListProps> = () => {
  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);

  const currentCity = useAppSelector((state) => state.city);
  const isOffersDataLoading = useAppSelector((state) => state.isDataLoading);
  const offersInCurrentCity = useAppSelector((state) => state.offersInCurrentCity);

  const handleOfferCardMauseOver = (offer: Offer) => {
    setActiveOfferCardId(offer.id);
  };

  const currentCityLocation: Location = CITIES.find((city) => city.name === currentCity)?.location as Location;

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
          <b className="places__found">
            {offersInCurrentCity.length} {offersInCurrentCity.length === 1 ? 'place' : 'places'} to stay in {currentCity}
          </b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {isOffersDataLoading && <Loader />}
            {offersInCurrentCity.map((item: Offer) => (
              <OfferCard
                key={item.id}
                offer={item}
                onMouseOver={handleOfferCardMauseOver}
              />))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            cityLocation={currentCityLocation}
            points={points}
            selectedPointsId={activeOfferCardId}
            mapClassName='cities__map'
          />
        </div>
      </div>
    </div>
  );
};

export default OfferCardList;

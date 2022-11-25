import { FC, useState, } from 'react';
import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import { TOffer } from '../../mooks/offers';
import { city } from '../../mooks/city';

type OfferCardListProps = {
  offers: TOffer[];
};

const OfferCardList:FC<OfferCardListProps> = ({ offers }) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [activeOfferCardId, setActiveOfferCardId] = useState<number | null>(null);

  const handleSortClick = () => {
    setIsOpenSort((prevState) => !prevState);
  };

  const handleOfferCardMauseOver = (offer: TOffer) => {
    setActiveOfferCardId(offer.id);
  };

  const points = offers.map((offer) => {
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
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by </span>
            <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className={cn('places__options', 'places__options--custom', {'places__options--opened': isOpenSort})}>
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((item) => <OfferCard key={item.id} offer={item} onMouseOver={handleOfferCardMauseOver} />)}
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

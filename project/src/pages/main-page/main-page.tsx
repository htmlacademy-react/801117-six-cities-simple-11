import { FC } from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import CityList from '../../components/city-list/city-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import OfferCardListEmpty from '../../components/offer-card-list-empty/offer-card-list-empty';
import { getOffersInCurrentCity } from '../../store/offers-process/selectors';

const MainPage:FC = () => {
  const offers = useAppSelector(getOffersInCurrentCity);

  return (
    <main className={cn(
      'page__main',
      'page__main--index',
      {'page__main--index-empty': offers.length === 0}
    )}
    >
      <CityList />
      {offers.length ? <OfferCardList offers={offers} /> : <OfferCardListEmpty />}
    </main>
  );};

export default MainPage;

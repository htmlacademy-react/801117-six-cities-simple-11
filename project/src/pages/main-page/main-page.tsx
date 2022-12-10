import { FC } from 'react';
import CityList from '../../components/city-list/city-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { useAppSelector } from '../../hooks';


const MainPage:FC = () => {
  const offers = useAppSelector((state) => state.offersInCurrentCity);

  return (
    <main className="page__main page__main--index">
      <CityList />
      <OfferCardList offers={offers} />
    </main>
  );};

export default MainPage;

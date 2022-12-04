import { FC } from 'react';
import CityList from '../../components/city-list/city-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { TOffer } from '../../mooks/offers';

type MainPageProps = {
  offers: TOffer[];
};

const MainPage:FC<MainPageProps> = ({ offers }) => (
  <main className="page__main page__main--index">
    <CityList />
    <OfferCardList offers={offers} />
  </main>
);

export default MainPage;

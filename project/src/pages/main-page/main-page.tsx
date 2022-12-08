import { FC, useEffect } from 'react';
import CityList from '../../components/city-list/city-list';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { setOffersInCurrentCity } from '../../store/action';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';


const MainPage:FC = () => {
  const offers = useAppSelector((state) => state.offersInCurrentCity);
  const currentCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  // eslint-disable-next-line no-console
  console.log('hi');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('hello');
    dispatch(setOffersInCurrentCity(currentCity));
  }, []);

  return (
    <main className="page__main page__main--index">
      <CityList />
      <OfferCardList offers={offers} />
    </main>
  );};

export default MainPage;

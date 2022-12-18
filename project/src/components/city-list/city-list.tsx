import { FC, SyntheticEvent } from 'react';
import cn from 'classnames';
import { changeCity, setOffersInCurrentCity } from '../../store/offers-process/offers-process';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCurrentCity } from '../../store/offers-process/selectors';
import { City } from '../../const';

const CityList:FC = () => {
  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();

  const cities = Object.values(City);

  const handleCityLinkClick = (city: City) => (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(changeCity(city));
    dispatch(setOffersInCurrentCity(city));
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li key={city} className="locations__item">
                <a className={cn(
                  'locations__item-link',
                  'tabs__item',
                  {'tabs__item--active': city === currentCity}
                )}
                href='/'
                onClick={handleCityLinkClick(city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>

  );};

export default CityList;

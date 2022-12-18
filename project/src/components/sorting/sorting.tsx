import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/offers-process/selectors';
import { getActionForSort } from '../../utils';
import { SORTING_TYPES } from '../../const';

const Sorting:FC = () => {
  const [currentSortingType, setCurrentSortingType] = useState<string>(SORTING_TYPES.POPULAR);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();

  const handleSortingClick = () => {
    setIsOpenSort((prevState) => !prevState);
  };

  const handleSortOptionClick = (option: string) => () => {
    setCurrentSortingType(option);
    setIsOpenSort(false);
    dispatch(getActionForSort(option)());
  };

  useEffect (() => {
    setCurrentSortingType(SORTING_TYPES.POPULAR);
  }, [currentCity]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingClick}
      >
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {'places__options--opened': isOpenSort})}>
        {Object.keys(SORTING_TYPES).map((item) => (
          <li
            key={item}
            className={cn('places__option', {'places__option--active': currentSortingType === SORTING_TYPES[item]})}
            tabIndex={0}
            onClick={handleSortOptionClick(SORTING_TYPES[item])}
          >
            {SORTING_TYPES[item]}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Sorting;

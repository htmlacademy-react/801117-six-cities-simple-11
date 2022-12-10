import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import {
  sortOffersPopular,
  sortOffersPriceLowToHigh,
  sortOffersPriceHighToLow,
  sortOffersTopRatedFirst
} from '../../store/action';
import cn from 'classnames';

const SORTING_TYPES: Record<string, string> = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

const getActionForSort = (sortingType: string) => {
  switch(sortingType) {
    case SORTING_TYPES.PRICE_LOW_TO_HIGH:
      return sortOffersPriceLowToHigh;
    case SORTING_TYPES.PRICE_HIGH_TO_LOW:
      return sortOffersPriceHighToLow;
    case SORTING_TYPES.TOP_RATED_FIRST:
      return sortOffersTopRatedFirst;
    default:
      return sortOffersPopular;
  }
};

const Sorting:FC = () => {
  const [currentSortingType, setCurrentSortingType] = useState<string>(SORTING_TYPES.POPULAR);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const dispatch = useAppDispatch();

  const handleSortingClick = () => {
    setIsOpenSort((prevState) => !prevState);
  };

  const handleSortOptionClick = (option: string) => () => {
    setCurrentSortingType(option);
    setIsOpenSort(false);
    dispatch(getActionForSort(option)());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingClick}>
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

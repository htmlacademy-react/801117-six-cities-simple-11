import { Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../const';
import Header from '../header/header';

const Loyout = () => {
  const { pathname } = useLocation();

  return (
    <div className={cn(
      'page',
      {'page-gray': pathname === AppRoute.Main || pathname === AppRoute.Login},
      {'page-main': pathname === AppRoute.Main},
      {'page--login': pathname === AppRoute.Login}
    )}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Loyout;

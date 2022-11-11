import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import { getClassNamePage } from './layout.utils';

const Loyout = () => {
  const { pathname } = useLocation();

  return (
    <div className={getClassNamePage(pathname)}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Loyout;

import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import './header.css';

const Header:FC = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSignOutButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logoutAction());
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={cn(
              'header__logo-link',
              {'header__logo-link--active': pathname === AppRoute.Main},
            )} to={AppRoute.Main}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {pathname !== AppRoute.Login && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {user && <span className="header__user-name user__name">{user.email}</span>}
                  </div>
                </li>
                <li className="header__nav-item">
                  <button
                    className="button_nav-link header__nav-link header__nav-link--profile"
                    onClick={handleSignOutButtonClick}
                  >
                    <span className="header__signout">
                      {authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

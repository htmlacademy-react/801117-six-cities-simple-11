import { AppRoute } from '../../const';

export const getClassNamePage = (pathname: string): string => {
  switch(pathname) {
    case AppRoute.Main:
      return 'page page--gray page--main';
    case AppRoute.Login:
      return 'page page--gray page--login';
    default:
      return 'page';
  }
};

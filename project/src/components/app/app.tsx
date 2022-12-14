import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import browserHistory from '../../browser-history';
import Loyout from '../layout/layout';
import HistoryRouter from '../history-route/history-route';


const App: FC = () => (
  <HistoryRouter history={browserHistory}>
    <Routes>
      <Route path={AppRoute.Main} element={<Loyout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Room} element={<RoomPage />} />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </HistoryRouter>
);

export default App;

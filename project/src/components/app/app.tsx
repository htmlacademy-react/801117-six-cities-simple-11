import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Loyout from '../layout/layout';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Loyout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Room} element={<RoomPage />} />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>

);

export default App;

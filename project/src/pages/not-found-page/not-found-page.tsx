import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import './not-found-page.css';

const NotFoundPage: FC = () => (
  <div className='page page-gray'>
    <Header />
    <main className="page__main page__not-found">
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </main>
  </div>
);

export default NotFoundPage;

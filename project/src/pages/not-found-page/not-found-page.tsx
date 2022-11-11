import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const NotFoundPage = () => (
  <div className='page'>
    <main className="page__main">
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </main>
  </div>
);

export default NotFoundPage;

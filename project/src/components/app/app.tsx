import MainPage from '../../pages/main-page/main-page';
import { placeCards } from './app.utils';

function App(): JSX.Element {
  return <MainPage placeCards={placeCards} />;
}

export default App;

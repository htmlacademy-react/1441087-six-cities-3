import { TOTAL_OFFERS_COUNT } from '../../const';
import MainPage from '../../pages/main-page/main-page';

export default function App(): JSX.Element {
  return <MainPage offersCount={TOTAL_OFFERS_COUNT} />;
}

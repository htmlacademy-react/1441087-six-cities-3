import { OFFERS_COUNT } from '../../const';
import MainPage from '../../pages/main-page/main-page';

export default function App(): JSX.Element {
  return (
    <MainPage placesCount={OFFERS_COUNT}/>
  );
}

import { PLACES_COUNT } from '../../mock/places-mock';
import MainPage from '../../pages/main-page/main-page';

export default function App(): JSX.Element {
  return (
    <MainPage placesCount={PLACES_COUNT}/>
  );
}

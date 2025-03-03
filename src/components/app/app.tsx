import { PLACES_COUNT } from '../../mock/places-mock';
import MainScreen from '../../screens/main-screen/main-screen';

function App(): JSX.Element {
  return (
    <MainScreen placesCount={PLACES_COUNT}/>
  );
}

export default App;

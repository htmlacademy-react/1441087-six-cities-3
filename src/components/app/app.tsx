// import { TOTAL_OFFERS_COUNT } from '../../const';
// import MainPage from '../../pages/main-page/main-page';

import { offerMock } from '../../mock/offer-mock';
import OfferPage from '../../pages/offer-page/offer-page';

export default function App(): JSX.Element {
  // return <MainPage offersCount={TOTAL_OFFERS_COUNT} />;
  return <OfferPage offer={offerMock}/>;
}

import { Helmet } from 'react-helmet-async';
import { getMockOfferPreviews } from '../../mock/offers-previews-mock';
import { CURRENT_OFFERS_COUNT } from '../../const';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import Sort from '../../components/sort/sort';
import MainMap from '../../components/main-map/main-map';
import PlaceCardMedium from '../../components/place-card-medium/place-card-medium';

type MainPageProps = {
  offersCount: number;
};

const offerPreviews = getMockOfferPreviews(CURRENT_OFFERS_COUNT);

export default function MainPage({ offersCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <Navigation />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                {offerPreviews.map((offerPreview) => (
                  <PlaceCardMedium
                    key={offerPreview.id}
                    offerPreview={offerPreview}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <MainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

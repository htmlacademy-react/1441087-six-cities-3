import { getMockOfferPreviews } from '../../mock/offers-mock';
import { CURRENT_OFFERS_COUNT } from '../../const';
import Header from '../../components/header/header';
import TabsCities from '../../components/tabs-cities/tabs-cities';
import Sorting from '../../components/sorting/sorting';
import PlaceCard from '../../components/place-card/place-card';

type MainPageProps = {
  offersCount: number;
};

const offerPreviews = getMockOfferPreviews(CURRENT_OFFERS_COUNT);

export default function MainPage({ offersCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <TabsCities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                {offerPreviews.map((offerPreview) => (
                  <PlaceCard
                    key={offerPreview.id}
                    title={offerPreview.title}
                    type={offerPreview.type}
                    price={offerPreview.price}
                    isPremium={offerPreview.isPremium}
                    previewImage={offerPreview.previewImage}
                    rating={offerPreview.rating}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

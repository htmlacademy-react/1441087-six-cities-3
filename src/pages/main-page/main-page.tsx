import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer-types';
import { pluralize } from '../../utils/common-utils';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { RequestStatus } from '../../const/api-const';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Sort from '../../components/sort';
import Map from '../../components/map';
import OfferPreviewList from '../../components/offer-preview-list';
import useAppSelector from '../../hooks/use-app-selector';
import LoadingPage from '../loading-page';
import useMainOfferPreviews from '../../hooks/use-main-offer-previews';

function MainPage(): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<OfferPreview | null>(null);
  const [offerPreviews, countOfferPreviews] = useMainOfferPreviews();
  const currentCity = useAppSelector(offersSelectors.selectCity);
  const offerPreviewsStatus = useAppSelector(offersSelectors.selectOfferPreviewsStatus);

  if (offerPreviewsStatus === RequestStatus.Loading) {
    return <LoadingPage />;
  }

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
                {`${countOfferPreviews} ${pluralize(
                  'place',
                  countOfferPreviews
                )} to stay in ${currentCity.name}`}
              </b>
              <Sort />
              <OfferPreviewList
                listType={'Cities'}
                offerPreviews={offerPreviews}
                onOfferCardHover={setHoveredOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map
                pageType={'Main'}
                city={currentCity}
                offerPreviews={offerPreviews}
                hoveredOffer={hoveredOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

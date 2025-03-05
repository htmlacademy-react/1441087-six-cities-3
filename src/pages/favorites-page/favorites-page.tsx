import { getMockOfferPreviews } from '../../mock/offers-previews-mock';
import Header from '../../components/header/header';
import FavoriteList from '../../components/favorite-list/favorite-list';
import Footer from '../../components/footer/footer';

const favoriteOfferPreviews = getMockOfferPreviews().filter(
  (offerPreview) => offerPreview.isFavorite
);

export default function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offerPreviews={favoriteOfferPreviews} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

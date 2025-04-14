import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';

function LoadingPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">
            <p>Loading ...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoadingPage;

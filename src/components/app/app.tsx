import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, TOTAL_OFFERS_COUNT } from '../../const';
import { offerMock } from '../../mock/offer-mock';
import { getMockAuthStatus } from '../../mock/auth-status';
import { isUserLoggedIn } from '../../utils';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

const isLoggedIn = isUserLoggedIn(getMockAuthStatus());

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offersCount={TOTAL_OFFERS_COUNT} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              isLoggedIn ? <Navigate to={AppRoute.Root} /> : <LoginPage />
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offer={offerMock} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={isLoggedIn ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

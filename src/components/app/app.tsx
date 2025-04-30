import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const/app-const';
import { getToken } from '../../services/token';
import {
  userActions,
  userSelectors,
} from '../../store/slices/user-slice/user-slice';
import { offersActions } from '../../store/slices/offers-slice/offers-slice';
import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import useAppSelector from '../../hooks/use-app-selector';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';
import useAppDispatch from '../../hooks/use-app-dispatch';

function App(): JSX.Element {
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);
  const dispatch = useAppDispatch();

  const token = getToken();
  useEffect(() => {
    if (token) {
      dispatch(userActions.checkAuth())
        .then(() => {
          dispatch(offersActions.getFavoriteOffers());
        });
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(offersActions.getOffersPreviews());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route
            path={AppRoute.Login}
            element={
              isLoggedIn ? <Navigate to={AppRoute.Root} /> : <LoginPage />
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

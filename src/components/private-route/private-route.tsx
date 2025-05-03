import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import useAppSelector from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

import { Navigate } from 'react-router-dom';
import { selectIsUserLoggedIn } from '../../store/selectors';
import { AppRoute } from '../../const/app-const';
import useAppSelector from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(selectIsUserLoggedIn);

  return authorizationStatus ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

import { AppRoute, AuthorizationStatus, AuthorizationStatusType } from '../const';
import { Values } from '../types/common';

function isUserLoggedIn(
  currentAuthStatus: AuthorizationStatusType
): boolean {
  return currentAuthStatus === AuthorizationStatus.Auth;
}

function isRequiredPage(
  pathname: string,
  appRoute: Values<typeof AppRoute>
): boolean {
  return pathname === appRoute;
}

export { isUserLoggedIn, isRequiredPage };

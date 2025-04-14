import { AppRoute, AuthorizationStatus, AuthorizationStatusType } from '../const';
import { Keys } from '../types/common';

function isUserLoggedIn(
  currentAuthStatus: AuthorizationStatusType
): boolean {
  console.log(`currentStatus: ${currentAuthStatus}`);
  console.log(`Auth: ${AuthorizationStatus.Auth}`);


  return currentAuthStatus === AuthorizationStatus.Auth;
}

// function isUserLoggedIn(
//   currentAuthStatus: AuthorizationStatusType
// ): boolean {
//   return true;
// }

function isRequiredPage(
  pathname: string,
  appRoute: Keys<typeof AppRoute>
): boolean {
  return pathname === appRoute;
}

export { isUserLoggedIn, isRequiredPage };

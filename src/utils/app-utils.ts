import { AppRoute } from '../const/app-const';
import { Values } from '../types/common-types';

export function isRequiredPage(
  pathname: string,
  appRoute: Values<typeof AppRoute>
): boolean {
  return pathname === appRoute;
}

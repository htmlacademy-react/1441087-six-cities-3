import { OfferPreview } from './types';
import { AuthorizationStatus } from './const';
import { AppRoute } from './const';

function getCapitalizedString(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function getRatingWidth(value: number): string {
  const widthPercent = (Number.parseInt(value.toFixed(), 10) * 100) / 5;
  return `${widthPercent}%`;
}

function getCitiesWithFavorites(
  cities: string[],
  offerPreviews: OfferPreview[]
): string[] {
  return cities.filter((city) =>
    offerPreviews.some((offerPreview) => offerPreview.city.name === city)
  );
}

function getCityFavorites(
  city: string,
  offerPreviews: OfferPreview[]
): OfferPreview[] {
  return offerPreviews.filter(
    (offerPreview) => offerPreview.city.name === city
  );
}

function isUserLoggedIn(currentAuthStatus: AuthorizationStatus): boolean {
  return currentAuthStatus === AuthorizationStatus.Auth;
}

function isRequiredPage(pathname: string, appRoute: AppRoute): boolean {
  return (pathname as AppRoute) === appRoute;
}

export {
  getCapitalizedString,
  getRatingWidth,
  getCitiesWithFavorites,
  getCityFavorites,
  isUserLoggedIn,
  isRequiredPage,
};

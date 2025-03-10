const TOTAL_OFFERS_COUNT = 258;
const CURRENT_OFFERS_COUNT = 5;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {
  TOTAL_OFFERS_COUNT,
  CURRENT_OFFERS_COUNT,
  CITIES,
  SORT_TYPES,
  AppRoute,
  AuthorizationStatus,
};

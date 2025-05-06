export type OfferCardType = 'Cities' | 'Near' | 'Favorite';

export function getOfferCardMediumClasses(cardType: OfferCardType) {
  switch (cardType) {
    case 'Near':
      return {
        articleClass: 'near-places__card place-card',
        imgWrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
      };
    default:
      return {
        articleClass: 'cities__card place-card',
        imgWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
      };
  }
}

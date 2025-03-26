import { OfferPreview } from '../../types/offer';
import { NEAR_OFFERS_COUNT } from '../../const';
import { getMockOfferPreviews } from '../../mock/offer-previews-mock';

const mockOfferPreviews = getMockOfferPreviews();

function getOfferPreviewById(
  offerPreviews: OfferPreview[],
  offerId: string
): OfferPreview {
  return offerPreviews.filter((offerPreview) => offerPreview.id === offerId)[0];
}

function getMockNearOfferPreviews(
  currentOfferPreview: OfferPreview
): OfferPreview[] {
  return mockOfferPreviews
    .filter(
      (offerPreview) =>
        offerPreview.city.name === currentOfferPreview.city.name &&
        offerPreview.id !== currentOfferPreview.id
    )
    .slice(0, NEAR_OFFERS_COUNT);
}

export { getOfferPreviewById, getMockNearOfferPreviews };

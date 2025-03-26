import { OfferPreview } from '../../types/offer';

function getOfferPreviewById(
  offerPreviews: OfferPreview[],
  offerId: string
): OfferPreview {
  return offerPreviews.filter((offerPreview) => offerPreview.id === offerId)[0];
}

export { getOfferPreviewById };

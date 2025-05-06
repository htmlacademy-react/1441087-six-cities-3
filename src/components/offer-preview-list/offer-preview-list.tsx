import { memo } from 'react';
import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import { getOfferPreviewListClasses, OfferPreviewListType } from './offer-preview-list-utils';
import { OfferCardType } from '../offer-card-medium/offer-card-medium-utils';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferPreviewListComponentProps = {
  listType: OfferPreviewListType;
  cardType: OfferCardType;
  offerPreviews: OfferPreviews;
  onOfferCardHover?: (hoveredOffer: OfferPreview | null) => void;
};

function OfferPreviewListComponent(props: OfferPreviewListComponentProps): JSX.Element {
  const { listType, cardType, offerPreviews, onOfferCardHover } = props;
  const additionalClasses = getOfferPreviewListClasses(listType);

  return (
    <div className={additionalClasses.divClass}>
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium
          key={offerPreview.id}
          cardType={cardType}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

const OfferPreviewList = memo(OfferPreviewListComponent);

export default OfferPreviewList;

import { memo } from 'react';
import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import { OfferPreviewListType } from './offer-preview-list-type';
import { getOfferPreviewListClasses } from './offer-preview-list-utils';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferPreviewListComponentProps = {
  listType: OfferPreviewListType;
  offerPreviews: OfferPreviews;
  onOfferCardHover?: (hoveredOffer: OfferPreview | null) => void;
};

function OfferPreviewListComponent(props: OfferPreviewListComponentProps): JSX.Element {
  const { listType, offerPreviews, onOfferCardHover } = props;
  const additionalClasses = getOfferPreviewListClasses(listType);

  return (
    <div className={additionalClasses.divClass}>
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium
          key={offerPreview.id}
          cardType={listType}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

const OfferPreviewList = memo(OfferPreviewListComponent);

export default OfferPreviewList;

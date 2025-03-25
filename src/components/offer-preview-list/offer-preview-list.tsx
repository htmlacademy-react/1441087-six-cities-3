import { OfferPreview } from '../../types/offer';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferPreviewListProps = {
  offerPreviews: OfferPreview[];
  onOfferCardHover: (hoveredOffer: OfferPreview | null) => void;
};

function OfferPreviewList(props: OfferPreviewListProps): JSX.Element {
  const { offerPreviews, onOfferCardHover } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium
          key={offerPreview.id}
          cardType={'Cities'}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

export default OfferPreviewList;

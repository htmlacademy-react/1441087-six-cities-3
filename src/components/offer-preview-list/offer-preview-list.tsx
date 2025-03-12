import { OfferPreview } from '../../types/offer';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferPreviewListProps = {
  offerPreviews: OfferPreview[];
};

function OfferPreviewList(props: OfferPreviewListProps): JSX.Element {
  const { offerPreviews } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium key={offerPreview.id} offerPreview={offerPreview} />
      ))}
    </div>
  );
}

export default OfferPreviewList;

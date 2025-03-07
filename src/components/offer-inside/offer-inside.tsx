import OfferInsideItem from './offer-inside-item';

type OfferInsideProps = {
  goods: string[];
};

export default function OfferInside({ goods }: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good) => (
          <OfferInsideItem key={good} title={good} />
        ))}
      </ul>
    </div>
  );
}

import InsideItem from '../inside-item/inside-item';

type OfferInsideProps = {
  goods: string[];
};

export default function OfferInside({ goods }: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((good) => (
          <InsideItem key={good} title={good} />
        ))}
      </ul>
    </div>
  );
}

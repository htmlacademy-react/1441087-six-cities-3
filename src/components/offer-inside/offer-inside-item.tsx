type OfferInsideItemProps = {
  title: string;
};

function OfferInsideItem({ title }: OfferInsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{title}</li>;
}

export default OfferInsideItem;

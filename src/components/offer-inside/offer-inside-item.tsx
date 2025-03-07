type OfferInsideItemProps = {
  title: string;
};

export default function OfferInsideItem({ title }: OfferInsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{title}</li>;
}

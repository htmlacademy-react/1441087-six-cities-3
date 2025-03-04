type InsideItemProps = {
  title: string;
};

export default function InsideItem({ title }: InsideItemProps): JSX.Element {
  return <li className="offer__inside-item">{title}</li>;
}

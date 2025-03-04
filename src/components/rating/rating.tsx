type RatingProps = {
  value: number;
};

function getRatingWidth(value: number): string {
  const widthPercent = (Number.parseInt(value.toFixed(), 10) * 100) / 5;
  return `${widthPercent}%`;
}

export default function Rating({ value }: RatingProps): JSX.Element {
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: getRatingWidth(value) }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

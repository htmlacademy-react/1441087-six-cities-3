import { getCapitalizedString } from '../../utils';

type FeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

export default function Features({ type, bedrooms, maxAdults }: FeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {getCapitalizedString(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

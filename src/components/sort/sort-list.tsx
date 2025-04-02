import { SortType } from '../../const';
import SortItem from './sort-item';

type SortListProps = {
  isVisible: boolean;
  onClick: React.MouseEventHandler<HTMLUListElement>;
};

function SortList(props: SortListProps): JSX.Element {
  const { isVisible, onClick } = props;

  return (
    <ul
      className={`places__options places__options--custom ${
        isVisible ? 'places__options--opened' : ''}`}
      onClick={onClick}
    >
      {Object.values(SortType).map((sortType) => (
        <SortItem key={sortType} itemSortType={sortType} />
      ))}
    </ul>
  );
}

export default SortList;

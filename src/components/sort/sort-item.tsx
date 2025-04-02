import { setSort } from '../../store/action';
import { SortType } from '../../const';
import useAppDispatch from '../../hooks/use-app-dispatch';

type SortItemProps = {
  itemSortType: typeof SortType[keyof typeof SortType];
};

function SortItem(props: SortItemProps): JSX.Element {
  const { itemSortType } = props;
  const dispatch = useAppDispatch();

  const handleItemClick = () => {
    dispatch(setSort(itemSortType));
  };

  return (
    <li className="places__option" tabIndex={0} onClick={handleItemClick}>
      {itemSortType}
    </li>
  );
}

export default SortItem;

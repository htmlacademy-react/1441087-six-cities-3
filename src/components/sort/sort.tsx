import { useState } from 'react';
import SortList from './sort-list';
import useAppSelector from '../../hooks/use-app-selector';

function Sort(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const currentSortType = useAppSelector((state) => state.sortType);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList isVisible={isOpen} onClick={handleSortClick}/>
    </form>
  );
}

export default Sort;

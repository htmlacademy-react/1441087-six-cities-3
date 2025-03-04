const SORTING_TYPES: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function getSortingItem(sortingType: string): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>
      {sortingType}
    </li>
  );
}

export default function Sorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_TYPES.map((sortingType) => getSortingItem(sortingType))}
      </ul>
    </form>
  );
}

type SortItemProps = {
  title: string;
};

function SortItem({ title }: SortItemProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>
      {title}
    </li>
  );
}

export default SortItem;

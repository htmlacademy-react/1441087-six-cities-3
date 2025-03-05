type SortItemProps = {
  title: string;
};

export default function SortItem({ title }: SortItemProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>
      {title}
    </li>
  );
}

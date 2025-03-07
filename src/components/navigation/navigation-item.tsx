type NavigationItemProps = {
  title: string;
};

function NavigationItem({ title }: NavigationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{title}</span>
      </a>
    </li>
  );
}

export default NavigationItem;

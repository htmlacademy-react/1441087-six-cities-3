type NavItemProps = {
  title: string;
};

export default function NavItem({ title }: NavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{title}</span>
      </a>
    </li>
  );
}

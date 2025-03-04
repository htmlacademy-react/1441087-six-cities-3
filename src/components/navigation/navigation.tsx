import { CITIES } from '../../const';
import NavItem from '../nav-item/nav-item';

export default function Navigation(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <NavItem key={city} title={city} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

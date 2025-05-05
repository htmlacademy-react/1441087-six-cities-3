import { memo } from 'react';
import { CITIES } from '../../const/app-const';
import NavigationItem from './navigation-item';

function NavigationComponent(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(CITIES).map((city) => (
              <NavigationItem
                key={city.name}
                itemCity={city}
              />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

const Navigation = memo(NavigationComponent);

export default Navigation;

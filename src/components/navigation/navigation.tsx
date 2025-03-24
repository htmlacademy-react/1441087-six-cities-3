import { getCitiesNames } from '../../utils';
import NavigationItem from './navigation-item';

function Navigation(): JSX.Element {
  const citiesNames = getCitiesNames();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citiesNames.map((cityName) => (
              <NavigationItem key={cityName} title={cityName} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Navigation;

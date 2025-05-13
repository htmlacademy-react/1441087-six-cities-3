import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore } from '../../utils/mock-utils';
import { CITIES } from '../../const/app-const';
import Navigation from './navigation';

describe('Component: Navigation', () => {
  it('should render correctly with all cities', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<Navigation />);
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);

    Object.values(CITIES).forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
  });
});

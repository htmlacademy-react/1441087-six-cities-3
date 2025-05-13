import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore } from '../../utils/mock-utils';
import FavoriteButton from './favorite-button';

describe('Component: FavoriteButton', () => {
  it('should render correctly', () => {
    const mockAppStore = getMockAppStore();
    const mockOfferId = '89b6ae84-2724-4369-ab85-6877dbdd2795';
    const mockOfferIsFavorite = false;
    const expectedText = 'To bookmarks';

    const withProvidersComponent = withProviders(
      <FavoriteButton
        buttonType="Offer"
        offerId={mockOfferId}
        isFavorite={mockOfferIsFavorite}
      />
    );
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

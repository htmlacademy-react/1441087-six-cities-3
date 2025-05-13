import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const expectedTestId = 'footer-testid';
    const preparedComponent = withProviders(<Footer />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});

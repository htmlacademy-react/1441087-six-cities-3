import { memo } from 'react';
import Logo from '../logo';

function FooterComponent(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo logoType='Footer' />
    </footer>
  );
}

const Footer = memo(FooterComponent);

export default Footer;

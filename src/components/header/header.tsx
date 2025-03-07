import { getMockAuthStatus } from '../../mock/auth-status';
import { isUserLoggedIn, isRequiredPage } from '../../utils';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo';
import HeaderUser from './header-user';
import HeaderSignIn from './header-sign-in';
import HeaderSignOut from './header-sign-out';

const isLoggedIn = isUserLoggedIn(getMockAuthStatus());

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const isLoginPage = isRequiredPage(pathname, AppRoute.Login);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!isLoginPage ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isLoggedIn ? <HeaderUser /> : null}
                {isLoggedIn ? <HeaderSignOut /> : null}
                {!isLoggedIn ? <HeaderSignIn /> : null}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}

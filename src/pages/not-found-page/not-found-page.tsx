import Header from '../../components/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className='page page--gray page--login'>
      <Header/>
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>404</h1>
            <p className='offer__price-text'>Page not Found</p>
            <form className='login__form form' action='#' method='post'>
              <button className='login__submit form__submit button' type='submit'>
                Go to Home
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a className='locations__item-link' href='#'>
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

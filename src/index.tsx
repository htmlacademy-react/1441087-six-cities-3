import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app';
import { getMockOfferPreviews } from './mock/offer-previews-mock';

const offerPreviews = getMockOfferPreviews();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerPreviews={offerPreviews} />
    </Provider>
  </React.StrictMode>
);

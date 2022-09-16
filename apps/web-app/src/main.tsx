import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../../../libs/web-app-lib/data-access/store/store';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

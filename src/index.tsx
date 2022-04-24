/* TODO: connect to Redux */
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import configureStore from './store/configureStore';
import App from './App';
import { GlobalStyles } from './components/styles'

// const store = configureStore();
const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  // </Provider>
);

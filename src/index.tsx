import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container as Wrapper } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store/configureStore';
import Home from './containers/HomeContainer';
import Rules from './pages/Rules';
import About from './pages/About';
import { Navigation } from './components/Navigation';
import { GlobalStyles } from './components/styles';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

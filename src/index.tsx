/* TODO: connect to Redux */
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import configureStore from './store/configureStore';
import Home from './pages/Home';
import Rules from './pages/Rules';
import About from './pages/About';
import { Navigation } from './components/Navigation';
import { GlobalStyles } from './components/styles';

// const store = configureStore();
const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <GlobalStyles />
    <Navigation />
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
  </BrowserRouter>,
  // </Provider>
);

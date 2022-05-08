import { FunctionComponent, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container as Wrapper } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/HomeContainer';
import Rules from './pages/Rules';
import About from './pages/About';
import { useWebsocket } from './api/socket';
import { Navigation } from './components/Navigation';
import { GlobalStyles } from './components/styles';;

const App: FunctionComponent = () => {
  const { ws } = useWebsocket();

  useEffect(() => {
    return () => {
      ws.close()
    }
  }, [ws]);

  return (
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
  );
};

export default App;

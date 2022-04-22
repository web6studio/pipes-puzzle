import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

/* TODO: add other pages */
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='rules' element={<Rules />} /> */}
    </Routes>
  );
};

export default App;

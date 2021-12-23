import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';

import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;

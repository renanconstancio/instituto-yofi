import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
import Equipe from './pages/Equipe';

import Home from './pages/Home';
import Ibitinga from './pages/Ibitinga';
import Itapolis from './pages/Itapolis';
import QuemSomos from './pages/QuemSomos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/nossa-equipe" element={<Equipe />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/como-chegar/itapolis" element={<Itapolis />} />
        <Route path="/como-chegar/ibitinga" element={<Ibitinga />} />
      </Routes>
    </Router>
  );
}

export default App;

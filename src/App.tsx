import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
import Equipe from './pages/Equipe';
import Galeria from './pages/Galeria';

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
        <Route path="/nossas-unidades" element={<Equipe />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/como-chegar/itapolis" element={<Itapolis />} />
        <Route path="/como-chegar/ibitinga" element={<Ibitinga />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

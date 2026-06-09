import '../src/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DetalheFilme from './pages/DetalhesFilmes';
import Sobre from './pages/Sobre';
import NaoEncontrado from './pages/NaoEncontrado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="filme/:id" element={<DetalheFilme />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

export default App;
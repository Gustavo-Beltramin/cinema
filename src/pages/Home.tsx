import { useState } from 'react';
import { FILMES } from '../data/Filmes';
import CartaoFilme from '../components/CartaoFilmes';

function Home() {
  // MISSÃO 1: criar estado 'busca' (string, começa vazio)
  const [busca, setBusca] = useState("")
  // MISSÃO 2: filtrar FILMES pelo título usando .filter()
  const filmesFiltrados = FILMES.filter(filme =>
  filme.titulo.toLowerCase().includes(busca.toLowerCase())
);

  return (
    <div className="pagina-home">
      <h1>Filmes</h1>

      {/* MISSÃO 3: input controlado para a busca */}
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="🔍 Buscar filme..."
        className="campo-busca"
      />

      {/* MISSÃO 4: renderizar filmesFiltrados com CartaoFilme + key */}
      <div className="grid-filmes">
        {filmesFiltrados.map((p) => <CartaoFilme key={p.id} filme={p}/>)}
      </div>

      {/* Exibir contagem */}
      { <p className="contagem">{filmesFiltrados.length} filme(s) encontrado(s)</p>}
    </div>
  );
}

export default Home;
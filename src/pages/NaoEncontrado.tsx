import { Link } from 'react-router-dom';

export default function NaoEncontrado() {
  return (
    <div className="pagina-erro">
      <h1>404</h1>

      <p>Página não encontrada.</p>

      <Link to="/" className="btn-voltar-home">
        Voltar para o início
      </Link>
    </div>
  );
}
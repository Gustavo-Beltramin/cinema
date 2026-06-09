import type { Filme } from '../types/Filmes';
import { Link } from 'react-router-dom';

interface CartaoFilmeProps {
  filme: Filme;
}

function CartaoFilme({ filme }: CartaoFilmeProps) {
  return (
    <article className="card-filme">

      <div className="card-capa">
        🎞️
      </div>

      <div className="card-info">

        <h3>{filme.titulo}</h3>

        <p>{filme.ano}</p>

        <span className="badge-genero">
          {filme.genero}
        </span>

        <Link
          to={`/filmes/${filme.id}`}
          className="btn-ver"
        >
          Ver detalhes →
        </Link>

      </div>

    </article>
  );
}

export default CartaoFilme;
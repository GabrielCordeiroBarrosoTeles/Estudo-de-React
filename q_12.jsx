import React, { useState } from 'react';

function PaginacaoDeItens({ itensPorPagina, itens }) {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const itensDaPagina = itens.slice(indiceInicial, indiceFinal);

  const paginas = Math.ceil(itens.length / itensPorPagina);

  return (
    <div>
      <ul>
        {itensDaPagina.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: paginas }, (_, index) => (
          <button
            key={index}
            onClick={() => setPaginaAtual(index + 1)}
            disabled={paginaAtual === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

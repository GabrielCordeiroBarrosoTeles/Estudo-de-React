import React from 'react';

function GraficoDeBarras({ dados }) {
  const maiorValor = Math.max(...dados);

  return (
    <div>
      {dados.map((valor, index) => (
        <div
          key={index}
          style={{
            width: `${(valor / maiorValor) * 100}%`,
            backgroundColor: 'blue',
            height: '20px',
            marginBottom: '5px',
          }}
        />
      ))}
    </div>
  );
}

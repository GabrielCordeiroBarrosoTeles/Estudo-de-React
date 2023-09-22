import React, { useState } from 'react';

function ToggleExibicao() {
  const [exibir, setExibir] = useState(false);

  return (
    <div>
      <button onClick={() => setExibir(!exibir)}>
        {exibir ? 'Esconder' : 'Mostrar'}
      </button>
      {exibir && <p>Texto a ser exibido/ocultado.</p>}
    </div>
  );
}

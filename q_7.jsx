import React, { useState } from 'react';

function ContadorDeCliques() {
  const [cliques, setCliques] = useState(0);

  return (
    <div>
      <p>Cliques: {cliques}</p>
      <button onClick={() => setCliques(cliques + 1)}>Clicar</button>
    </div>
  );
}

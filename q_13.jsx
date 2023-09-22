import React, { useState } from 'react';

function Modal() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div>
      <button onClick={() => setModalAberto(true)}>Abrir Modal</button>
      {modalAberto && (
        <div className="modal">
          <div className="modal-conteudo">
            <button onClick={() => setModalAberto(false)}>Fechar</button>
            <p>Conteúdo do modal aqui.</p>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';

function FormularioLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui (pode ser simulada com dados fixos)
    if (usuario === 'usuario' && senha === 'senha') {
      setLogado(true);
    }
  };

  return (
    <div>
      {logado ? (
        <p>Bem-vindo, {usuario}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

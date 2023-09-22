import React, { useState } from 'react';

function FormularioCadastro() {
  const [dados, setDados] = useState({ nome: '', email: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dados);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={dados.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={dados.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={dados.senha}
        onChange={handleChange}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

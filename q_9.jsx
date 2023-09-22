import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const marcarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = `✔️ ${novasTarefas[index]}`;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={novaTarefa}import React, { useEffect, useState } from 'react';

function RequisicaoAPI() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setDados(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dados da API:</h2>
      <ul>
        {dados.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}

        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => marcarConcluida(index)}>Concluída</button>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

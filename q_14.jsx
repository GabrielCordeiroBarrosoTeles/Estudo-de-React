import React, { useState } from 'react';

function ArrastarESoltar() {
  const [itens, setItens] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const index = e.dataTransfer.getData('index');
    const newItens = [...itens];
    const [removedItem] = newItens.splice(index, 1);
    newItens.splice(newIndex, 0, removedItem);
    setItens(newItens);
  };

  return (
    <ul>
      {itens.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

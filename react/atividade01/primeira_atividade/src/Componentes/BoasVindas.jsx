import React from 'react';

let nome= prompt('Digite seu nome');

 let BoasVindas = (BoasVindas)=> {
  return (
    <section>
      <h1 style={{ color: '#000' }}>Olá, Seja Bem-Vindo</h1>
      <p style={{ color: '#000' }}>Seja feliz, {nome}</p>
    </section>
  );
};

export default BoasVindas;
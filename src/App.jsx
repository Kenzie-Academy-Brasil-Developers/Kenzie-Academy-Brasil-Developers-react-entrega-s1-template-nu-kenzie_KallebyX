import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import CalcularTotal from './components/TotalMoney';
import './styles/index.scss'

function App() {
  const [transacoes, setTransacoes] = useState([]);

  const adicionarTransacao = (novaTransacao) => {
    setTransacoes([...transacoes, novaTransacao]);
  };

  const excluirTransacao = (id) => {
    const transacoesAtualizadas = transacoes.filter((transacao) => transacao.id !== id);
    setTransacoes(transacoesAtualizadas);
  };

  return (
    <>
    <div className='primaria'>
      <div className='esquerda'>
        <Header />
        <Form onAddTransaction={adicionarTransacao} />
        <CalcularTotal transactions={transacoes} />
      </div>
      <div className='direita'>
        <List transactions={transacoes} onDelete={excluirTransacao} />
      </div>
    </div>
    </>
  );
}

export default App;
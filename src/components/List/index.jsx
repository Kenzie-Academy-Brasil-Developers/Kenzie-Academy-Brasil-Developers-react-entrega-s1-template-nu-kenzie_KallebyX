import React from 'react';

const List = ({ transactions, onDelete }) => {
  return (
    <div className="principalList">
      <h3 className='tituloList'>Resumo financeiro</h3>
      {transactions.map((transaction) => (
        <div id='card' key={transaction.id} className={`card ${transaction.tipo === 'entrada' ? 'entrada' : 'saida'}`}>
          <div className="card-header">
            <div className='h3valor'>
              <h3>{transaction.descricao}</h3>
              <p>
                Valor: {transaction.valor >= 0 ? 'R$ ' : 'R$ '}
                {Math.abs(transaction.valor).toFixed(2)}
              </p>
            </div>
            <div className='botaotipo'>
              <p>
              {transaction.tipo === 'entrada' ? 'Entrada' : 'Saída'}
              </p>
              <button className='botao' onClick={() => onDelete(transaction.id)}>Excluir</button>    
            </div>
          </div>
          <div className="card-content"> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
import React from 'react';

const CalcularTotal = ({ transactions }) => {
  const calcularTotal = () => {
    return transactions.reduce((total, transacao) => {
      return total + transacao.valor;
    }, 0);
  };

  const formatarValor = (valor) => {
    return valor >= 0 ? `R$ ${valor.toFixed(2)}` : `R$ ${(Math.abs(valor)).toFixed(2)} (Débito)`;
  };

  return (
    <div className='principalTotal'>
      <div className='tituloValor'>
        <h3 className='tituloTotal'>Valor total:</h3>
        <p className='valorTotal'>{formatarValor(calcularTotal())}</p>
      </div>
      <p className='textoTotal'>O valor se refere ao saldo</p>
    </div>
  );
};

export default CalcularTotal;

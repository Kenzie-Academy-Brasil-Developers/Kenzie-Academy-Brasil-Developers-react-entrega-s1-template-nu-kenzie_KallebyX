import React, { useState } from 'react';

const Form = ({ onAddTransaction }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('entrada');

  const handleDescricaoChange = (e) => {
    setDescricao(e.target.value);
  };

  const handleValorChange = (e) => {
    setValor(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const adicionarTransacao = () => {
    if (descricao.trim() === '' || valor.trim() === '') {
      return;
    }

    const novoValor = parseFloat(valor.replace(',', '.'));

    const novaTransacao = {
      id: new Date().getTime(),
      descricao,
      valor: tipo === 'entrada' ? novoValor : -novoValor,
      tipo: tipo,
    };
    

    onAddTransaction(novaTransacao);

    setDescricao('');
    setValor('');
    setTipo('entrada');
  };

  return (
    <div className='principalForm'>
      <form className='formulario'>
        <div>
          <p className='titulo'>Descrição</p> 
          <input
            className='descricao'
            type="text"
            id="descricao"
            value={descricao}
            onChange={handleDescricaoChange}
            placeholder="digite aqui sua descrição"
          />
          <p className='exemplo'>Ex: Compra de roupas</p>
        </div>
        <div className='valor'>
          <p className='tituloValor'>Valor (R$)</p>
          <input
            className='valorBox'
            type="text"
            id="valor"
            value={valor}
            onChange={handleValorChange}
            placeholder="Valor"
          />
        </div>
        <div className='tipo'>
          <p className='tituloTipo'>Tipo de Valor</p>
          <select className='seletor' id="tipo" value={tipo} onChange={handleTipoChange}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
        <button className='button' type="button" onClick={adicionarTransacao}>
        Inserir valor
        </button>
      </form>
    </div>
  );
};

export default Form;
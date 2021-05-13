import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'

import { api } from '../../services/api'

import { TransactionsContext } from '../../TransactionsContext'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount: Number(amount),
      category,
      type,
    })

     setTitle('')
     setAmount('')
     setType('')
     setCategory('')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('income')}}
            isActive={type === 'income'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {setType('outcome')}}
            isActive={type === 'outcome'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
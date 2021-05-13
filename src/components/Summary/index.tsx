import { useContext } from "react";

import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <span>R$ <strong>{Intl.NumberFormat('pt-BR').format(summary.deposits)}</strong>,00</span>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <span>R$ <strong>{Intl.NumberFormat('pt-BR').format(summary.withdraws)}</strong>,00</span>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <span>{(summary.total < 0) ? '- ' : ''}R$
          <strong> {Intl.NumberFormat('pt-BR').format(Math.abs(summary.total))}</strong>
          ,00
        </span>
      </div>
    </Container>
  )
}
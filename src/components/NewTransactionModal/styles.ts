import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const radioBoxColors = {
  green: 'rgb(18, 164, 84, 0.1)',
  red: 'rgb(229, 46, 77, 0.1)'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: ${({ isActive }) => isActive ? '0 solid #d7d7d7' : '1px solid #d7d7d7' };
  border-radius: 0.25rem;

  background: ${({ isActive, activeColor }) => isActive
    ? radioBoxColors[activeColor]
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: #acacac;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`

interface ItemProps {
  isNegative?: boolean;
}

export const Item = styled.div<ItemProps>`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  &:last-child {
    background: ${({ isNegative }) => isNegative ? 'var(--red)' : 'var(--green)'};
    color: #FFF;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    display: inline-block;
    margin-top: 1rem;
    font-size: 2rem;

    strong {
      font-weight: 500;
    }
  }
`
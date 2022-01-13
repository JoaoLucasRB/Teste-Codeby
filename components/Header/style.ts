import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-bottom: 4.5rem;

  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  color: var(--white);
  font-size: 2rem;
  cursor: pointer;
`

export const CartIcon = styled.div`
  svg {
    fill: var(--white);
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;
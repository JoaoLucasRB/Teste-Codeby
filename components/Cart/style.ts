import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
`

export const CartTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--grey);
  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
`

export const CartProductList = styled.div`
  border-bottom: 1px solid var(--grey);
  width: 100%;
  height: 39rem;
  overflow-y: auto;

  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: var(--dark-grey);
    padding: 1.2rem;
  }
`

export const CartProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  & > img {
    width: 6rem;
    margin-right: 1rem;
  }

  & >div {
    width: 100%;
    & > p {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--black);
      padding-bottom: 0.3rem;
    }
  }
`

export const CartProductTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  margin-bottom: 0.5rem;
    height: 3.5rem;

  & > div {
    min-width: 70%;
    width: 70%;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > p.cart-product-original-value {
      color: var(--dark-grey);
      text-decoration: line-through;
      font-weight: 500;
      font-size: 0.9rem;
    }

    & > p.cart-product-value {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.1rem;
    }
  }

  & > input {
    width: 20%;
    border: none;
    text-align: center;
    background: var(--grey);
    border-radius: 6px;
    height: 100%;
    font-weight: 500;
  }
`;

export const CartProductItemExtra = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  &.show-un-price {
    justify-content: space-between;
  }

  & > p.cart-product-unit-value {
    color: var(--dark-grey);
    font-size: 0.7rem;
  }

  & > button {
    background: var(--red);
    color: var(--white);
    transition: background 0.3s ease-in-out;
    font-size: 0.6rem;
    padding: 0.1rem;
    &:hover {
      background: var(--dark-red);
    }
  }
`

export const CartTotal = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--grey);

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: var(--black);
      font-weight: 700;
      font-size: 1.2rem;
    }
  }

  & > span {
    margin-top: 1rem;
    background: lightgreen;
    border-radius: 100px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: green;
    font-weight: 700;
    font-size: 1rem;
  }
`

export const CartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    background: var(--blue);
    color: var(--white);
    margin: 1rem;
    width: 100%;

    &:hover {
      background: var(--dark-blue);
    }
  }
`
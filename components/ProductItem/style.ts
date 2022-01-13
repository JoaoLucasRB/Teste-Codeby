import styled from 'styled-components';

export const ProductContainer = styled.div`
  min-width: 31.288%;
  max-width: 31.288%;
  border: 4px solid var(--white);
  border-radius: 6px;
  background: var(--white);
  padding: 1rem;
  margin: 0.5rem 0.7rem;

  @media(max-width: 1128px) {
    min-width: 29%;
    max-width: 29%;
  }
  @media(max-width: 1120px) {
    min-width: 40%;
    max-width: 40%;
  }
  @media(max-width: 900px) {
    min-width: 40%;
    max-width: 40%;
  }
  @media(max-width: 800px) {
    min-width: 90%;
    max-width: 90%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 19rem;
    height: 20rem;
    margin: 0;
  }

  & >div {
    padding: 0;
    background: var(--white);
    display: flex;
    flex-direction: column;

    & > p {
      color: var(--black);
      font-weight: 600;
      font-size: 1rem;
      height: 2.5rem;
    }

    & > button {
      border: none;
      background: var(--blue);
      color: var(--white);
      padding: 0.5rem;
      font-weight: 600;
      transition: background-color 0.3s ease-in-out;

      &:hover{
        background: var(--dark-blue);
      }
    }
  }
`;

export const PriceContainer = styled.div`
  
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & > div {
    min-width: 70%;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    height: fit-content;

    & > span.original-value {
      color: var(--dark-grey);
      text-decoration: line-through;
      font-weight: 500;
      font-size: 1.05rem;
    }

    & > span.value {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  & > input {
    min-width: 30%;
    max-width: 30%;
    background: var(--grey);
    border: none;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
  }
`
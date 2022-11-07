import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;
  
  position: relative;

  width: 100%;

  @media screen and (max-width: ${({theme}) => theme.screens.s}){
    margin-top: 0;
    padding: 1.5rem 1.5rem;
    background: ${({theme}) => theme.colors.gray_900_085};
    height: 100vh;
  }
`

export const SearchProductForm = styled.form`
  display: flex;
  gap: 1rem;

  padding: 1.5rem 2.25rem;

  border-radius: 1rem;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  width: 100%;

  background: ${({theme}) => theme.colors.gray_900};

  button {
    @media screen and (max-width: ${({theme}) => theme.screens.s}){
      display: none;
    }
  }
`

export const CardBoxResult = styled.div`
  position: relative;

  padding: 1.75rem 1.75rem;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray_800};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .head{ 
    @media screen and (max-width: 448px) {
      flex-wrap: wrap;
    }
  }
`

export const CardImage = styled.div`
  background: ${({ theme }) => theme.colors.gray_700};
  height: auto;
  padding: 1rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }
`

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  padding: .5rem;

  padding-bottom: 2rem;

  border-radius: 1rem;

  border: 1px solid rgba(255, 255, 255, 0.1);

  width: 100%;

  background: ${({theme}) => theme.colors.gray_900};

  max-height: 60vh;

  &>p{
    padding: 2rem;
    padding-bottom: 0;
  }

  .overflow__scroll{
    overflow-y: auto;
    overflow-x: hidden;

    padding: 0 2rem;

    ::-webkit-scrollbar{
      background-color: ${({ theme }) => theme.colors.gray_900};
    }
  }
`
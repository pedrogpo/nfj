import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  overflow-y: auto;
  
  position: relative;
  width: 100%;
  
  height: 500px;

  @media screen and (max-width: ${({theme}) => theme.screens.s}){
    padding: 2.5rem 3rem;
    background: red;
    height: 100vh;
  }
`

export const SearchProductBox = styled.div`

  display: flex;
  gap: 1rem;

  padding: 1.5rem 2.25rem;

  border-radius: 15px;

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
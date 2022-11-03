import styled from "styled-components";

export const Jumbotron = styled.main`

  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;

  padding-top: 122px;
  padding-bottom: 122px;

`

export const Content = styled.div`

  width: 100%;
  color: ${({theme}) => theme.colors.gray_100};

  display: flex;
  flex-direction: column;
  gap: 16px;

`

export const TextGradient = styled.span`

  ${({theme}) => `
    background: linear-gradient(97.09deg, ${theme.colors.secondary_500} 0%, ${theme.colors.primary_500} 120%);
  `}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

`
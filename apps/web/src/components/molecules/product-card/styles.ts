import styled from "styled-components";

export const Card = styled.div`
  min-width: 280px;
  max-width: 350px;

  position: relative;

  padding: 1.75rem 1.75rem;
  border-radius: 1.25rem;
  background-color: ${({theme}) => theme.colors.gray_900};

  .dots svg{
    fill: ${({theme}) => theme.colors.gray_500} !important;
  }

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const CardImage = styled.div`
  background: ${({theme}) => theme.colors.gray_800};
  width: 100%;
  height: auto;
  padding: 2rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    object-fit: contain;
  }
`


export const UserCollector = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 2.30px;

  ${() => {
    let finalDivs = ""
    for (var i = 1; i < 10; i++){
      finalDivs += `
        &>div:nth-child(${i}){
          transform: translateX(calc(${i} * -10%));
        }
      `
    }
    return finalDivs
  }}

`

export const UserCollectorBox = styled.div`

  width: 1.55rem;
  height: 1.55rem; 
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.primary_400};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme}) => theme.colors.gray_100};
  font-weight: ${({theme}) => theme.typography.weight.medium};
  font-size: ${({theme}) => theme.typography.text.xs};

  outline: 3px solid ${({theme}) => theme.colors.gray_900};

`
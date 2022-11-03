import styled from "styled-components";

export const Card = styled.div`
  padding: 1.75rem 2.5rem;
  border-radius: 1.25rem;
  background-color: ${({theme}) => theme.colors.gray_900};
`


export const UserCollector = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 10.5px;

  ${() => {
    let finalDivs = ""
    for (var i = 1; i < 10; i++){
      finalDivs += `
        &>div:nth-child(${i}){
          transform: translateX(calc(${i} * -30%));
        }
      `
    }
    return finalDivs
  }}

`

export const UserCollectorBox = styled.div`

  width: 35px;
  height: 35px; 
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.primary_400};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme}) => theme.colors.gray_100};
  font-weight: ${({theme}) => theme.typography.weight.medium};

`
import styled from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

export const UserCollectorContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 2.3px;

  ${() => {
    let finalDivs = ''
    for (var i = 1; i < 10; i++) {
      finalDivs += `
        &>div:nth-child(${i}){
          transform: translateX(calc(${i} * -10%));
        }
      `
    }
    return finalDivs
  }}
`

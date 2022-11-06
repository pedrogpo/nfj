import styled from 'styled-components'

export const Footer = styled.footer`
  color: white;

  margin-top: 10rem;

  @media screen and (max-width: 992px){
    margin-top: 5rem;
  }

  padding: 40px 0;

  ul {
    margin-top: 0.5rem;
    list-style-type: none;
    padding-left: 0;
    li {
      line-height: 35px;
    }
  }
`

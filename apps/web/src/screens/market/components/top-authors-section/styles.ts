import styled from 'styled-components'

export const TopAuthorsSection = styled.section`
  width: 100%;
  padding-bottom: 16.7rem;

  padding-top: calc(5rem + 4rem + 130px); // TODO: change this later

  @media screen and (max-width: 567px) {
    padding-top: calc(5rem + 4rem);
  }

  @media screen and (max-width: 992px) and (min-width: 576px) {
    padding-top: calc(5rem + 4rem + 3.75rem);
  }

  .section__title {
    margin-bottom: 2.5rem;
  }
`

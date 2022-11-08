import styled from 'styled-components'

export const DropCardAuthor = styled.div`
  display: flex;
  align-items: center;
  .author__avatar {
    border-radius: 50%;
    width: 1.5rem;
    aspect-ratio: 1;
    height: auto;

    margin-right: 0.5rem;
  }
  > p {
    margin-right: 0.25rem;
  }
  .author__verified {
    width: 0.75rem;
    height: 0.75rem;
  }
`

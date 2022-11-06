import styled from 'styled-components'

export const AuthorCardContainer = styled.div`
  max-width: 196px;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1;
  height: auto;
  border-radius: 16px;
  cursor: pointer;

  > .author_card__content {
    position: absolute;
    bottom: -1px;
    left: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.75rem;
    border-radius: 0 0 16px 16px;
  }

  .author__name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 0.75rem;
      aspect-ratio: 1;
      height: auto;
    }
  }
`
interface AuthorCardContainerProps {
  img: string
}

export const AuthorCardBackground = styled.div<AuthorCardContainerProps>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: scale 0.2s ease-in-out;

  &:hover {
    scale: 1.2;
  }
  width: 100%;
  height: 100%;
`

import styled from 'styled-components'

export const AuthorCardContainer = styled.div`
  background: #fff;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1;
  height: auto;
  position: relative;
  border-radius: 16px;
  cursor: pointer;

  > .author_card__content {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    padding: 0.75rem;
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
    scale: 1.5;
  }
  width: 100%;
  height: 100%;
`

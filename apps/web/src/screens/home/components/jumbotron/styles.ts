import styled from "styled-components";

export const Jumbotron = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  padding-top: calc(122px + 65px + 130px);

  @media screen and (max-width: 567px){
    padding-top: calc(122px + 64px);
  }

  .cards{
    position: relative;

    display: flex;
    justify-content: end;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 992px){
      justify-content: center;
    }
    
    & > div:not(.overlay) {
      box-shadow: -4px 0px 23px 5px rgba(0, 0, 0, 0.4);
      filter: drop-shadow(4px 4px 25px rgba(0, 0, 0, 0.35));
    }

    & > div:nth-child(1){
      transform: scale(1.10) perspective(400px) rotateY(-20deg) rotateX(10deg) rotateZ(-3deg);
      left: 90px;
      @media screen and (max-width: 992px){
        transform: scale(.85) perspective(400px) rotateY(-20deg) rotateX(10deg) rotateZ(-3deg);
        left: calc(140px / 2);
      }
    }

    & > div:nth-child(2){
      transform: scale(0.90) perspective(400px) rotateY(15deg) rotateX(10deg) rotateZ(0deg);
      position: relative;
      bottom: -50px;
      @media screen and (max-width: 992px){
      transform: scale(0.65) perspective(400px) rotateY(15deg) rotateX(10deg) rotateZ(0deg);
        right: calc(140px / 2);
      }
    }
  }


  @media screen and (max-width: 992px) and (min-width: 576px){
    padding-top: calc(122px + 65px + 60px);
  }
`

export const Content = styled.div`
  position: relative;

  width: 100%;
  color: ${({theme}) => theme.colors.gray_100};

  display: flex;
  flex-direction: column;
  gap: 16px;

  /* overlay */
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(88, 55, 221, 0.15) 0%, rgba(88, 55, 221, 0.03) 78.12%, rgba(88, 55, 221, 0) 100%);
    transform: translate(-40%, -40%);
    z-index: -1;
  }

  .overlay::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(1, 193, 180, 0.15) 0%, rgba(1, 193, 180, 0.03) 78.12%, rgba(1, 193, 180, 0) 100%);
    transform: translate(45%, 25%);
    z-index: -1;
  }

`

export const TextGradient = styled.span`

  ${({theme}) => `
    background: linear-gradient(97.09deg, ${theme.colors.secondary_500} 0%, ${theme.colors.primary_500} 120%);
  `}
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
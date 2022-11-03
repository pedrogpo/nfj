import styled from "styled-components";

export const Jumbotron = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;

  padding-bottom: 16.7rem;

  padding-top: calc(7.5rem + 4rem + 130px); // TODO: change this later

  @media screen and (max-width: 567px){
    padding-top: calc(7.5rem + 4rem);
  }
  
  @media screen and (max-width: 992px) and (min-width: 576px){
    padding-top: calc(7.5rem + 4rem + 3.75rem);
  }

  .container {
    position: relative;
  }

  .cards{
    position: relative;
    z-index: 999;

    display: flex;
    justify-content: end;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 992px){
      justify-content: center;
    }

    &:hover{
      & > div:nth-child(1){
        transform: scale(0.85) perspective(350px) rotateY(10deg) rotateX(10deg) rotateZ(0deg);
        @media screen and (max-width: 992px){
          transform: scale(0.55) perspective(350px) rotateY(10deg) rotateX(10deg) rotateZ(0deg);
          left: calc(140px / 2);
        }
        left: 45px;
      }

      & > div:nth-child(2){
        transform: scale(1.05) perspective(350px) rotateY(-15deg) rotateX(5deg) rotateZ(0deg);

        @media screen and (max-width: 992px){
          transform: scale(.55) perspective(350px) rotateY(-15deg) rotateX(5deg) rotateZ(0deg);
        }
        bottom: -40px;
      }
    }
    
    & > div:not(.overlay) {
      transition: .6s ease all;
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

  .right__overlay{
    position: absolute;
    right: -140px;
    top: calc(-7.5rem - 4rem - 130px);
    width: 70%;
    height: 100vh;
    min-height: 100vh;
    clip-path: polygon(0 0, 0% 0, 0% 0%, 0 0%);
    transition: .6s ease all;

    img {
      width: 100%;
      height: 950px;
    }

    &.active{
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    @media screen and (max-width: 992px){
      display: none;
    }
  }
`

export const Content = styled.div`
  position: relative;

  width: 100%;
  color: ${({theme}) => theme.colors.gray_100};

  display: flex;
  flex-direction: column;
  gap: 1rem;

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
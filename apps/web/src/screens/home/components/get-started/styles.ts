import styled, { css } from "styled-components";

export const GetStarted = styled.section`
  position: relative;

  width: 100%;
  margin: 2rem 0;
  overflow: hidden;

  padding-bottom: 5rem;

  .container{
    position: relative;
  }

  .head{
    margin-bottom: 7rem;
  }

  .card__box{
    img{
      width: 60%;
      @media screen and (min-width: 310px) and (max-width: 992px){
        width: fit-content;
      }
    }
    .card__box__icon{
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: double 3px transparent;
      background-image: ${({theme}) => `linear-gradient(${theme.colors.background}, ${theme.colors.background}), 
                                        linear-gradient(90deg, ${theme.colors.primary_500} 0%, ${theme.colors.background} 100%)`};
      background-origin: border-box;
      background-clip: padding-box, border-box;
    
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({theme}) => theme.colors.gray_100}
    }
  }

  .overlay{ 
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translate(-100%, -50%);
  }
`
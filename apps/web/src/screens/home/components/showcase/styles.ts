import styled from "styled-components";

export const Showcase = styled.section`
  position: relative;
  width: 962px;

  /* overlay */
  /* .overlay__left {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translate(-40%, -50%);
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255,0.08) 0%, rgba(255, 255, 255,0) 100%);
  } */

  @media screen and (max-width: 965px){
    width: 100%;
  }
  
  margin: 0 auto;

  .swiper-slide{
    width: 350px;
    @media screen and (max-width: 350px){
      width: 100%;
      > div{
        min-width: 100%;
        max-width: 100%;
      }
    }
    user-select: none;
  }

  .swiper-pagination-bullets{
    display: none !important;
  }

  .pagination__icon{
    padding: .5rem;
    position: absolute;
    top: 50%;
    color: white;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.gray_700};
    z-index: 9999;
    cursor: pointer;
    svg {
      user-select: none;
    }
  }

  .pagination__left{
    transform: translate(-100%, -50%);
    left: -20px;
  }

  .pagination__right{
    transform: translate(100%, -50%);
    right: -20px;
  }

  @media screen and (max-width: 1105px){
    width: 95%;
    
    .pagination__left{
      transform: translate(-50%, -50%);
      left: 0;
    }

    .pagination__right{
      transform: translate(50%, -50%);
      right: 0;
    }
  }

  @media screen and (max-width: 965px){
    .pagination__left{
      transform: translate(0, -50%);
      left: 0;
    }

    .pagination__right{
      transform: translate(0, -50%);
      right: 0;
    }
  }


`
import styled from "styled-components";

export const Content = styled.section`

  width: 100%;
  height: 100vh;
  min-height: 100vh;

  overflow: hidden;

  padding-top: calc(7.5rem + 3.75rem);
  padding-bottom: calc(7.5rem + 3.75rem);

  @media screen and (min-width: 576px) and (max-width:992px){
    padding-top: calc(7.5rem + 4rem + 3.75rem);
  }

  .left__content{
    position: relative;
    img{
      width: 100%;
      object-fit: contain;
    }
    .overlay{
      position: absolute;
      width: 100%;
      left:0;
      transform: scaleY(-1)  translateY(-100%);
      opacity: .3;
      filter: blur(1px);

      @media screen and (max-width: 576px){
        display: none;
      }
    }
  }

`
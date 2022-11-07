import styled, { css } from "styled-components";

export const GetStarted = styled.section`
  position: relative;

  width: 100%;
  margin: 2rem 0;
  overflow: hidden;

  margin-bottom: 10rem;

  @media screen and (max-width: 768px){
    margin-bottom: calc(10rem / 2);
  }

  .container{
    position: relative;
  }

  & .subject{
    margin-bottom: 7rem;
  }  

  .overlay{ 
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translate(-100%, -50%);
  }
`
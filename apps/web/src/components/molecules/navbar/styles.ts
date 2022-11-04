import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  top: 3rem;

  @media screen and (max-width: 576px){
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: 0;
  }

  z-index: 99999;

  background: ${({theme}) => theme.colors.gray_900_085} !important;

  backdrop-filter: blur(25px);

  padding: 1.5rem 2.25rem;

  border-radius: 15px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  .navbar-toggler {
    border-color: transparent;
    box-shadow: none !important;
    border: 1px solid ${({theme}) => theme.colors.gray_600};
    padding: 0.5rem .7rem;
    font-size: 1rem;
  }

  .nav-link {
    color: ${({theme}) => theme.colors.gray_500};
    font-weight: ${({theme}) => theme.typography.weight.medium}!important;
    font-size: ${({theme}) => theme.typography.text.m} !important;
    :hover {
      color: ${({theme}) => theme.colors.gray_200};
    }

    transition: 0.3s color ease;
    position: relative;
  }

  .nav-link.active {
    color: ${({theme}) => theme.colors.gray_100};
  }

  .icons__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.25rem;
  }

  .nav-btn{
    margin-left: 1.25rem;
    @media screen and (max-width: 992px){
      margin-left: 0;
    }
  }

  @media screen and (max-width: 992px){
    .icons__top{
      width: 100%;
    }
    .search__input{
      width: 50px;
      input {
        padding-right: 5px;
      }
    }
  }
`
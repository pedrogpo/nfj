import styled from "styled-components";

export const ProfileBox = styled.div`
  background: ${({ theme }) => theme.colors.gray_900};
  border-radius: 1rem;
`

export const ProfileHeader = styled.div`
  background: #5837DD;
  padding: 1rem 2.25rem;
  border-radius: 1rem 1rem 0 0;

  position: relative;

  img{
    background: ${({ theme }) => theme.colors.gray_800};
    border-radius: 50%;
    transform: translateY(calc(50% + 1rem));
  }

  .icon__edit{
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`

export const ProfileContent = styled.div`
  padding: 2.5rem 2.25rem;
  margin-top: calc(5rem - 2.25rem);
`
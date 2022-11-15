import styled from "styled-components";

export const CredentialsBox = styled.div`
  background: ${({ theme }) => theme.colors.gray_900};
  padding: 2.25rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
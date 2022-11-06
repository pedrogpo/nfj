import { Container } from "react-bootstrap";
import styled from "styled-components";

export const CTA = styled(Container)`
  background: ${({ theme }) => theme.colors.primary_400};

  border-radius: 1.25rem;
  .content__left{
    padding: 4rem;
    padding-right: 0;

    display: flex;
    flex-direction: column;
    
    position: relative;

    p {
      margin-bottom: 4rem;
    }
  }

`
import styled, { keyframes } from 'styled-components'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { BiChevronDown } from 'react-icons/bi'
const slideDown = keyframes`
    0% {
        height: 0px;
    }
    100% {
        height: var(--radix-accordion-content-height);
    }
`

const slideUp = keyframes`
    0% {
        height: var(--radix-accordion-content-height);
    }
        100% {
        height: 0px;
    }
`

export const AccordionContainer = styled(AccordionPrimitive.Root)`
  width: 100%;
`

export const AccordionItem = styled(AccordionPrimitive.Item)`
  overflow: hidden;
  margin-top: 1;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  border-radius: 8px;
`

export const StyledHeader = styled(AccordionPrimitive.Header)`
  all: unset;
  display: flex;
`
export const StyledChevron = styled(BiChevronDown)`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  width: 1.25rem;
  aspect-ratio: 1;
  height: auto;
`
export const StyledTrigger = styled(AccordionPrimitive.Trigger)`
  all: unset;
  font-family: inherit;
  background-color: transparent;
  padding: 1rem 1.25rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gray_100};
  &[data-state='closed'] ${StyledChevron} {
    transform: rotate(180deg);
  }
  &[data-state='open'] {
  }
  &:hover {
    background: ${({ theme }) => theme.colors.gray_900};
  }
`

export const AccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_600};

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

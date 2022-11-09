import React, { forwardRef } from 'react'
import { IconType } from 'react-icons'
import { BiChevronDown, BiLineChart } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import * as S from './styles'

function AccordionHeader({ children }, ref) {
  return (
    <S.StyledHeader>
      <S.StyledTrigger ref={ref}>
        <S.AccordionHeader>{children}</S.AccordionHeader>
        <S.StyledChevron aria-hidden />
      </S.StyledTrigger>
    </S.StyledHeader>
  )
}
const AccordionTrigger = forwardRef<any, any>(AccordionHeader)

interface AccordionProps {
  icon: JSX.Element
  title: string
  children: React.ReactNode
}
export default function Accordion({ icon, title, children }: AccordionProps) {
  return (
    <S.AccordionContainer type="single" collapsible>
      <S.AccordionItem value="item-1">
        <AccordionTrigger>
          {icon}
          <Text color="gray_100" weight="medium" size="m">
            {title}
          </Text>
        </AccordionTrigger>
        <S.AccordionContent>{children}</S.AccordionContent>
      </S.AccordionItem>
    </S.AccordionContainer>
  )
}

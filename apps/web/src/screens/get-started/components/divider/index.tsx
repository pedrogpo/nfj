import * as S from './styles'

interface DividerWithTextProps {
  children?: string
}

export default function DividerHorizontal({ children }) {
  return (
    <S.DividerHorizontal>
      <div className="divider" />
      {children && <span className="content">{children}</span>}
      <div className="divider" />
    </S.DividerHorizontal>
  )
}

import * as S from './styles'

export default function ProductCard() {
  return (
    <S.Card>
      <div className='head d-flex'>
        <S.UserCollector>
          <S.UserCollectorBox>P</S.UserCollectorBox>
          <S.UserCollectorBox>P</S.UserCollectorBox>
          <S.UserCollectorBox>P</S.UserCollectorBox>
          <S.UserCollectorBox>P</S.UserCollectorBox>
        </S.UserCollector>
      </div>
    </S.Card>
  )
}

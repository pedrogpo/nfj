import { useState } from 'react'
import { BiCake, BiCheck } from 'react-icons/bi'
import * as S from './styles'

export default function CheckBoxInput() {
  const [checked, setChecked] = useState(false)

  return (
    <S.CheckBoxContainer>
      <S.CheckBoxRoot
        checked={checked}
        onCheckedChange={() => {
          setChecked(!checked)
        }}
      >
        <S.CheckBoxIndicator>{checked && <BiCheck />}</S.CheckBoxIndicator>
      </S.CheckBoxRoot>
      <label>
        I agree with the <a href="#">Terms of Use</a>
      </label>
    </S.CheckBoxContainer>
  )
}

import styled from "styled-components"
import { ColorThemeType, TitleFontSize, WeightFont } from "../../../core/constants/theme"

interface TitleProps{
  size: TitleFontSize,
  color: ColorThemeType,
  weight: WeightFont
}

export const Title = styled.h1<TitleProps>`
  color: ${({theme, color}) => theme.colors[color]};
  font-size: ${({theme, size}) => theme.typography.title[size]};
  font-weight: ${({theme, weight}) => theme.typography.weight[weight]};
`
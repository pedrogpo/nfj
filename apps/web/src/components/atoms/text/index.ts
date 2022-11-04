import styled from "styled-components"
import { ColorThemeType, TextFontSize, WeightFont } from "~/core/constants/theme"

interface TextProps{
  size: TextFontSize,
  color: ColorThemeType,
  weight: WeightFont
}

export const Text = styled.p<TextProps>`
  color: ${({theme, color}) => theme.colors[color]};
  font-size: ${({theme, size}) => theme.typography.text[size]};
  font-weight: ${({theme, weight}) => theme.typography.weight[weight]};
  margin-bottom: 0;
`

interface TextGradientProps{
  border?: boolean
}

export const TextGradient = styled.span<TextGradientProps>`
  ${({border, theme}) => border ? (`
      background: linear-gradient(97.09deg, ${theme.colors.secondary_500} 0%, ${theme.colors.primary_500} 100%);
      -webkit-background-clip: text;
      -webkit-text-stroke: 2px transparent;
      color: ${theme.colors.background};
    `) :
    (`
      background: linear-gradient(97.09deg, ${theme.colors.secondary_500} 0%, ${theme.colors.primary_500} 120%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `)
  }
`
import styled, { css } from "styled-components";
import { ColorThemeType } from "~/core/constants/theme";

interface ButtonProps {
  color: ColorThemeType,
  size: "m" | "l",
  fill: "contained" | "outlined",
  hug: boolean 
}

const paddingVariants = (size) => {
  return {
    m: 'padding: 0.75rem 2rem;',
    l: 'padding: 0.875rem 3rem;'
  }[size]
}

export const Button = styled.button<ButtonProps>`

  ${({hug}) =>
    css`width: ${hug ? '100%' : 'fit-content'};`
  }

  ${({theme, color, fill}) => `
    background: ${fill === "contained" ? theme.colors[color] : "transparent"};
    border: ${fill === "outlined" ? `1px solid ${theme.colors[color]}` : "none"};
    color: ${theme.colors.gray_100};
  `}

  ${({size}) => paddingVariants(size)}

  border-radius: 5px;
`
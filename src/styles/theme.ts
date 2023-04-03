import { DefaultTheme, css } from "styled-components";

export const colors = {} as const;

export const gradients = {
  RainyAshville: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
  AmyCrisp: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);",
  DeepBlue: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);",
  GentleCare: "linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%);",
  GagarinView:
    "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);",
} as const;

export const animation = {
  hoverButton: css`
    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  `,
} as const;

export type ColorTypes = typeof colors;
export type GradientsTypes = typeof gradients;
export type AnimationTypes = typeof animation;

const theme: DefaultTheme = { colors, gradients, animation };

export default theme;

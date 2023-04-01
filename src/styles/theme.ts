import { DefaultTheme, css } from "styled-components";

export const colors = {
  blue: {
    "3": "#438AFF",
    "5": "#A1C5FF",
  },
} as const;

export const animation = {
  hoverButton: css`
    &:hover {
      transform: scale(1.1);
      transition: 0.3s;
    }
  `,
} as const;

const theme: DefaultTheme = { colors, animation };

export default theme;

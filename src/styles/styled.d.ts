import "styled-components";
import { animation, gradients, colors } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    gradients: typeof gradients;
    animation: typeof animation;
  }
}

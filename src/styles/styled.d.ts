import "styled-components";
import { ColorTypes, GradientsTypes, AnimationTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof ColorTypes;
    gradients: typeof GradientsTypes;
    animation: typeof AnimationTypes;
  }
}

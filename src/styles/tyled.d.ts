import "styled-components";
import { theme, containerCenter, rem, flexCenter } from "./index";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends theme {}
  export interface DefaultTheme extends containerCenter {}
  export interface DefaultTheme extends rem {}
  export interface DefaultTheme extends flexCenter {}
}

import 'styled-components';
import { theme, containerCenter, rem,flexCenter } from './index';
// and extend them!

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

import styled from "styled-components";
import { theme, containerCenter, flexCenter } from "../../styles";

export const OurStore = styled.section`
  height: 80px;

  background: ${theme.color.gray};
`;

export const OurStoreContainer = styled.div`
  ${containerCenter(1024)};
  ${flexCenter("space-between", "center")};
  height: 100%;

  > img {
    margin: 0 48px;
  }
`;

export const OurStoreContext = styled.div`
  ${flexCenter("space-between", "center")};
  flex: 1;
`;
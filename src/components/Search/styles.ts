import styled from "styled-components";
import { flexCenter, theme } from "../../styles/index";

export const ContainerSearcher = styled.div`
  ${flexCenter("center", "center")}

  border: 1px solid red;
  border-radius: 24px;

  height: 40px;
  width:240px;

  overflow: hidden;
  input {
    ${flexCenter("flex-start", "center")}
    flex: 1;
    
    border: 0;
    color: ${theme.color.pink};
    font-weight: 500;

    height: 98%;
    padding-left: 16px;
    outline: transparent;

    &::placeholder {
      color: ${theme.color.pink};
      font-weight: 500;
    }
  }

  svg { 
    padding: 5px 13px;
  }
`;

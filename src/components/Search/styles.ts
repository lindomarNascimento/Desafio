import styled from "styled-components";
import { flexCenter, theme, rem } from "../../styles/index";

export const ContainerSearcher = styled.div`
  ${flexCenter("center", "center")}

  border: 1px solid ${theme.color.gray};
  border-radius: 24px;

  height: 100%;
  width: 100%;

  position: relative;
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


export const ResultSearchContainer = styled.section`
  position: absolute;
  top: 100%;
  
  width: 100%;
  height: 100px;

  background-color: ${theme.color.gray};

  z-index: 3;

  border-radius: 0 10px 10px 10px;

  &.hide {
    display: none;
  }

  > div {
    ${flexCenter("space-between", "center")};
    height: 100%;
  }

  img {
    margin-right: 10px;
  }

  h4 {
    font-size: ${rem(12)};
  }

  strong {
    color: ${theme.color.pink};
    font-weight: 700;
    font-size: ${rem(14)};
  }

  span {
    text-transform: capitalize;
    font-size: ${rem(12)};
  };

  .error {
    font-size: ${rem(20)};
    font-weight: 700;
    color: ${theme.color.pink};

    ${flexCenter("center", "center")};
    text-align: center;

    padding: 10px;
  }
`


export const Close = styled.span`
  color: ${theme.color.white};
  background: ${theme.color.pink};

  font-size: ${rem(32)};
  font-weight: 700;

  ${flexCenter('center', 'center')};

  position:absolute;
  top: 90%;
  right: -10px;

  padding: 10px;
  height: 25px;
  width: 25px;

  border-radius: 50%;

  cursor: pointer;
`
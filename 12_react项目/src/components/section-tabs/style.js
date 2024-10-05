import styled from "styled-components";
import boxShadow from "../../assets/css/common";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    box-sizing: border-box;
    /* flex-basis: 10px; */
    justify-content: space-around;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 6px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: #00848a;
    }
    &:hover {
      ${boxShadow}
    }
  }
`;

import styled from "styled-components";
import boxShadow from "../../../../assets/css/common";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${boxShadow}
  }
  .search-bar,
  .text {
    font-size: 14px;
    font-weight: 600;
    margin-left: 6px;
  }
  .icon img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    color: #fff;
  }
`;

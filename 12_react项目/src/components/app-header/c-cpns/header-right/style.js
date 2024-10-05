import styled from "styled-components";
import boxShadow from "../../../../assets/css/common";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .btns {
    display: flex;
    justify-content: center;
    padding: 24px;
  }
  .btns span {
    margin: 10px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 16px;
    font-weight: 600;
  }
  img {
    width: 20px;
    height: 20px;
  }
  .profile {
    position: relative;
    border: 1px solid #eee;
    border-radius: 30%;
    position: relative;
    top: 4px;
    padding-right: 4px;
    margin-right: 20px;
    ${boxShadow}
    .panel {
      position: absolute;
      z-index: 99;
      right: 0;
      top: 54px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      color: #666;
      .top,
      .bottom {
        padding: 8px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
            cursor: pointer;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
  .profile img {
    padding: 5px;
    cursor: pointer;
  }
`;

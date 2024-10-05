import styled from "styled-components";

export const FooterWrapper = styled.div`
  .info {
    margin: 10px 0;
  }
  .text {
    margin-left: 4px;
    cursor: pointer;
    font-size: 17px;
    color: ${(props) => props.color};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
  .icon img {
    width: 12px;
    height: 12px;
    position: relative;
    left: 10px;
    cursor: pointer;
  }
`;

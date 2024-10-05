import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 17%;
  .inner {
    position: relative;
    padding: 8px;
    border-radius: 6px;
    overflow: hidden;
  }
  .cover {
    width: 100%;
  }
  img {
    width: 155px;
    border-radius: 6px;
  }
  .bg-cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 45%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }
  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

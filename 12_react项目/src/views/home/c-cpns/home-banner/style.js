import styled from "styled-components";
// 在React中引入图片
import coverImg from "../../../../assets/img/cover_01.jpeg";

export const BannerWrapper = styled.div`
  height: 529px;
  /* 使用引入的图片 */
  background: url(${coverImg}) center/cover;
`;

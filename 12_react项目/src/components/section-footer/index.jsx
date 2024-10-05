import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "../section-footer/style";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = "显示全部";
  if (name) {
    showMessage = `显示更多${name}房源`;
  }
  // 事件处理逻辑
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/entire");
    // 回到页面顶部
    window.scrollTo(0, 0);
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showMessage}</span>
        <span className="icon">
          <img
            src="https://img2.baidu.com/it/u=1462402248,1202493324&fm=253&fmt=auto&app=138&f=JPEG?w=319&h=500"
            alt=""
          />
        </span>
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string
};

export default SectionFooter;

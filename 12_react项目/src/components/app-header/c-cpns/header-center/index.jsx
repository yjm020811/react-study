import React, { memo } from "react";
import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <img
            src="https://img95.699pic.com/xsj/05/ue/um.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
            alt=""
          />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;

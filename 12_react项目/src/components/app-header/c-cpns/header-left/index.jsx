import React, { memo } from "react";
import { LeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function logoClickHandle() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className="img">
        <img
          onClick={logoClickHandle}
          src="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png"
          alt=""
        />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;

import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";

const index = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <RoomWrapper itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(".")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="bottom">
          <Rating
            //"??"判断前面的值是否为null或undefined,是的话就为5
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A" }}
          ></Rating>
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  );
});

index.propTypes = {
  itemData: PropTypes.object
};

export default index;

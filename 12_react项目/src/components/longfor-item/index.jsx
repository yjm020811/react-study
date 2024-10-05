import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemData.city}</div>
          <div className="price">均价:{itemData.price}</div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  ItemData: PropTypes.object
};

export default LongforItem;

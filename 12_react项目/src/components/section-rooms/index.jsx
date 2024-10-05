import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../../components/room-item/index";
import { RoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  // console.log(props);
  const { roomList = [], itemWidth } = props;
  return (
    <RoomWrapper>
      {roomList.slice(0, 8)?.map((item) => {
        return (
          <RoomItem
            itemData={item}
            itemWidth={itemWidth}
            key={item.id}
          ></RoomItem>
        );
      })}
    </RoomWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array
};

export default SectionRooms;

import React, { memo } from "react";
import { useSelector } from "react-redux";
import RoomItem from "../../../../components/room-item/index";
import { RoomWrapper } from "./style";

const EntireRoom = memo(() => {
  // 从redux获取roomlist的数据
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }));
  return (
    <RoomWrapper>
      <h2 className="title">{totalCount}多处住所</h2>
      <div className="list">
        {roomList?.map?.((item) => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
          );
        })}
      </div>
    </RoomWrapper>
  );
});

export default EntireRoom;

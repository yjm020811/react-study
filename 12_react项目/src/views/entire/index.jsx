import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import { useDispatch } from "react-redux";
import EntireRoom from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { fetchRoomListAction } from "../../store/modules/entire/actionCreators";

const Entire = memo(() => {
  // 发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  );
});

export default Entire;

import React, { memo } from "react";
import { RoomWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { useSelector } from "react-redux";

const EntireRoom = memo(() => {
  const roomList = useSelector((state) => state.entire.roomList);
  const totalCount = useSelector((state) => state.entire.totalCount);
  return (
    <RoomWrapper>
      <div className="title">{totalCount}处住宅</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} key={item.id} itemwidth="20%" />;
        })}
      </div>
    </RoomWrapper>
  );
});

export default EntireRoom;

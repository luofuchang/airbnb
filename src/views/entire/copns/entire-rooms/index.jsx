import React, { memo } from "react";
import { RoomWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const EntireRoom = memo(() => {
  const roomList = useSelector((state) => state.entire.roomList);
  const totalCount = useSelector((state) => state.entire.totalCount);
  const isLoading = useSelector((state) => state.entire.isLoading);
  return (
    <RoomWrapper>
      <div className="title">{totalCount}处住宅</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} key={item._id} itemwidth="20%" />;
        })}
      </div>
      {isLoading && (
        <div className="cover">
          <CircularProgress className="loading" disableShrink />
        </div>
      )}
    </RoomWrapper>
  );
});

export default EntireRoom;

import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";
import RoomItem from "@/components/room-item";

const SectionRoom = memo((props) => {
  const { roomList = [] } = props;
  return (
    <RoomWrapper>
      <div className="room-list">
        {roomList?.slice(0, 8)?.map((item) => {
          return <RoomItem itemData={item} key={item.id} />;
        })}
      </div>
    </RoomWrapper>
  );
});

SectionRoom.propTypes = {
  roomList: PropTypes.array.isRequired,
};

export default SectionRoom;

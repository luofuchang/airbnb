import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <RoomItemWrapper
      $itemwidth={itemWidth}
      $verify_color={itemData?.verify_info?.text_color || "#39576a"}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default RoomItem;

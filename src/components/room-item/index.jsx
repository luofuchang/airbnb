import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <RoomItemWrapper
      $itemwidth={itemWidth}
      $verify_color={itemData?.verify_info?.text_color ?? "#39576a"}
      $content_color={itemData?.bottom_info?.content_color ?? "#39576a"}
      $content_fontsize={itemData?.bottom_info?.font_size ?? "12px"}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <div className="rating">
            <Rating
              precision={0.2}
              value={itemData.star_rating ?? 3}
              sx={{ fontSize: "12px", color: itemData?.star_rating_color }}
            />
          </div>
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra"> · {itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default RoomItem;
